const $ = (el) => document.querySelector(el);

const isFirstVisit = (key = "firstVisit") => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, "true");
    return true;
  }
  return false;
};

/* Dark mode implementation are done below */
const darkmode = document.querySelector('link[href="assets/darkmode.css"]');
const disableDarkMode = () => {
  localStorage.setItem("darkmode", "false");
  setTheme();
};
const enableDarkMode = () => {
  localStorage.setItem("darkmode", "true");
  setTheme();
};
const toggleDarkMode = () => {
  localStorage.getItem("darkmode") == "false"
    ? localStorage.setItem("darkmode", "true")
    : localStorage.setItem("darkmode", "false");
  setTheme();
};
const setTheme = () => {
  if (darkmode != null) {
    darkmode.disabled = localStorage.getItem("darkmode") == "false";
  }
};
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
(() => {
  if (localStorage.getItem("darkmode") === null)
    localStorage.setItem("darkmode", prefersDark);
  else setTheme();
})();

const theme = async () => {
  const themeButton = document.createElement("button");
  themeButton.classList.add("theme-button");

  themeButton.onclick = toggleDarkMode;
  themeButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" 
  width="24" height="24" viewBox="0 0 24 24" 
  fill="none" stroke="currentColor" stroke-width="2" 
  stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2v2"/>
    <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/>
    <path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/>
    <path d="M20 12h2"/>
  </svg>
  <p>Light / Dark Mode</p>
  `;
  themeButton.title = "Light/Dark Mode";
  if (isFirstVisit()) {
    themeButton.classList.add("first-time");
    setTimeout(() => {
      themeButton.classList.remove("first-time");
    }, 3000);
  }
  if (darkmode != null) {
    document.body.appendChild(themeButton);
  }
};

/* Footer implementation are done below */
const footer_main = async () => {
  const footer = document.createElement("footer");
  const socialLinks = document.createElement("div");

  await fetch("data/links.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((social) => {
        const link = document.createElement("a");
        link.href = social.href;
        link.target = "_blank";
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.innerText = social.title;
        const icon = document.createElement("img");
        icon.src = social.icon;
        icon.alt = social.title;
        link.appendChild(tooltip);
        link.appendChild(icon);
        socialLinks.appendChild(link);
      });
      socialLinks.classList.add("links");
      footer.appendChild(socialLinks);

      const khudkitarif = document.createElement("p");
      khudkitarif.classList.add("desdev");
      fetch("data/misc.json")
        .then((res) => res.json())
        .then((data) => {
          khudkitarif.innerText = data[0].content;
          footer.appendChild(khudkitarif);
        });
    })
    .catch((err) => {
      console.error(err);
    });

  document.body.appendChild(footer);
};

document.addEventListener("DOMContentLoaded", () => {
  footer_main();
  theme();
});

String.prototype.caps = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const show404 = () => {
  const errordiv = document.createElement("div");
  const errormessage = document.createElement("p");
  errormessage.innerText = "404 | Page Not Found";
  errordiv.appendChild(errormessage);
  errordiv.classList.add("not-found");
  return errordiv;
};

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
window.addEventListener("pageshow", () => {
  document.body.classList.add("loaded");
});

const handlePageTransition = (e) => {
  const link = e.currentTarget;
  const href = link.getAttribute("href");

  if (
    href.startsWith("#") ||
    link.target === "_blank" ||
    link.hasAttribute("download")
  )
    return;

  e.preventDefault();

  document.body.classList.remove("loaded");

  setTimeout(() => {
    window.location.href = href;
  }, 350);
};

document.addEventListener("click", function (e) {
  const link = e.target.closest("a");

  if (!link) return;

  const href = link.getAttribute("href");

  if (
    !href ||
    href.startsWith("#") ||
    link.target === "_blank" ||
    link.hasAttribute("download")
  )
    return;

  e.preventDefault();

  document.body.classList.remove("loaded");

  setTimeout(() => {
    window.location.href = href;
  }, 350);
});
