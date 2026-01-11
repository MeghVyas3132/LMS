Components — reusable UI pieces

Purpose

Key files

How to use

Components — curated notes (files I worked on)

Purpose
- Reusable UI pieces and layout components used across the app.

Files I worked on (high-impact)
- `main-layout.tsx` — global layout, header/navigation, theme provider wiring (responsiveness and dark-mode handling).
- `admin-layout.tsx` — admin-only layout with sidebar, topbar, and analytics placeholders.
- `student-layout.tsx` — student-specific layout optimized for mobile and quick access to enrolled courses.
- `monaco-editor.tsx` & `CodeEditor.tsx` — Monaco wrapper and integrations (language selection, run button, submission flow).
- `student-qr-code.tsx` — small component used in the QR attendance flow.

Notes & tips
- Keep UI primitives inside `components/ui/` and prefer composition (small building blocks) when creating new pages.
- For performance, lazy-load heavy components (Monaco) and keep static assets in `public/`.
