## 2026-11-07 - Accessible Hamburger Menu

**Learning:** Angular's `[attr.aria-expanded]` syntax is necessary because `aria-expanded` is an attribute binding, not a property binding on native DOM elements. Standard interpolation (`aria-expanded="{{isOpen}}"`) can sometimes cause issues or warnings in strict mode, so `[attr.aria-expanded]` is the safest and most idiomatic way to bind ARIA state in Angular templates.

**Action:** Always use `[attr.aria-*]="booleanValue"` when binding ARIA state dynamically in Angular to ensure correct screen reader announcements and avoid template compilation errors.
