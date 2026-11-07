# VaayuSights — The Intelligent Eye From Above

A futuristic, **multi-page** marketing website for **VaayuSights**, a technology-driven
company delivering end-to-end **drone and AI-powered solutions** for the renewable
energy, infrastructure, industrial and commercial sectors.

> *वायु · Air Intelligence* — see more from above, decide smarter on the ground.

## 🗺️ Pages

| Page | File | Contents |
| --- | --- | --- |
| Home | `index.html` | Animated hero, real logo, capability ticker, highlights, CTA (with intro splash) |
| Services | `services.html` | The six core services + the full capability stack |
| Sectors | `sectors.html` | Renewable energy, infrastructure, industrial, commercial |
| Projects | `projects.html` | Case studies — featured project + grid (placeholder imagery) |
| About | `about.html` | Capture → Process → Analyze → Report pipeline + why VaayuSights |
| Contact | `contact.html` | Contact details + enquiry form |

Every page shares the same nav (with an active-page highlight) and footer.

## ✨ Highlights

- **Real brand logo** — the drone emblem in the nav/footer, the full lockup floating
  in the hero, and an animated **intro splash** on the Home page.
- **Animated aerial backdrop** — an interactive particle/constellation field on `<canvas>`.
- **Animated stat counters**, scroll-reveal, glassmorphism cards, and a responsive
  mobile menu.

## 🧱 Tech

100% vanilla **HTML + CSS + JavaScript** — no build step, no frameworks, no external
requests. Runs anywhere and is ready for GitHub Pages.

| File | Purpose |
| --- | --- |
| `index.html`, `services.html`, `sectors.html`, `about.html`, `contact.html` | The five pages |
| `styles.css` | Shared theme, layout, animations, responsive rules |
| `script.js` | Canvas field, scroll reveal, counters, nav, splash, form |
| `assets/` | Brand assets (`vaayusights-logo.png` full lockup, `vaayusights-emblem.png` mark, `vaayusights-icon.png` square icon) |

## 🚀 Run it

Open `index.html` in any modern browser, or serve the folder so page links resolve:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ♿ Notes

- Fully responsive with an accessible mobile nav.
- Respects `prefers-reduced-motion` — the particle field, animations and the intro
  splash are disabled for users who request reduced motion.
- Contact details in `contact.html` (email/phone/location) are placeholders — update
  them with your real information.
