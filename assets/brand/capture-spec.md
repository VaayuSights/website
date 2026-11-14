# Capture specification

**Appendix A to the VaayuSights proposal.** Send it before a job, not after.

This is the document the proposal template refers to when it says *"pricing
assumes imagery meets the capture spec in Appendix A"*. Without it that clause
protects nothing. With it, "this data cannot support what you asked for" is a
reference rather than an argument.

Send it to the client, or to whoever is flying for them, at the point the scope
is agreed — before anybody takes off. A re-fly arranged in advance costs a
morning. A re-fly discovered after invoicing costs the relationship.

---

## Before anything else: what is the deliverable?

Inspection imagery and mapping imagery are **not interchangeable**, and this is
the single most common and most expensive misunderstanding in aerial work.

| You want | You need | You cannot use |
|---|---|---|
| Defect detection, severity ranking | Close-range inspection frames | A mapping survey — too far away to resolve a crack |
| Orthomosaic, 3D model, volumetrics | Overlapping mapping survey | Inspection close-ups — they will not reconstruct |
| Both | Two flights, or one flight planned for both from the start | One flight planned for one of them |

A set of beautiful close-ups will find defects and will **never** reconstruct
into a model, no matter how many there are. If the brief is a digital twin and
the data is inspection photography, that is a re-fly, and we will say so on day
one rather than after the invoice.

---

## 1. General — all jobs

| | |
|---|---|
| **Format** | RAW or maximum-quality JPEG. No in-camera HDR, no stitching, no beautification, no filters |
| **EXIF** | Must be intact: GPS position, altitude, timestamp, camera model, focal length, exposure. **Stripped EXIF makes most deliverables impossible.** Do not process, rename in bulk or re-export through editing software |
| **Naming** | Keep the camera's original filenames |
| **Structure** | One folder per asset or per flight. Do not merge flights into a single folder |
| **Delivery** | Original folder structure, uncompressed or in a lossless archive. Not through WhatsApp, not through any service that re-compresses images |
| **Flight logs** | Include them where the platform produces them |
| **Calibration** | Camera calibration or lens profile if available |

### Conditions

- No rain, fog, or visible haze
- Wind within the platform's rated limit — motion blur cannot be recovered
- Consistent light within a single flight. A flight that starts in sun and ends under cloud will band

---

## 2. Mapping, orthomosaics, 3D models, volumetrics

| | |
|---|---|
| **Frontal overlap** | 80% minimum. 85% for vegetation or uniform surfaces |
| **Side overlap** | 70% minimum. 80% for vegetation or uniform surfaces |
| **GSD** | 2 cm/px or better for engineering deliverables; 5 cm/px acceptable for general site mapping |
| **Pattern** | Double grid for 3D. Single grid is enough for a flat orthomosaic only |
| **Camera angle** | Nadir for the orthomosaic. Add an oblique pass at 45° for 3D on anything vertical |
| **Altitude** | Constant within a flight |
| **Ground control** | GCPs or RTK/PPK required for any survey-grade or volumetric output. Without them, absolute accuracy cannot be claimed — only relative |
| **Coverage** | Fly beyond the area of interest by at least one full image footprint on every side. Edges always reconstruct worst |

**On accuracy:** if the deliverable will be used for measurement, earthwork or
design, GCPs or RTK are not optional. We can produce a model from imagery
without them; we cannot certify what it measures.

---

## 3. Visual inspection — structures, towers, facades, bridges

| | |
|---|---|
| **GSD** | 1 mm/px or better for crack detection. 3 mm/px for general condition survey |
| **Distance** | As close as the platform may safely hold. Resolution beats coverage here |
| **Overlap** | 60% between adjacent frames so defects are not lost between shots |
| **Angle** | Perpendicular to the surface. Oblique frames distort both size and severity |
| **Coverage** | Every face, every elevation. A defect on the face nobody flew cannot be found |
| **Focus** | Confirm sharpness in the field. A blurred frame is not recoverable and we will flag it rather than guess |

---

## 4. Wind turbine blades

| | |
|---|---|
| **Coverage** | All four surfaces per blade — leading edge, trailing edge, pressure side, suction side. Twelve blade sides per turbine |
| **GSD** | 1 mm/px or better. Finer for leading-edge erosion |
| **Overlap** | 60% along the blade |
| **Position** | Blade stopped and locked. Rotating-blade capture is a different method with different requirements — tell us in advance if that is what you are using |
| **Structure** | One folder per turbine, subfoldered per blade. **Blade identity must be unambiguous** — we cannot report a defect on blade 2 if we cannot tell blade 2 from blade 3 |
| **Reference** | Record turbine ID, blade serials where available, and tip-to-root orientation |

---

## 5. Thermal — solar and electrical

| | |
|---|---|
| **Sensor** | Radiometric. **Non-radiometric thermal is a picture of temperature, not a measurement of it** — it cannot be classified to IEC 62446-3 |
| **Format** | R-JPEG or equivalent with the radiometric data intact. Not a screenshot, not a colourised export |
| **Irradiance** | 600 W/m² minimum. 700+ preferred |
| **Time of day** | Within three hours of solar noon |
| **Wind** | Below 4 m/s. Wind cools hotspots and hides them |
| **Sky** | Clear. Intermittent cloud makes a survey unclassifiable |
| **Angle** | Within 30° of perpendicular to module plane |
| **GSD** | 5 cm/px or better for module-level faults; 3 cm/px for cell-level |
| **Pairing** | An RGB pass alongside the thermal. Thermal alone cannot distinguish soiling from a real fault |
| **Soak** | Modules at operating temperature — at least 15 minutes of steady irradiance before the flight starts |

**The constraint that catches people:** a thermal survey flown in the wrong
conditions is not partially useful. It is unclassifiable. If conditions break
mid-flight, stop and refly rather than finish the grid.

---

## If the data does not meet this

We will tell you within one working day of receiving it. The options are
always the same three:

1. **Re-fly** — we will specify exactly what to change
2. **Reduced deliverable** — what the data genuinely supports, quoted down accordingly
3. **Stop** — no charge for what we have looked at

What we will not do is produce a deliverable the data cannot support and
present it as sound. A defect map built from imagery too coarse to resolve
defects is worse than no defect map, because somebody will act on it.

---

## Not sure before you fly?

Send twenty or thirty frames from a test flight and we will tell you whether
the full survey will work, at no cost, before you commit a day to it. That is
a cheaper conversation than either of us wants to have afterwards.

**VaayuSights** · Aerial-data analysis · Pune, India
+91 88845 54215 · pranaam@vaayusights.in · vaayusights.in
