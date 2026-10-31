## 2024-05-24 - Accessibility for Icon-only Buttons and Forms without visual labels
**Learning:** Icon-only buttons (like the hamburger menu) and inputs relying solely on placeholders were found to lack semantic accessibility context. Without visual labels, standard screen reader support suffers.
**Action:** Added `aria-label` to provide screen reader context and added `aria-haspopup`/`aria-expanded` properties for interactive dropdowns, achieving better accessibility without altering the visual design layout.
