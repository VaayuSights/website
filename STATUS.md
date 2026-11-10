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
| Google Business | verified; edit appeal approved 9 Nov (routing ID DPNB) |
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

The LinkedIn page is administered from the owner's own personal account. That
is deliberate and it is the compliant arrangement: LinkedIn page admins are
not shown publicly, so the owner stays anonymous without any second account.

**Do not create a separate LinkedIn account for the company.** This was tried
on 10 Nov and reversed the same morning. Every possible name for such an
account breaks a LinkedIn rule — the company's name is a company name on a
personal profile, an invented person is a false identity, and the owner's own
name is a second account for one person. A profile named "Vaayu Sights,
Owner at VaayuSights" also surfaced on the page's People tab, where a
photo-less account named after the company reads as a fake page to anyone who
looks. Worse, had the page been transferred to it and that account later
restricted, the page would have gone with it. The account was closed.

Two things the anonymity genuinely does cost, and no account structure avoids
them: page invitations are sent from the admin's personal profile and carry
their name, and a reshare from a personal profile does the same. Those are the
two biggest growth levers for a new page, so they stay unused unless the owner
decides the association is acceptable.

**Audited 10 Nov 2026 and clean.** Every published page, stylesheet, script,
sitemap and template: no name, and `pranaam@vaayusights.in` is the only address
that appears. All 19 commits are authored and committed as VaayuSights, and
GitHub links none of them to an account, so no username or avatar shows beside
them. Every PNG and JPG was checked for EXIF author, GPS and camera-owner
fields and carries none, the client photos included. The three PDFs carry only
Chromium and Skia as creator. The structured data is ProfessionalService with
no Person entity.

Four things cannot be checked from the repo and are the only places left where
a name could escape:

| | |
|---|---|
| **Zoho sending name** | If the mailbox display name is the owner's real name, every email to a prospect shows it. The most likely leak now |
| **Send-from address** | The mailbox is shri@; the alias is pranaam@. Replying from shri@ exposes a partial first name. Keep pranaam@ as the default |
| **GitHub org members** | Check github.com/orgs/VaayuSights/people logged out; it should list nobody |
| **LinkedIn behaviour** | A comment made as the person rather than as the page carries their name permanently |

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
| **Google Business category** | Appeal approved 9 Nov. Allow 24h, then confirm the primary category reads `Engineering consultant`, not `IT support and services` |
| **"Digital Twins Photogrammetry"** | One Google service entry that should be two |
| **Google Business photos** | Logo and cover not uploaded. `social/profile-square-1080.png` and `social/gbp-cover-1200x675.png` |
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
