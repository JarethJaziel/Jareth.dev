## 2026-10-18 - Missing Screen Reader Labels on Forms with Placeholders
**Learning:** Forms designed with placeholder text instead of visible labels exclude screen reader users entirely if underlying semantic `<label>` elements are not present. Even when placeholders visually replace labels, screen readers still expect properly associated labels (`for`/`id` mapping).
**Action:** Always inject `sr-only` class `<label>` elements mapped to input `id`s when visual labels are omitted in favor of placeholders to maintain accessibility without altering visual design.
