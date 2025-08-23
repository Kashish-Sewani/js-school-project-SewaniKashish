# Accessibility Improvements

## Modal
- Added `role="dialog"` and `aria-modal="true"`.
- Implemented focus trap to keep keyboard navigation inside modal.
- Pressing `Esc` closes the modal.
- On close, focus returns to the triggering event marker.

## Timeline
- Added `role="list"` to timeline and `role="listitem"` to markers.
- Markers are fully keyboard accessible using `Enter` or `Space`.
- The currently active marker uses `aria-current="true"` for screen reader context.

## Event Marker
- Ensured marker is focusable with `tabIndex="0"`.
- Removed unwanted default focus outline and replaced with custom visible focus style.
- When modal closes, focus is restored to the corresponding marker.

## Header
- Added `aria-label` to theme toggle button for clarity.
- Marked decorative icons with `aria-hidden="true"` to prevent screen reader noise.

## WCAG Compliance
- Added a dark background color to meet WCAG contrast requirements.
- Verified text and background colors meet **WCAG AA** minimum contrast ratio (4.5:1).
- Confirmed keyboard navigation is supported for all interactive elements.
- Checked focus states are visually distinct for all buttons and links.

✅ After implementing these improvements, the project now achieves **100% accessibility score** in automated testing.
