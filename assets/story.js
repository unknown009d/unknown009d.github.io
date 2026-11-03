/* 
================= WARNING! =================
============ DISTURBING VISUALS ============

Everything below is AI generated
Ya I'm just a lazy ass making my life easier

================= WARNING! =================
*/ 

/**
 * story.js
 * ----------------
 * Scroll story for the about page (aboutme-story.html).
 * Lenis smooths the native scroll, this file turns the scroll position into
 * a progress value for every chapter and writes it as CSS variables.
 * All the looks live in story.css, nothing here animates on its own.
 *
 * Every chapter is a full screen layer inside one sticky stage.
 *   data-span="3"       how many screens of scrolling the chapter lasts
 *   data-in="0.1 0.3"   element enters between these chapter progress values
 *   data-out="0.7 0.9"  element leaves between these chapter progress values
 *   data-chapter="diy"  runs an extra setup for that chapter (see hooks)
 * 
 */

// screens where two chapters overlap, so one fades while the next arrives
const OVERLAP = 0.4;

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smooth = (t) => t * t * (3 - 2 * t);
const progress = (p, [a, b]) => smooth(clamp((p - a) / (b - a)));
const parse = (attr) => (attr ? attr.trim().split(/\s+/).map(Number) : null);

// only touch the DOM when a value actually changed
const set = (el, prop, value) => {
  const v = value.toFixed(4);
  el._story ??= {};
  if (el._story[prop] === v) return;
  el._story[prop] = v;
  el.style.setProperty(prop, v);
};

/* The Mess: tiles flow in radially with blur + opacity fade, and drift
   back out smoothly when leaving the chapter */
const setupMess = (chapter) => {
  const canvas = chapter.querySelector(".canvas");
  const tiles = [...chapter.querySelectorAll(".tile")].map((tile) => {
    const [l, t, w, h] = ["--l", "--t", "--w", "--h"].map((k) =>
      parseFloat(tile.style.getPropertyValue(k))
    );
    const vx = (l + w / 2 - 50) / 50;
    const vy = (t + h / 2 - 50) / 50;
    const dist = clamp(Math.hypot(vx, vy) / Math.SQRT2);

    // inner ring leads inward so outer tiles never cross or pile over inner ones;
    // on exit, outer ring leads outward first so paths never collide
    const inStart = 0.02 + dist * 0.12;
    const inEnd = inStart + 0.34;
    const outStart = 0.6 + (1 - dist) * 0.1;
    const outEnd = outStart + 0.28;
    tile.dataset.in = `${inStart.toFixed(3)} ${inEnd.toFixed(3)}`;
    tile.dataset.out = `${outStart.toFixed(3)} ${outEnd.toFixed(3)}`;
    return { tile, vx, vy };
  });

  // radial displacement proportional to each tile's vector from the centre,
  // preserving relative positions so tiles never overlap each other
  const layout = () => {
    const frame = canvas.getBoundingClientRect();
    const spreadX = frame.width * 0.16;
    const spreadY = frame.height * 0.16;
    tiles.forEach(({ tile, vx, vy }) => {
      const dx = vx * spreadX;
      const dy = vy * spreadY;
      ["--ix", "--ox"].forEach((k) =>
        tile.style.setProperty(k, `${dx.toFixed(1)}px`)
      );
      ["--iy", "--oy"].forEach((k) =>
        tile.style.setProperty(k, `${dy.toFixed(1)}px`)
      );
    });
  };

  return { layout };
};

/* DIYRemote: the dashed line is drawn by scrolling, every [data-anchor]
   shows up when the line reaches it (on mobile, pans the vertical timeline) */
