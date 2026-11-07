# VaayuSights — operating notes

Read this first. It is the state of the business as set up, the decisions
behind it, and the rules that keep it consistent. Everything else lives in
`assets/brand/`.

Last updated: 7 November 2026.

---

## What the company is

An **aerial-data analysis practice**. Drone imagery comes in from any source —
the client's own team, their operator, or a capture we arrange — and ranked
findings go out: defects by severity, digital twins, volumetrics, reports.

Three things must stay straight in anything written, because they are what make
the claims survive a follow-up question:

| | |
|---|---|
| **Analysis** | entirely in-house |
| **Capture** | run by vetted partner operators we scope and brief. We do not own a fleet and must never imply one |
| **Aerial Cleaning** | ours outright, crews included |

Positioning leads with analysis. Flying is described as how capture happens, not
as the product.

---

## Live properties

| | |
|---|---|
| Website | https://vaayusights.in — GitHub Pages, from `VaayuSights/website`, branch `main` |
| Email | pranaam@vaayusights.in — Zoho, India data centre (mail.zoho.in) |
| Mailbox | shri@vaayusights.in, with aliases pranaam@, pranam@, hello@, info@ |
| Contact form | Web3Forms, key in `script.js`, delivers to pranaam@ |
| LinkedIn | linkedin.com/company/vaayusights |
| Search Console | verified, sitemap submitted, site indexed |
| Google Business | verified; category under appeal (see below) |
| Domain | vaayusights.in at GoDaddy. Auto-renew OFF, expires 3 Nov 2028 |

DNS carries four GitHub A records, `www` → vaayusights.github.io, Zoho MX/SPF/
DKIM, and a DMARC record at `p=none`.

---

## Standing rules

**Honesty.** No invented client results, metrics or case studies. The
capabilities page is framed as what we are set up to do, not what we have done.
Swap in real engagements as they happen. "Prevent" replaced "Predict" because
predictive maintenance means forecasting we cannot do.

**Anonymity.** The owner's name appears nowhere public, by choice. The GitHub
org membership is private, WHOIS is redacted, commits are authored as
VaayuSights, and the LinkedIn page has no public admins. Two habits keep it
that way: always act **as the page** on LinkedIn, and never add VaayuSights to
a personal profile.

**Naming.** Aerial Cleaning, never Panel Cleaning. "Drone cleaning" belongs in
body copy where people search for it, not in the service name, where it reads
as cleaning the drones. Specific terms like Solar Panel Cleaning stay in the
Google Business services list, where search is literal.

**Licensing.** Site photography is Pexels-licensed stock plus client-supplied
thermal and cleaning images. Replace with real project output as it exists —
that will convert better than anything stock.

---

## Open items

| | |
|---|---|
| **Business phone + WhatsApp** | Biggest gap. No number anywhere. When it exists, add click-to-call and a WhatsApp button to the site |
| **Google Business category** | Appeal submitted 7 Nov against a "business identity changed" rejection. Current live category is wrong (IT support and services) |
| **"Digital Twins Photogrammetry"** | One Google service entry that should be two |
| **DMARC** | At `p=none`. Tighten to `p=quarantine` once mail has been reliable for a few weeks |
| **Domain auto-renew** | Off. Turn on, or diarise Nov 2028 |
| **GitHub 2FA** | Not enabled on the owner account, which controls the website |
| **Real project imagery** | The single highest-value upgrade once jobs are delivered |
| **Company registration + GST** | Not done. Most corporate clients will ask |

---

## Content calendar

Launch post Tue 10 Nov, then Wednesdays: 18 Nov, 25 Nov, 2 Dec, 9 Dec. All five
written with imagery, in `assets/brand/copy.md` sections 1 and 1b, images under
`assets/brand/social/`.

Post as the page. No links in the post body — LinkedIn throttles those; put the
website in the first comment instead. Reply to comments within the first couple
of hours.

---

## Where things live

```
assets/brand/
  README.md      brand rules, palette, type, logo usage, print ceiling
  copy.md        LinkedIn, Google Business, WhatsApp, bios, launch + 4 posts
  email-signature.html
  logo/          lockups and emblems, colour and one-colour
  social/        profile, covers, post imagery
  print/         business cards, 300dpi with bleed
  vaayusights-one-pager.pdf
```

The colour logo fails on white — its wordmark is near-silver. Light backgrounds
and one-colour printing use `logo/vaayusights-full-black.png`.
