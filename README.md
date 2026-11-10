# VaayuSights — aerial-data analysis

**VaayuSights is an aerial-data analysis practice serving clients across India.**
Send us drone imagery — flown by your own team, your operator, or a capture we
arrange — and we return defects ranked by severity, photorealistic digital twins,
volumetrics and decision-ready reports. Every finding is reviewed by an engineer
before it reaches you. We also clean solar arrays, glazing, roofs and industrial
structures by drone, with our own crews.

**You don't need us to fly.** If you already have a drone team, or surveys sitting
on a drive, that's the whole starting point.

### → [vaayusights.in](https://vaayusights.in) · [pranaam@vaayusights.in](mailto:pranaam@vaayusights.in)

*वायु — air. See · Sense · Analyze · Prevent.*

---

This repository holds the source of the website published at
**https://vaayusights.in**, plus the brand pack. It is public because GitHub Pages
serves the site from it. It is not the product, and nothing here is a client
deliverable.

## What is in it

| Path | Contents |
| --- | --- |
| `index.html` and the five other pages | The site. Home, Services, Sectors, Capabilities, About, Contact |
| `styles.css`, `script.js` | Shared theme and behaviour |
| `assets/` | Site photography, fonts, icons |
| `assets/brand/` | Brand pack — logo files, copy, templates, print artwork |
| `STATUS.md` | Operating notes. Read this first |

## How it is built

Vanilla HTML, CSS and JavaScript. No build step, no framework. Served by GitHub
Pages from `main`, with a `CNAME` pointing at the apex domain.

To work on it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- Responsive down to phone width, with an accessible mobile nav.
- Respects `prefers-reduced-motion` — the canvas field, scroll animations and the
  intro splash are all disabled when a visitor asks for reduced motion.
- The site makes no claims about past client work. Capture is described as
  partner-run throughout, because it is. See `STATUS.md` for the rules that keep
  the copy honest.
