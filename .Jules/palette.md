## 2026-10-21 - Accessible Form Labels and Icon Buttons
**Learning:** Relied on placeholder text for form fields and omitted aria-labels for icon-only mobile navigation buttons, leading to poor screen reader accessibility. It's a common pattern here to focus on visual placeholders over semantic `<label>` elements.
**Action:** Always include semantic, visible `<label>` elements for inputs (even if visually subtle) and ensure icon-only buttons (like hamburger menus) have explicit `aria-label` and relevant state attributes (`aria-expanded`).
