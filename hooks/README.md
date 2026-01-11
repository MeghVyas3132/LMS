
Hooks — curated notes (hooks I authored)

Purpose
- Lightweight, reusable hooks for domain logic and UI behavior.

Hooks I worked on
- `use-attendance.ts` — polling/subscription logic for attendance updates and deduplication helpers used by the QR flow.
- `use-mobile.tsx` — mobile detection and layout hints used across layouts.
- `use-toast.ts` — central toast wrapper for consistent notifications.

Tip
- Keep hooks small and composable; prefer pure functions and separate side-effects into small service functions in `lib/`.

