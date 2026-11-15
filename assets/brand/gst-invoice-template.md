# Tax invoice template — for use after GST registration

**Not usable yet.** Until a GSTIN exists, invoices go out as a Bill of Supply
using `invoice-template.md`. This file is what replaces it on the day
registration completes.

**Have a CA check the first one you issue.** The rules below are the
requirements as commonly applied, not professional advice, and the SAC code in
particular must be confirmed rather than assumed.

---

## What makes it a tax invoice

A compliant tax invoice must carry all of the following. Miss one and the
client's accounts team will send it back, which costs a fortnight of payment
terms.

- The words **"Tax Invoice"** as the heading
- Supplier name, address and **GSTIN**
- A **consecutive serial number**, unique within the financial year, maximum 16
  characters, letters, numerals and `/` or `-` only. No gaps, no reuse
- Date of issue
- Recipient name, address and GSTIN where registered
- **Place of supply** with state code — this decides CGST+SGST versus IGST
- Description of services
- **SAC code**
- Taxable value
- Tax rate and amount, split CGST / SGST / UTGST / IGST
- Total in figures, and the amount in words
- Whether tax is payable on **reverse charge**
- Signature or digital signature

## The two cases you will meet

**Client in Maharashtra** — intra-state. Charge **CGST 9% + SGST 9%**.

**Client in another state** — inter-state. Charge **IGST 18%**.

Place of supply for services to a registered person is the recipient's
location. Get this wrong and the tax is paid under the wrong head, which is
tedious to unwind.

## SAC code — confirm before first use

Aerial-data analysis does not map to one obvious code. Candidates sit in the
**9983** group, "Other professional, technical and business services". **Ask
your CA to confirm which applies**, and use the same one consistently. Do not
pick one from a blog, this file included.

---

## Template

```
                                  TAX INVOICE

VaayuSights                                    Invoice no.   VS/2026-27/001
Aerial-data analysis                           Date          __ /__ /____
[ address ]                                    Place of supply  [ State, code ]
Pune, Maharashtra [ PIN ]                      Reverse charge   No

GSTIN  [ ______________ ]
PAN    [ __________ ]
Email  pranaam@vaayusights.in
Web    vaayusights.in

--------------------------------------------------------------------------
BILL TO

[ Client legal name ]
[ Address ]
[ City, State, PIN ]

GSTIN  [ ______________ ]
--------------------------------------------------------------------------

Reference: SOW no. VS-SOW-____ dated __ /__ /____

 #  Description                              SAC     Qty    Rate      Amount
--------------------------------------------------------------------------
 1  [ e.g. Blade defect analysis and         [ ___ ]  40   4,500    1,80,000
     severity ranking, 40 turbines,
     per SOW VS-SOW-0007 ]

 2  [ Report production to client template ] [ ___ ]   1   4,000       4,000

--------------------------------------------------------------------------
                                          Taxable value       1,84,000
                                          CGST  @ 9%            16,560
                                          SGST  @ 9%            16,560
                                          ------------------------------
                                          TOTAL              ₹ 2,17,120

Amount in words: Rupees Two Lakh Seventeen Thousand One Hundred and Twenty only

--------------------------------------------------------------------------
PAYMENT

Account name   [ ______________ ]
Bank           [ ______________ ]
Account no.    [ ______________ ]
IFSC           [ ______________ ]
UPI            [ ______________ ]

Payable within 30 days of invoice date.

--------------------------------------------------------------------------

For VaayuSights


____________________
Authorised signatory

This is a computer-generated invoice.
```

**For an inter-state client**, replace the two 9% lines with a single
`IGST @ 18%` line.

---

## Export invoices

Services to a client outside India are **zero-rated**, but only if you handle
them correctly. Two routes:

**With an LUT (preferred)** — file a Letter of Undertaking on the GST portal,
then export without paying IGST. The invoice carries:

```
SUPPLY MEANT FOR EXPORT UNDER LETTER OF UNDERTAKING
WITHOUT PAYMENT OF INTEGRATED TAX
LUT ARN: [ ______________ ]
```

**Without an LUT** — charge IGST and claim a refund afterwards. More paperwork
and your money sits with the government meanwhile. File the LUT.

An export invoice also needs the **currency**, the **conversion rate** if
reporting in INR, and the recipient's country. Keep the FIRC or bank
realisation advice — proof the money came in as foreign exchange is what
supports the zero rating.

---

## Numbering

Start at `VS/2026-27/001` and increment. One unbroken series per financial
year, restarting in April.

**Never skip or reuse a number.** A gap in the series is the first thing an
audit asks about, and "I voided one" is a much weaker answer than a cancelled
invoice retained in the file.

---

## Before the first one goes out

- GSTIN on the invoice and on the GST portal match exactly
- SAC confirmed by the CA
- Place of supply correct, and the right tax head follows from it
- Bank details correct — check digit by digit, not by eye
- The SOW number referenced actually exists and is signed
- A CA has seen the first invoice before the client does
