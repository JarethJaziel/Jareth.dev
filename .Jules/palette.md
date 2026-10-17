## 2026-10-17 - Mobile Menu A11y
**Learning:** Icon-only menu toggle buttons in this Tailwind/Angular app lacked both screen reader context and keyboard focus visibility.
**Action:** Always add `aria-label`, `[attr.aria-expanded]`, and Tailwind `focus-visible:ring-2` to interactive icon-only elements.
