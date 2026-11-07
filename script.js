/* ============================================================
   VaayuSights — interactions
   Aerial particle field, scroll reveal, animated counters,
   mobile nav, form handling. Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Intro splash ---------- */
  var splash = document.getElementById("splash");
  if (splash) {
    if (reduceMotion) {
      splash.parentNode && splash.parentNode.removeChild(splash);
    } else {
      var root = document.documentElement;
      root.classList.add("splash-lock");
      var dismissed = false;
      function dismissSplash() {
        if (dismissed) return;
        dismissed = true;
        splash.classList.add("hide");
        root.classList.remove("splash-lock");
        setTimeout(function () { splash.parentNode && splash.parentNode.removeChild(splash); }, 900);
      }
      var hold = setTimeout(dismissSplash, 2300);
      splash.addEventListener("click", function () { clearTimeout(hold); dismissSplash(); });
      // safety: never trap the page if something stalls
      window.addEventListener("load", function () { setTimeout(dismissSplash, 2600); });
    }
  }

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: scrolled state + mobile toggle ---------- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav-links");

  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Hero video: skip the heavy load when it won't help ---------- */
  var heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    var saveData = navigator.connection && navigator.connection.saveData;
    var smallScreen = window.matchMedia("(max-width: 720px)").matches;
    if (reduceMotion || saveData || smallScreen) {
      // remove entirely so the file is never downloaded; hero falls back to the particle field
      heroVideo.removeAttribute("autoplay");
      try { heroVideo.pause(); } catch (e) {}
      heroVideo.remove();
    }
  }

  /* ---------- Digital-twin terrain mesh + live telemetry (hero) ---------- */
  var twin = document.querySelector(".hero-twin");
  if (twin) {
    var tctx = twin.getContext("2d");
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var TW, TH, tphase = 0;
    var cols = 30, rows = 16;
    function twinResize() {
      var r = twin.getBoundingClientRect();
      TW = twin.width = Math.max(2, Math.floor(r.width * DPR));
      TH = twin.height = Math.max(2, Math.floor(r.height * DPR));
    }
    function twinFrame() {
      tctx.clearRect(0, 0, TW, TH);
      tphase += 0.015;
      var pts = [], r, c;
      for (r = 0; r < rows; r++) {
        pts[r] = [];
        for (c = 0; c < cols; c++) {
          var nx = c / (cols - 1), ny = r / (rows - 1);
          var base = TH * 0.5 + ny * TH * 0.62;
          var z = Math.sin(nx * 7 + tphase) * Math.cos(ny * 5 + tphase * 0.7) * 20 * DPR
                + Math.sin(nx * 13 + ny * 9 + tphase * 1.3) * 7 * DPR;
          var persp = 0.35 + ny * 0.85;
          var px = TW / 2 + (nx - 0.5) * TW * 1.35 * persp;
          pts[r][c] = { x: px, y: base - z, z: z };
        }
      }
      function seg(p, q) {
        var i = Math.min(1, Math.max(0, (p.z / (24 * DPR) + 1) / 2));
        tctx.strokeStyle = "rgba(255," + Math.round(108 + i * 72) + "," + Math.round(18 + i * 46) + "," + (0.06 + i * 0.44) + ")";
        tctx.lineWidth = DPR;
        tctx.beginPath(); tctx.moveTo(p.x, p.y); tctx.lineTo(q.x, q.y); tctx.stroke();
      }
      for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
        if (c < cols - 1) seg(pts[r][c], pts[r][c + 1]);
        if (r < rows - 1) seg(pts[r][c], pts[r + 1][c]);
      }
      twinRaf = requestAnimationFrame(twinFrame);
    }
    var twinRaf = null, resizeT;
    window.addEventListener("resize", function () { clearTimeout(resizeT); resizeT = setTimeout(function () { twinResize(); }, 150); });
    window.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (twinRaf) cancelAnimationFrame(twinRaf); }
      else if (!reduceMotion) { twinRaf = requestAnimationFrame(twinFrame); }
    });
    twinResize();
    if (reduceMotion) { twinFrame(); if (twinRaf) cancelAnimationFrame(twinRaf); } // one static frame
    else twinFrame();
  }

  /* pipeline readout - ambient decoration, the same way the flight telemetry
     was before it. It counts a notional batch through the models; it is not a
     feed of real work, which is why the strip is aria-hidden. */
  var tFrames = document.getElementById("tAlt"), tFlag = document.getElementById("tSpd"), tConf = document.getElementById("tHdg");
  if (tFrames && !reduceMotion) {
    var fr = 8420, fl = 37, cf = 94;
    setInterval(function () {
      fr += Math.floor(Math.random() * 26);
      if (Math.random() < 0.18) fl += 1;
      cf += (Math.random() - 0.5) * 0.8;
      if (fr > 12000) { fr = 320; fl = 0; }          // next batch
      cf = Math.max(91, Math.min(97, cf));
      tFrames.textContent = fr.toLocaleString();
      tFlag.textContent = fl;
      tConf.textContent = cf.toFixed(0);
    }, 700);
  }

  /* ---------- Scroll progress bar ---------- */
  var prog = document.querySelector(".scroll-prog");
  if (prog) {
    var updateProg = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = "scaleX(" + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ")";
    };
    window.addEventListener("scroll", updateProg, { passive: true });
    window.addEventListener("resize", updateProg);
    updateProg();
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 620);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          setTimeout(function () { el.classList.add("in"); }, Math.min(i * 60, 240));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Deep links: re-align once reveal animations settle ---------- */
  function alignHash() {
    var id = (location.hash || "").slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    // reveals shift layout as they play, so land first, then correct
    setTimeout(function () {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, 420);
  }
  window.addEventListener("load", alignHash);
  window.addEventListener("hashchange", alignHash);

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll(".num[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = 0, dur = 1400, t0 = null;
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(eased * (target - start) + start);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(frame);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- Contact form ----------
     Delivery goes through Web3Forms: paste the access key you get at
     web3forms.com (free, no account, keyed to your inbox) into CONTACT_KEY
     below and enquiries arrive by email.

     Until a key is set, the form does NOT pretend to send. It hands the
     enquiry to the visitor's own mail client, pre-filled and addressed to
     us, so nothing is ever silently lost. Success is only ever reported
     when the server confirms it. */
  var CONTACT_KEY = "c9ddf608-41b8-42a6-97eb-1540494deb68";   // Web3Forms, public by design
  var CONTACT_EMAIL = "pranaam@vaayusights.in";

  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  var submitBtn = document.getElementById("formSubmit");

  if (form) {
    var OK = "#7bd88f", BAD = "#ff8a8a";
    function say(msg, colour) {
      if (!note) return;
      note.style.color = colour;
      note.textContent = msg;
    }
    function busy(on) {
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.style.opacity = on ? ".6" : "";
      submitBtn.style.pointerEvents = on ? "none" : "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      if (data.get("botcheck")) return;        // spam trap tripped

      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        say("Please enter your name and a valid email.", BAD);
        return;
      }

      var company = (data.get("company") || "").toString().trim();
      var interest = (data.get("interest") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      /* No key configured yet — hand off to the visitor's mail client. */
      if (!CONTACT_KEY) {
        var body = [
          "Name: " + name,
          "Email: " + email,
          company ? "Company: " + company : "",
          interest ? "Area of interest: " + interest : "",
          "",
          message || "(no project details given)"
        ].filter(Boolean).join("\n");
        var mailto = "mailto:" + CONTACT_EMAIL
          + "?subject=" + encodeURIComponent("Enquiry from " + name)
          + "&body=" + encodeURIComponent(body);
        // leave a real, pre-filled link on the page: if no mail client opens,
        // the visitor still has a working way to reach us
        if (note) {
          note.style.color = OK;
          note.textContent = "Opening your email app — if nothing happens, ";
          var a = document.createElement("a");
          a.href = mailto;
          a.id = "formMailto";
          a.textContent = "send it here instead";
          a.style.textDecoration = "underline";
          note.appendChild(a);
          note.appendChild(document.createTextNode("."));
        }
        window.location.href = mailto;
        return;
      }

      busy(true);
      say("Sending…", "");

      data.append("access_key", CONTACT_KEY);
      data.append("subject", "New enquiry from " + name + " — vaayusights.in");
      data.append("from_name", "VaayuSights website");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function (out) {
          if (out && out.success) {
            say("Thanks, " + name + " — we'll be in touch within one business day.", OK);
            form.reset();
          } else {
            throw new Error((out && out.message) || "send failed");
          }
        })
        .catch(function () {
          say("That didn't send. Please email us at " + CONTACT_EMAIL + " and we'll pick it up.", BAD);
        })
        .then(function () { busy(false); });
    });
  }

  /* ---------- Aerial particle field (canvas) ---------- */
  var canvas = document.getElementById("fieldCanvas");
  if (!canvas || reduceMotion) return;
  var ctx = canvas.getContext("2d");
  var W, H, DPR, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = Math.floor(window.innerWidth * DPR);
    H = canvas.height = Math.floor(window.innerHeight * DPR);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    var count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 16000), 110);
    particles = [];
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25 * DPR,
        vy: (Math.random() - 0.5) * 0.25 * DPR,
        r: (Math.random() * 1.6 + 0.5) * DPR
      });
    }
  }

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX * DPR; mouse.y = e.clientY * DPR;
  });
  window.addEventListener("mouseout", function () { mouse.x = mouse.y = -9999; });

  var LINK = 130;
  var rafId = null, running = false;
  function tick() {
    ctx.clearRect(0, 0, W, H);
    var linkDist = LINK * DPR;
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // gentle attraction to cursor
      var dxm = mouse.x - p.x, dym = mouse.y - p.y;
      var dm = Math.hypot(dxm, dym);
      if (dm < 160 * DPR && dm > 0.1) {
        p.x += (dxm / dm) * 0.4; p.y += (dym / dm) * 0.4;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,165,70,0.72)";
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx = p.x - q.x, dy = p.y - q.y;
        var d = Math.hypot(dx, dy);
        if (d < linkDist) {
          var a = (1 - d / linkDist) * 0.4;
          ctx.strokeStyle = "rgba(90,150,255," + a + ")";
          ctx.lineWidth = 0.6 * DPR;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(tick);
  }

  function start() { if (!running) { running = true; tick(); } }
  function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); }
  // pause the field when the tab isn't visible (saves CPU/battery)
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  resize();
  start();
})();
