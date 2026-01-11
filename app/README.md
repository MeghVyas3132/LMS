
App directory — curated notes (routes & pages I touched)

Purpose
- Next.js App Router source: route groups, layouts, and page-level components.

Routes & pages I worked on
- `admin/dashboard` — analytics panels, attendance summary widgets.
- `student/*` — student-facing pages, progress boards, QR attendance UI.
- `about/` and `contact/` — homepage-linked marketing pages and contact CTA.

Server routes
- `api/` route handlers used for secure operations (Judge0 proxies, export endpoints). See `api/README.md` for more.

Notes
- Prefer server components for data-heavy dashboards and client components for interactive parts (Monaco editor, QR scanner).

