# 🎓 Cloud Institution LMS Portal
[![Live Site](https://img.shields.io/badge/live-cloudinstitution.in-007ACC)](https://www.cloudinstitution.in/) [![Tech: Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/) [![License](https://img.shields.io/badge/license-Check%20with%20Cloud%20Institution-lightgrey)](#)

🚀 Live product: https://www.cloudinstitution.in/

A comprehensive Learning Management System (LMS) built with Next.js and TypeScript. I built this LMS portal for Cloud Institution during a 3‑month internship — the product is production-ready and used by teachers and students for course delivery, attendance, assessments (including auto-graded programming challenges), reporting, and exports.

<img width="1365" height="628" alt="image" src="https://github.com/user-attachments/assets/f620ba46-c812-4cfc-bd52-a466aceaa0f1" />

## 🚀 Features

| 📚 Course Management | 👥 User Management | 🧩 Assessment System |
| --- | --- | --- |
| ✅ Course creation & management (CRUD)<br>📝 Rich content editor for course materials<br>🎥 Embedded video lessons<br>📈 Progress tracking and monitoring | 🔐 Multi-role system (Admin, Teacher, Student)<br>🔑 Authentication (Firebase Auth)<br>👤 Profile & settings management | 🧪 Dynamic quiz builder<br>💻 Programming challenges & code execution<br>🤖 Auto-grading pipelines<br>📊 Results analytics and reports |

| 💻 Programming Environment | 📡 Attendance & Analytics | 🎨 Modern UI / UX |
| --- | --- | --- |
| 🧰 Monaco-based code editor<br>🌐 Multi-language support (Python, JavaScript, Java, C++)<br>🔒 Judge0 integration for secure execution<br>⚡ Real-time compilation and feedback | 📱 QR code attendance (mobile-first)<br>📊 Analytics dashboard and live tracking<br>📥 Export to Excel / CSV (XLSX pipelines) | 🌙 Dark mode support<br>📱 Mobile-first responsive design<br>🎞️ Infinite carousels & smooth transitions<br>🧩 Interactive, component-driven UI |

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-teal?logo=tailwindcss&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-Auth%2FFirestore-yellow?logo=firebase&logoColor=black)

![Monaco](https://img.shields.io/badge/Monaco-Editor-444?logo=visual-studio-code&logoColor=white) ![Judge0](https://img.shields.io/badge/Judge0-API-orange) ![XLSX](https://img.shields.io/badge/XLSX-exports-lightgrey) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple)

Deployment: ![Vercel](https://img.shields.io/badge/Vercel-deploy-black)

## 🏗️ Project Structure

```
lmsportal/
├── app/                    # Next.js App Router
```


Hero highlights
- ✅ Production-ready: active users (teachers & students)
- 🧪 In-browser programming assessments with multi-language support and Judge0 auto-grading (wait-for-result and base64 handling)
- 📱 Mobile-first QR attendance scanning with real-time Firebase listeners and Excel/XLSX export pipelines

My role & contributions — 🧑‍💼 Lead Application Developer
- Lead Application Developer during a 3‑month internship: responsible for designing robust front-end & back-end solutions, UI/UX, and ensuring a user-friendly product that manages both online and offline students in a single platform.
- I owned product-level tasks: created issues, proposed technical and UX solutions, and guided other developers to implement features and fixes.
- Key technical leadership and implementations I led:
	- 🧰 Component-driven UI, layouts, and theme system; client-side performance improvements.
	- 🧩 Monaco editor integration (`components/monaco-editor.tsx`, `CodeEditor.tsx`) with dynamic loading and worker configuration.
	- 🔒 Judge0 integration (`lib/judge0.ts`, `lib/judge0-wrapper.ts`) with language adapters, base64 encoding, and result parsing.
	- 📡 QR attendance service (`lib/attendance-service.ts`) with snapshot listeners, queueing/debouncing, and export (`lib/attendance-export.ts`, `lib/attendance-excel-export.ts`).
	- 📝 Quiz management (`lib/quiz-service.ts`) supporting course/topic-based quizzes and result submission.
---

🧭 Problem statement
- Many small training institutes use disjointed tools for content, attendance, and assessments. Cloud Institution needed a single, reliable platform that unified these concerns while remaining fast, secure, and mobile-first.

💡 Solution overview
- Built a unified LMS that combines course content, student management, QR attendance, quizzes, programming assessments, and exportable analytics. Emphasis was placed on: modular components, secure external integrations (Judge0), and reliable data flows (Firestore + server-side helpers).

🔧 How it works — core flows

- 🧪 Programming assessments (Monaco + Judge0)
	- Students edit code in the Monaco editor; the editor is lazy-loaded for performance (`components/monaco-editor.tsx`).
	- Code is wrapped/normalized by language adapters in `lib/judge0-wrapper.ts` and submitted to Judge0 via `lib/judge0.ts` with base64 encoding and wait-for-result handling.
	- Results are decoded, formatted, and displayed with compilation output, runtime errors, execution time, and memory usage.

- 📡 QR attendance (real-time + exports)
	- Admins create attendance sessions and QR codes (`components/student-qr-code.tsx`) which students scan.
	- `lib/attendance-service.ts` subscribes to Firestore snapshots, queues and debounces updates, and builds weekly/monthly summaries consumed by UI components.
	- Export utilities (`lib/attendance-export.ts`, `lib/attendance-excel-export.ts`) generate CSV/XLSX reports with metadata and readable columns for admin download.

- 🧾 Quizzes & auto-grading
	- Quizzes are stored in Firestore and fetched with `lib/quiz-service.ts` (supports course/topic pathing and backward-compatible IDs).
	- Objective quizzes are auto-graded and results stored in `quizResults` for analytics and per-student history.

🔗 Data & integrations
- 🗄️ Primary datastore: Firebase Firestore (courses, quizzes, attendance, user profiles).
- 🔐 Auth: Firebase Auth for secure login flows.
- ⚙️ Code execution: Judge0 (proxied through server routes or server-side calls to keep API keys secret).
- 📦 Exports: Excel/XLSX libraries (XLSX, file-saver) for admin downloads.

🔒 Security & performance notes
- Judge0 API keys and admin credentials are kept server-side; clients never directly access secrets.
- Monaco editor is lazy-loaded to keep initial bundles small; worker paths configured for App Router.
- Firestore snapshot listeners are debounced/queued in `lib/attendance-service.ts` to avoid UI thrashing.

♿ Accessibility & UX
- 📱 Mobile-first design: QR attendance and student flows optimized for touch and smaller screens.
- 🌙 Dark mode support: theme-aware layouts with accessible contrast values.

Impact & metrics (add actual numbers)
- Active students: (fill in your numbers)
- Courses hosted: (fill in your numbers)
- Assessments graded: (fill in your numbers)

▶️ Call to action
- Want me to add a simple architecture SVG, GIF walkthrough, or embed actual screenshots? I can generate assets and update this README with them.

----

<b>Screenshots</b>

| Login Page |
|:--------|
| <div align="center">Single login page for student, teacher and admin</div> |
| <img width="1365" height="629" alt="image" src="https://github.com/user-attachments/assets/0e052e93-dbe3-4c34-bb10-f0275988f7db" /> |


| Student Management Tab Preview |
|:--------|
| <div align="center">Student Management Page</div> |
| <img width="1365" height="624" alt="image" src="https://github.com/user-attachments/assets/de8f6b81-3663-4fde-a03a-fa1f4bc0c05f" /> |
| <div align="center">Student Filter</div> |
| <img width="1364" height="630" alt="image" src="https://github.com/user-attachments/assets/3b0ca4f4-5028-4b15-b939-05d2ab6347a6" /> |
| <div align="center">Bulk Delete, Status Change and Email Transfer option <br> (The organization has disabled email feature from their side)</div> |
| <img width="1365" height="628" alt="image" src="https://github.com/user-attachments/assets/790f10ab-ebfb-4146-a9ad-e4038ca596a4" /> |
| <div align="center">Individual Student details within student list</div> |
<img width="1365" height="626" alt="image" src="https://github.com/user-attachments/assets/b3c02722-4433-43ef-8753-6610e0a56b2b" /> |

| Student Preview |
|:--------|
| <div align="center">Student Dashboard</div> |
| <img width="1365" height="632" alt="image" src="https://github.com/user-attachments/assets/c1b92a52-94c5-4aa1-b0f7-00e1a781f199" /> |
| <div align="center">Student Course Page</div> |
| <img width="1365" height="629" alt="image" src="https://github.com/user-attachments/assets/a44debd9-84bc-435d-a0c3-a7da66ca1456" /> |
| <div align="center">Student Attendance Page</div> |
| <img width="1365" height="633" alt="image" src="https://github.com/user-attachments/assets/58041e7f-e50a-4505-9d64-a01010450cb1" /> |
| <div align="center">Student Profile Page</div> |
| <img width="1365" height="633" alt="image" src="https://github.com/user-attachments/assets/bda5916f-b042-45f7-9f49-442e4b39deb1" /> |

and many more!

--- 

Key features
- 📚 Course management: content CRUD with progress tracking
- 👥 Multi-role system: Admin, Teacher, Student
- 🧪 Programming assessments: Monaco editor + Judge0 + auto-grading
- 📊 Analytics & exports: dashboards and Excel/XLSX export pipelines
- 📱 QR attendance: mobile-friendly scanning and exportable reports

Architecture & where to look
- Frontend: `app/`, `components/` (layouts & UI primitives)
- Services: `lib/` (`firebase.ts`, `firebase-admin-client.ts`, `judge0.ts`)
- API: `api/` route handlers (Judge0 proxy, export endpoints)
- Hooks: `hooks/` (`use-attendance.ts`, `use-toast.ts`)

Notes & permissions
- Built during a 3‑month internship at Cloud Institution. Confirm permissions before publishing or reusing code publicly.

----
