
Lib — curated notes (files I worked on)

Purpose
- Application services, integration clients, and domain logic.

Files I worked on (high-impact)
- `firebase.ts` & `firebase-admin-client.ts` — firebase client initialization and admin helpers used by server APIs.
- `judge0.ts` & `judge0-wrapper.ts` — Judge0 request handling, result parsing, and secure submission helper.
- `attendance-service.ts`, `attendance-export.ts`, `attendance-excel-export.ts` — QR attendance handling, export helpers and Excel/XLSX pipelines.
- `quiz-service.ts` & `student-service.ts` — assessment orchestration and student-related helpers.

Best practices
- Keep secrets and admin logic on server-side API routes only. Test Judge0 integration with mocked responses before hitting live API keys.

