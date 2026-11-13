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
| Search Console | being set up 13 Nov. Was previously recorded here as verified and indexed — it never was. See below |
| Google Business | verified. Category reads Engineering consultant, logo and cover up, services split. Confirmed 10 Nov |
| Google account | 5421vaayusights@gmail.com — a dedicated business account, not a personal one. Holds the Business Profile and Search Console. No 2FA yet |
| Domain | vaayusights.in at GoDaddy. Auto-renew OFF, expires 3 Nov 2028 |

DNS carries four GitHub A records, `www` → vaayusights.github.io, Zoho MX/SPF/
DKIM, and a DMARC record at `p=none`.

---

## Search indexing

As of 13 Nov the site is in **no** search index — not Brave, not Google. A
direct search for the domain returns nothing from it. The site itself is fine:
robots.txt allows everything, the sitemap is valid, every page has a canonical
URL, title, description and Open Graph tags, and the homepage carries
ProfessionalService structured data. Nothing is blocked.

The cause is age and links. The domain is three days old and almost nothing
points at it — LinkedIn marks its outbound links so crawlers ignore them. The
GitHub repo outranks the site because GitHub is crawled constantly and carries
authority the new domain has none of.

Being done 13 Nov: Search Console domain property, verified by a TXT record at
GoDaddy, then sitemap submission and indexing requests on the main pages. Bing
Webmaster Tools imports from Search Console in one click and feeds DuckDuckGo
and Yahoo too.

Brave has no submission form at all — an independent index with no webmaster
console. It will arrive on its own once links and traffic exist. Don't use
Brave as the measure of whether indexing worked; use `site:vaayusights.in` on
Google.

Open: the GitHub repo's **description field** still carries the old positioning
("technology-driven company delivering end-to-end drone and AI-powered
solutions"). The README was rewritten; that one-line field was not. It is
currently the only thing a searcher finds, and it describes the business
wrongly. The Netlify migration removes the result entirely by letting the repo
go private.

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
| **LinkedIn profile** | ✅ Checked logged out on 10 Nov and clean: nothing under Experience, Activity or Interests. Re-check after any month of activity — a like or comment made as the person rather than as the page carries their name permanently, and following the page from the personal account would list it under Interests |

**One leak the audit missed, found the same evening.** Every GitHub Actions run
on this repository records the owner's GitHub username, profile link and avatar,
and the Actions tab of a public repository is public. There were 24 such runs.
The audit checked commit authorship, which is clean, but not run attribution.

It is not fixed. The remedy is `MIGRATION.md` — moving hosting to Netlify so the
repository can go private, which also stops it outranking vaayusights.in in
search. Making the repository private hides the existing runs but does not erase
that they were once visible; only renaming the GitHub account would, and that is
a separate decision nobody has taken.

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
| **Business phone + WhatsApp** | Biggest gap. No number anywhere. Google flags it on the profile too. When it exists, add click-to-call and a WhatsApp button to the site |
| **Launch post** | Written, imagery ready, page ready. Not yet published |
| **DMARC** | At `p=none`. Tighten to `p=quarantine` once mail has been reliable for a few weeks |
| **Domain auto-renew** | Off. Turn on, or diarise Nov 2028 |
| **GitHub 2FA** | Not enabled on the owner account, which controls the website |
| **Real project imagery** | The single highest-value upgrade once jobs are delivered |
| **Company registration + GST** | Not done. Most corporate clients will ask |

---

## Content calendar

Launch post Tue 10 Nov, then Wednesdays. The brand film took the 18 Nov slot on
13 Nov, pushing the four written posts back a week each:

| Date | Post | Where |
|---|---|---|
| Tue 10 Nov | Launch — 100,000 panels | copy.md §1 · posted |
| Wed 18 Nov | Brand film, 50s square | copy.md §1c · `video/` |
| Wed 25 Nov | The question nobody asks | copy.md §1b · `social/posts/post2-overlap` |
| Wed 2 Dec | Thermal — what a hotspot tells you | copy.md §1b · `social/posts/post3-thermal` |
| Wed 9 Dec | For drone operators | copy.md §1b · `social/posts/post4-operators` |
| Wed 16 Dec | Aerial cleaning | copy.md §1b · `social/posts/post5-cleaning` |

The film goes up as a native upload, not a link — LinkedIn buries posts that
send people off-platform, and a native video autoplays in the feed. The same
film is on `/about` under the page hero.

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
