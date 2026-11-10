# Moving the site off GitHub Pages

**Why:** GitHub Pages only serves from a public repository on the free plan, and
a public repository publishes two things we would rather it did not. Every
Actions run shows the owner's GitHub username, profile link and avatar on a
publicly readable tab. And the repository outranks vaayusights.in in search for
the company's own name.

Hosting elsewhere lets the repository go private, which ends both at once.

**Host: Netlify. Not Cloudflare Pages.** This is the whole reason the choice
matters. Cloudflare Pages cannot attach an apex domain unless the domain's
nameservers move to Cloudflare, because a CNAME is not allowed at a zone apex.
Moving nameservers means recreating the Zoho MX, SPF, DKIM and DMARC records at
a new provider, which puts live email in the blast radius of a hosting change.
Netlify works with external DNS: GoDaddy keeps the zone, one A record changes,
and the mail records are never touched.

Budget an hour. Do it on a weekday morning, not last thing at night — if
something goes wrong you want support desks awake.

---

## Before you start: write down what exists

Open the GoDaddy DNS page and screenshot the whole record list. Then note:

| Record | Current value |
|---|---|
| `A` @ (four of them) | GitHub Pages IPs |
| `CNAME` www | `vaayusights.github.io` |
| `MX` | Zoho — **do not touch** |
| `TXT` SPF, DKIM, DMARC | Zoho — **do not touch** |

Only the `A` records and the `www` `CNAME` change. **Everything with MX or TXT
is email. Leave all of it exactly as it is.** If you are ever unsure mid-way,
stop and compare against the screenshot.

---

## 1. Build it on Netlify first, before touching DNS

1. Sign up at **netlify.com** with GitHub. Use `pranaam@vaayusights.in`.
2. **Add new site → Import an existing project → GitHub.**
3. Authorise Netlify. When GitHub asks which repositories, grant access to
   **VaayuSights/website** only, not all repositories.
4. Pick the repo. Build settings: **leave the build command empty** and set the
   publish directory to **`.`** — this is a plain static site with no build step.
5. Deploy.

Netlify gives the site a temporary address like `random-name-123.netlify.app`.

**Open it and check the site works** — every page, the images, the contact form.
Nothing has changed for visitors yet; the live site is still on GitHub Pages.
Do not continue until this looks right.

## 2. Tell Netlify the domain

In the Netlify site: **Site configuration → Domain management → Add a domain**.
Enter `vaayusights.in`.

Netlify will say DNS is not pointing at it yet. Expected. It will show you the
exact records to create — **use the values Netlify shows you, not any IP written
down here**, because those addresses change over time.

## 3. Change the two records at GoDaddy

In GoDaddy DNS for vaayusights.in:

1. **Delete the four `A` records** pointing at the GitHub Pages IPs.
2. **Add one `A` record**: host `@`, value as given by Netlify.
   If GoDaddy offers `ALIAS` or `ANAME`, prefer that over `A` — it is more
   resilient. GoDaddy generally does not, so `A` is normal here.
3. **Edit the `www` `CNAME`**: change the value from `vaayusights.github.io` to
   the `*.netlify.app` address Netlify gives you.

Save. Touch nothing else.

## 4. Wait, then verify

DNS can take up to 48 hours, though it is usually minutes. Netlify's domain
panel shows when it sees the change, then provisions a Let's Encrypt
certificate automatically.

Check, in this order:

- `https://vaayusights.in` loads
- `https://www.vaayusights.in` loads or redirects
- The padlock is present and the certificate is valid
- **Send yourself an email from `pranaam@vaayusights.in` and receive one.**
  Mail should be entirely unaffected — this confirms it.

## 5. Only now, close down the old setup

Once the site has been served by Netlify for a day without problems:

1. **GitHub → repo → Settings → Pages → set Source to None.** This also stops
   the Actions runs that leak the username.
2. **Settings → General → Change visibility → Make private.**
3. Delete the `CNAME` file from the repo. It is a GitHub Pages artefact and
   Netlify ignores it, but leaving it is confusing.

Netlify keeps deploying from a private repository on the free plan. That is the
whole point of the move.

## If something goes wrong

**Put the four GitHub A records back and point the `www` CNAME at
`vaayusights.github.io`.** As long as the repository is still public and Pages
is still enabled, the old site returns as soon as DNS propagates. This is why
step 5 comes last and a day later.

---

## What this does and does not fix

**Fixes:** the public Actions tab and the username on it, and the repository
outranking the website in search for the company name.

**Does not fix:** the 23 Actions runs already recorded. Those disappear when the
repository becomes private, but anyone who looked before then has already seen
them. If that matters, the only complete remedy is renaming the GitHub account,
which is a separate decision.

**Does not change:** email, DNS nameservers, the domain registrar, the LinkedIn
page, or anything about how the site is built.
