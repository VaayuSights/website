# Pilot runbook — from "yes, send us a sample" to delivered

`enquiry-playbook.md` §4 says what the sample deliverable contains. This is how
the forty-eight hours actually run, and what has to exist before they start.

The pilot is the only evidence a cold prospect will ever have. Delivered well it
is worth more than any amount of correspondence. Improvised under time pressure
it is worse than not offering one.

---

## Before anything: how do they send you the data?

A client cannot email a thousand images, and this is the first wall a pilot hits.
Decide it before the question is asked, not while they are waiting.

**In order of preference:**

1. **Their own route.** Most corporates have a transfer system already — ask
   first. "However you normally share survey data is fine with us" removes a
   decision from their side and costs you nothing.
2. **A Google Drive folder you create per job.** Free, 15GB on the VaayuSights
   account, and a link that can be revoked when the job ends. Name it for the
   job, not the client: `VS-2026-007-intake` rather than anything identifying.
3. **WeTransfer** for a genuinely one-off batch under 2GB. No account needed at
   their end, which makes it the lowest-friction option for a small sample.

**Whatever the route, say in the same breath that source data is deleted on
completion.** It is in the NDA and the services agreement, and saying it
unprompted is the difference between a vendor and a risk.

**Never accept data on a personal account.** Everything goes through the
VaayuSights Google account, not a personal Drive.

---

## Hour 0 — acknowledge, immediately

Within the hour, even if you cannot start for two days. Silence after a client
has gone to the trouble of sending data is the worst impression available.

> Received, thank you — [ N ] files, [ size ]. I will come back within one
> working day confirming the data supports what you are after, and the
> completed analysis follows within two working days of that.

Two things are doing work there: a file count proves you actually looked, and
the clock is stated so it cannot drift.

---

## Hour 0–4 — check the data before you process a single frame

This is the step that is tempting to skip and the one that saves the job.

| Check | Why |
|---|---|
| File count and total size match what was described | A truncated upload looks like a bad analysis |
| EXIF intact — GPS, altitude, timestamp, camera | Stripped EXIF makes most deliverables impossible |
| Resolution and GSD support the deliverable asked for | Inspection close-ups will not reconstruct; mapping frames will not resolve a crack |
| Overlap, if a model is wanted | Below spec means no reconstruction, and you need to say so now |
| Thermal: radiometric, not colourised | A colourised export cannot be classified |
| Corrupt or unreadable files | Count them; report the number rather than silently dropping them |

**If it does not meet the capture spec, say so within one working day.** That
promise is in the outreach email, the capability summary and the services
agreement. Keeping it is a large part of what you are selling.

Three options to offer, in this order: re-fly with a specification, reduced
deliverable quoted down, or stop with no charge. Never the fourth option of
producing something that looks complete and is not.

---

## Hour 4–30 — process

Automated first pass through the pipeline. Then, and this is the part that is
not optional, **review every finding before it leaves.**

Keep a note as you go of anything you would want to say in the report: a defect
class that recurs, a capture limitation that affected confidence, a pattern
worth the client's attention. Written during, these are observations. Written
afterwards from memory, they are vague.

**Bound the scope.** One sample, the agreed subset, nothing extra. Free analysis
expands to fill whatever space it is given, and generosity on a pilot that never
converts is the most expensive thing a new practice can do.

---

## Hour 30–40 — the report

Use `sample-report-template.html`. Two or three pages, no more:

1. **What was received** — count, type, capture date, what was assessed
2. **What was found** — the findings, severity-ranked, with two or three
   annotated frames. Real ones, from their data
3. **What the capture limited** — stated plainly even when nothing was wrong,
   because a report that never mentions limits reads as one that did not look
4. **What a full engagement would add** — the honest gap between a sample and
   the real thing
5. **Scope and basis** — what was and was not assessed

**Nothing invented, ever.** If three defects were found, the report says three.
A padded sample is found out on the first paid job, and there is no recovering
from it.

---

## Hour 40–48 — deliver

Send the report as a PDF, with the annotated frames alongside in their original
resolution. Do not make the client ask for the full-size images.

> Attached is the completed analysis of the [ N ] files you sent.
>
> [ One line on what was found. ]
>
> [ One line on anything the capture limited, if applicable. ]
>
> There is no charge and no obligation for this. If it is useful, I would be
> glad to talk about what a full engagement would cover; if it is not, a line
> saying so is genuinely helpful.

Then **delete the source data** and say that you have.

---

## After — the two things people forget

**Ask about the case study.** `enquiry-playbook.md` §6. Ask at the point of
delivery, while goodwill is highest, not weeks later. Anonymised, no client
named, no identifying imagery. This is how the empty "Relevant project
experience" line eventually gets filled.

**Quote only now.** Playbook §5. You have seen the data, so the number means
something. Use the rate card, and do not discount a first job to win it — a
price set low on job one is the price for every job after.

---

## What must exist before a pilot can be accepted

| | Status |
|---|---|
| Capture spec to send before work begins | ✅ `capture-spec.md` |
| Sample report template | ✅ `sample-report-template.html` |
| Data intake route decided | ✅ above |
| Rate card for the quote that follows | ✅ held privately |
| **NDA, reviewed** | ⚠️ **drafted, not reviewed** |
| **Services agreement, reviewed** | ⚠️ **drafted, not reviewed** |

The two amber rows are one CA appointment. Three outreach emails already promise
"we work under NDA" — that promise needs a document behind it before anyone
takes it up.