const setupDIY = (chapter) => {
  const stage = chapter.closest(".story-stage");
  const canvas = chapter.querySelector(".canvas");
  const line = chapter.querySelector(".diy-line");
  const mask = chapter.querySelector(".diy-mask");
  const tip = chapter.querySelector(".diy-tip");
  const length = line.getTotalLength();
  mask.style.strokeDasharray = `${length} ${length}`;

  // find how far along the line every anchor sits (0 → 1)
  const anchors = [...chapter.querySelectorAll("[data-anchor]")].map(
    (el, idx, arr) => {
      const [x, y] = el.dataset.anchor.split(",").map(Number);
      let at = 0;
      let min = Infinity;
      for (let i = 0; i <= 400; i++) {
        const pt = line.getPointAtLength((length * i) / 400);
        const d = (pt.x - x) ** 2 + (pt.y - y) ** 2;
        if (d < min) {
          min = d;
          at = i / 400;
        }
      }
      const mStart = (idx / arr.length) * 0.72;
      return {
        el,
        range: [at - 0.025, Math.min(at + 0.04, 1)],
        mobileRange: [mStart, mStart + 0.16],
      };
    }
  );

  // the line starts far left so it always runs off the screen edge,
  // lead is the part already hidden behind that edge, so drawing starts there
  let lead = 0;
  let isMobile = false;
  let panDist = 0;
  let lineEnd = 1;
  let boxHeight = 1;
  let lastProgress = 0;
  const layout = () => {
    isMobile = window.innerWidth <= 768;
    const box = stage.getBoundingClientRect();
    boxHeight = box.height;
    if (isMobile) {
      const lastEl = anchors.at(-1)?.el;
      lineEnd = lastEl
        ? lastEl.offsetTop + lastEl.offsetHeight * 0.5
        : canvas.scrollHeight;
      const targetCenter = boxHeight * 0.54;
      panDist = Math.max(
        0,
        lastEl
          ? lastEl.offsetTop + lastEl.offsetHeight * 0.5 - targetCenter
          : canvas.scrollHeight - box.height
      );
      anchors.forEach((item, idx) => {
        const anchorY =
          idx === anchors.length - 1
            ? item.el.offsetTop + item.el.offsetHeight * 0.2
            : item.el.offsetTop;
        const mAt = anchorY / Math.max(1, lineEnd);
        item.mobileRange = [
          Math.max(0, mAt - 0.04),
          Math.min(mAt + 0.05, 0.98),
        ];
      });
      return;
    }
    canvas.style.removeProperty("--diy-pan");
    const frame = canvas.getBoundingClientRect();
    const edge = (box.left - frame.left) * (1600 / canvas.offsetWidth);
    lead = clamp(edge - line.getPointAtLength(0).x, 0, length);
  };

  const frame = (p) => {
    lastProgress = p;
    if (isMobile) {
      const t = clamp((p - 0.03) / 0.68);
      const yDot = t * lineEnd;
      const holdY = boxHeight * 0.42;
      const panProgress = clamp((yDot - holdY) / Math.max(1, lineEnd - holdY));
      canvas.style.setProperty(
        "--diy-pan",
        `${(-panProgress * panDist).toFixed(1)}px`
      );
      canvas.style.setProperty("--diy-line-px", `${yDot.toFixed(1)}px`);
      set(canvas, "--diy-line-o", clamp(t * 20));
      set(
        canvas,
        "--diy-tip-o",
        clamp(t * 30) * (1 - clamp((t - 0.97) / 0.03))
      );
      anchors.forEach(({ el, mobileRange }) =>
        set(el, "--in", progress(t, mobileRange))
      );
      return;
    }
    const t = clamp((p - 0.04) / 0.8);
    const drawn = lead + t * (length - lead);
    mask.style.strokeDashoffset = length - drawn;

    const pt = line.getPointAtLength(drawn);
    tip.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
    set(tip, "--in", clamp(t * 30) * (1 - clamp((t - 0.97) / 0.03)));

    anchors.forEach(({ el, range }) =>
      set(el, "--in", progress(drawn / length, range))
    );
  };

  // Re-measure whenever any DIY image finishes decoding so mobile pan distance is always exact
  chapter.querySelectorAll("img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener(
        "load",
        () => {
          layout();
          frame(lastProgress);
        },
        { once: true }
      );
    }
  });

  return { layout, frame };
};

