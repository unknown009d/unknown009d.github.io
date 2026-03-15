/**
 * ScrollSpy.js
 * ----------------
 * Lightweight Scroll Spy utility (no dependencies)
 * Highlights a navigation element when its corresponding section is in view.
 * Can also auto-generate a Table of Contents (TOC) from headings.
 *
 * Usage:
 *   ScrollSpy({
 *     sectionSelector: '.section',
 *     navSelector: '.nav-link',
 *     activeClass: 'active',
 *     threshold: 0.5,
 *     generateTOC: true,
 *     mainSelector: 'main',
 *     headingSelectors: 'h1, h2, h3'
 *   });
 *
 * @param {Object} options - Configuration object
 * @param {string} options.sectionSelector - Selector for each content section
 * @param {string} options.navSelector - Selector for navigation links
 * @param {string} [options.activeClass='active'] - Class to add when a section is active
 * @param {number} [options.threshold=0.6] - Portion of section visible to trigger activation (0–1)
 * @param {boolean} [options.observeOnce=false] - If true, only triggers once per section
 * @param {boolean} [options.generateTOC=false] - If true, generates a TOC from headings
 * @param {string} [options.mainSelector='main'] - Main content selector for TOC generation
 * @param {string} [options.headingSelectors='h1,h2,h3'] - Which headings to include in TOC
 */

export function ScrollSpy({
  sectionSelector,
  navSelector,
  activeClass = "active",
  threshold = 0.6,
  observeOnce = false,
  generateTOC = false,
  mainSelector = "main",
  contentPlace = false,
  headingSelectors = "h1, h2, h3, h4, h5",
  fallbackMsgTOC = "Case Study",
}) {
  // 🔸 Auto-generate TOC if requested
  if (generateTOC) {
    const main = document.querySelector(mainSelector);
    if (main) {
      const headings = main.querySelectorAll(headingSelectors);
      if (headings.length) {
        const aside = document.createElement("aside");
        const nav = document.createElement("nav");
        nav.id = "auto-toc";

        const p = document.createElement("p");
        p.innerText = "On this page";
        nav.appendChild(p);
        const TOC = document.createElement("h4");
        TOC.innerText =
          document.querySelector(contentPlace).dataset.toc ?? fallbackMsgTOC;
        nav.appendChild(TOC);

        let lastLevel = parseInt(headings[0].tagName[1]);
        let parentList = nav.appendChild(document.createElement("ul"));

        headings.forEach((h) => {
          const level = parseInt(h.tagName[1]);
          if (!h.id) {
            h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, "-");
          }

          const li = document.createElement("li");
          const a = document.createElement("a");
          a.textContent = h.textContent;
          a.href = `#${h.id}`;
          a.classList.add("nav-link");

          // Nest based on heading level
          if (level > lastLevel) {
            const sublist = document.createElement("ul");
            parentList.lastElementChild?.appendChild(sublist);
            parentList = sublist;
          } else if (level < lastLevel) {
            parentList = nav.querySelectorAll("ul")[0];
          }

          li.appendChild(a);
          parentList.appendChild(li);
          lastLevel = level;
        });

        if (contentPlace === false) {
          aside.appendChild(nav);
          document.body.appendChild(aside);
        } else {
          document.querySelector(contentPlace).appendChild(nav);
        }
      }
    }

    // Replace selectors to work with generated TOC
    sectionSelector = headingSelectors;
    navSelector = "#auto-toc .nav-link";
  }

  // 🔸 Keep old logic intact for backward compatibility
  if (!sectionSelector || !navSelector)
    throw new Error("ScrollSpy: sectionSelector and navSelector are required.");

  const sections = document.querySelectorAll(sectionSelector);
  const navLinks = document.querySelectorAll(navSelector);

  if (!sections.length || !navLinks.length) return;

  const removeActive = () =>
    navLinks.forEach((link) => link.classList.remove(activeClass));
  const activateLink = (id) => {
    removeActive();
    const link = document.querySelector(`${navSelector}[href="#${id}"]`);
    if (link) link.classList.add(activeClass);
  };

  // Initial hash activation
  const currentHash = window.location.hash;
  if (currentHash) {
    const id = currentHash.replace("#", "");
    const target = document.getElementById(id);
    if (target) activateLink(id);
  }

  const visibleSections = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          visibleSections.add(id);
          if (observeOnce) observer.unobserve(entry.target);
        } else {
          visibleSections.delete(id);
        }
      });

      if (
        visibleSections.size === sections.length ||
        visibleSections.size === 0
      ) {
        removeActive();
        return;
      }

      const topMost = [...visibleSections]
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null; // skip if element not found
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) // remove all nulls
        .sort((a, b) => a.top - b.top)[0];

      if (topMost) {
        activateLink(topMost.id);

        // Auto-expand correct TOC branch
        const activeLink = document.querySelector(
          `${navSelector}[href="#${topMost.id}"]`
        );
        if (activeLink) {
          const allLis = document.querySelectorAll("#auto-toc li");
          allLis.forEach((li) => li.classList.remove("expanded"));

          // Expand the li of the active link
          const li = activeLink.closest("li");
          if (li) li.classList.add("expanded");

          // Expand all ancestor <li> elements (for nested levels)
          let parent = li.parentElement;
          while (parent && parent.id !== "auto-toc") {
            if (parent.tagName.toLowerCase() === "ul") {
              const parentLi = parent.closest("li");
              if (parentLi) parentLi.classList.add("expanded");
            }
            parent = parent.parentElement;
          }
        }
      }
    },
    { threshold }
  );

  sections.forEach((section) => observer.observe(section));

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) activateLink(hash);
    else removeActive();
  });

  return observer;
}