/* Tuition Info: loops muted like a GIF while in view, with a pause/play toggle */
const setupTuition = (chapter) => {
  const video = chapter.querySelector(".tuition-video");
  const btn = chapter.querySelector(".tuition-pause");
  let userPaused = false;
  let inView = false;

  const hasSource = () =>
    Boolean(
      video &&
        (video.currentSrc ||
          video.getAttribute("src") ||
          video.querySelector("source[src]"))
    );

  const sync = () => {
    if (!hasSource()) return;
    if (inView && !userPaused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  btn?.addEventListener("click", () => {
    userPaused = !userPaused;
    chapter.classList.toggle("is-paused", userPaused);
    btn.setAttribute("aria-pressed", String(userPaused));
    const label = userPaused ? "Play video" : "Pause video";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
    sync();
  });

  const frame = (p) => {
    const active = p > 0.04 && p < 0.88;
    if (active === inView) return;
    inView = active;
    sync();
  };

  return { frame };
};

const setupMediaLoaders = (root) => {
  root.querySelectorAll("img").forEach((img) => {
    const inDiy = Boolean(img.closest(".chapter-diy"));
    if (!img.hasAttribute("loading")) {
      img.loading = inDiy ? "eager" : "lazy";
    }
    if (!img.hasAttribute("decoding")) img.decoding = "async";
    const host = img.parentElement?.closest(
      ".intro-photo, .tile, .avatar, figure.card"
    );
    if (!host || img.complete) return;
    host.classList.add("is-img-loading");
    const done = () => host.classList.remove("is-img-loading");
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
};

const hooks = { mess: setupMess, diy: setupDIY, tuition: setupTuition };

const story = () => {
  const track = document.querySelector(".story");
  if (!track) return;
  setupMediaLoaders(track);
  if (typeof Lenis === "undefined") return;
  // reduced motion keeps the plain stacked layout and native scroll
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("story-on");

  const chapters = [...track.querySelectorAll(".chapter")].map((el) => {
    const hook = hooks[el.dataset.chapter]?.(el);
    const items = [...el.querySelectorAll("[data-in], [data-out]")].map(
      (node) => ({
        node,
        in: parse(node.dataset.in),
        out: parse(node.dataset.out),
      })
    );
    return { el, span: Number(el.dataset.span) || 1, hook, items };
  });

  let vh = 0;
  let vw = 0;
  let top = 0;

  const layout = () => {
    vh = window.innerHeight;
    vw = window.innerWidth;
    let start = 0;
    chapters.forEach((c) => {
      c.start = start;
      start += c.span - OVERLAP;
    });
    const last = chapters.at(-1);
    track.style.height = `${(last.start + last.span + 1) * vh}px`;
    top = track.getBoundingClientRect().top + window.scrollY;
    chapters.forEach((c) => c.hook?.layout?.());
  };

  const render = (scroll) => {
    document.body.style.setProperty(
      "--grain-y",
      `${(scroll * -0.018).toFixed(2)}px`
    );
    const s = (scroll - top) / vh;
    chapters.forEach((c, i) => {
      const p = (s - c.start) / c.span;
      // the last chapter stays while the stage scrolls away into the footer
      const tail = i === chapters.length - 1 ? 1 + 1.2 / c.span : 1.4;
      const off = p < -0.6 || p > tail;
      c.el.classList.toggle("is-off", off);
      if (off) return;

      c.items.forEach(({ node, in: a, out: b }) => {
        if (a) set(node, "--in", progress(p, a));
        if (b) set(node, "--out", progress(p, b));
      });
      c.hook?.frame?.(p);
    });
  };

  layout();
  render(window.scrollY);

  const lenis = new Lenis({ lerp: 0.07, wheelMultiplier: 0.9, autoRaf: true });
  lenis.on("scroll", ({ scroll }) => render(scroll));

  // watch the stage instead of the window, this also catches a page that
  // was opened in a background tab with no size yet.
  // small height jumps from the mobile address bar are ignored
  new ResizeObserver(() => {
    if (window.innerWidth === vw && Math.abs(window.innerHeight - vh) < 160)
      return;
    layout();
    lenis.resize();
    render(window.scrollY);
  }).observe(track.querySelector(".story-stage"));
};

story();
