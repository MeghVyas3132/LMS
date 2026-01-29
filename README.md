# 🎓 Chitragupt LMS Portal

[![Live Site](https://img.shields.io/badge/live-cloudinstitution.in-007ACC)](https://www.cloudinstitution.in/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-teal?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%2FFirestore-yellow?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-Check%20with%20Cloud%20Institution-lightgrey)](#license)

🚀 **Live Product:** [https://www.cloudinstitution.in/](https://www.cloudinstitution.in/)

A comprehensive, production-ready Learning Management System (LMS) built with Next.js 15, React 19, and TypeScript. This platform serves teachers and students for course delivery, attendance tracking, assessments (including auto-graded programming challenges), reporting, and data exports.

<p align="center">
  <img width="1365" height="628" alt="LMS Dashboard" src="https://github.com/user-attachments/assets/f620ba46-c812-4cfc-bd52-a466aceaa0f1" />
</p>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Docker Deployment](#-docker-deployment)
- [Core Modules](#-core-modules)
  - [Authentication & User Management](#authentication--user-management)
  - [Course Management](#course-management)
  - [Programming Assessments](#programming-assessments)
  - [Quiz System](#quiz-system)
  - [Attendance System](#attendance-system)
  - [Schedule Management](#schedule-management)
  - [Export & Reporting](#export--reporting)
- [API Routes](#-api-routes)
- [UI Components](#-ui-components)
- [Architecture](#-architecture)
- [Security](#-security)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 📚 Course Management
| Feature | Description |
|---------|-------------|
| ✅ Course CRUD | Create, read, update, and delete courses with rich content |
| 📝 Rich Content Editor | Course materials with formatted text and media |
| 🎥 Video Lessons | Embedded video content for courses |
| 📈 Progress Tracking | Monitor student progress through courses |
| 📊 Course Analytics | Detailed insights into course engagement |

### 👥 User Management
| Feature | Description |
|---------|-------------|
| 🔐 Multi-role System | Admin, Teacher, and Student roles with different permissions |
| 🔑 Firebase Authentication | Secure email/password authentication |
| 📧 Email Verification | Email-based account verification |
| 📱 Phone Verification | Optional phone number verification |
| 🔒 Password Reset | Secure password recovery via email |
| 👤 Profile Management | User profile settings and customization |
| 📋 Bulk Operations | Bulk status changes, deletions, and email transfers |

### 🧩 Assessment System
| Feature | Description |
|---------|-------------|
| 🧪 Dynamic Quiz Builder | Create quizzes with multiple question types |
| 💻 Programming Challenges | Code execution with real-time feedback |
| 🤖 Auto-grading | Automatic grading for quizzes and code submissions |
| 📊 Results Analytics | Detailed performance reports and analytics |
| 🏢 Company Questions | Interview-style programming questions |

### 💻 Programming Environment
| Feature | Description |
|---------|-------------|
| 🧰 Monaco Code Editor | VS Code-quality editor in the browser |
| 🌐 Multi-language Support | Python, JavaScript, Java, C++, C#, PHP, Ruby, Go, Rust |
| 🔒 Secure Execution | Judge0 API integration for sandboxed code execution |
| ⚡ Real-time Feedback | Instant compilation and execution results |
| 📤 Base64 Encoding | Secure code transmission |

### 📡 Attendance & Analytics
| Feature | Description |
|---------|-------------|
| 📱 QR Code Attendance | Mobile-first QR scanning for attendance |
| 📊 Analytics Dashboard | Real-time attendance tracking and visualization |
| 📥 Excel/CSV Export | Download attendance reports in multiple formats |
| 📆 Weekly/Monthly Views | Comprehensive attendance summaries |
| ⏰ Time Tracking | Track hours spent per session |

### 🎨 Modern UI/UX
| Feature | Description |
|---------|-------------|
| 🌙 Dark Mode | Full dark theme support |
| 📱 Responsive Design | Mobile-first, works on all devices |
| 🎞️ Smooth Animations | Framer Motion powered transitions |
| 🧩 Component Library | 50+ reusable UI components |
| ♿ Accessibility | WCAG-compliant accessible design |

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Code Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Charts:** [Recharts](https://recharts.org/)
- **Calendar:** [React Big Calendar](https://github.com/jquense/react-big-calendar)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

### Backend & Services
- **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth)
- **Storage:** [Firebase Storage](https://firebase.google.com/docs/storage)
- **Code Execution:** [Judge0 API](https://judge0.com/)
- **Email:** [EmailJS](https://www.emailjs.com/) / [Resend](https://resend.com/)

### Development & Deployment
- **Deployment:** [Vercel](https://vercel.com/) / [Docker](https://www.docker.com/)
- **Containerization:** Docker + Docker Compose
- **Linting:** ESLint
- **Package Manager:** npm

---

## 📁 Project Structure

```
lms-portal/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home/landing page
│   ├── globals.css               # Global styles
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── courses/                  # Public course listing
│   │   ├── page.tsx              # Course catalog
│   │   └── [id]/                 # Individual course view
│   ├── login/                    # Authentication
│   ├── forgot-password/          # Password recovery
│   ├── dashboard/                # User dashboard redirect
│   │
│   ├── admin/                    # Admin/Teacher portal
│   │   ├── layout.tsx            # Admin layout
│   │   ├── dashboard/            # Admin dashboard
│   │   ├── students/             # Student management
│   │   ├── courses/              # Course management
│   │   │   └── [courseTitle]/    # Course editor
│   │   ├── assessments/          # Quiz management
│   │   │   └── view/             # Quiz viewer
│   │   ├── programming/          # Code challenges
│   │   │   └── submissions/      # View submissions
│   │   ├── company-questions/    # Interview questions
│   │   ├── attendance/           # Attendance management
│   │   ├── schedule/             # Schedule management
│   │   ├── notifications/        # Notification center
│   │   └── settings/             # Admin settings
│   │
│   ├── student/                  # Student portal
│   │   ├── dashboard/            # Student dashboard
│   │   ├── courses/              # Enrolled courses
│   │   ├── assessments/          # Take quizzes
│   │   │   ├── [quizId]/         # Quiz taking
│   │   │   └── results/          # Quiz results
│   │   ├── programming/          # Coding challenges
│   │   ├── company-questions/    # Practice questions
│   │   ├── attendance/           # View attendance
│   │   ├── notifications/        # Student notifications
│   │   └── profile/              # Profile settings
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── admin/                # Admin operations
│   │   ├── students/             # Student data
│   │   ├── courses/              # Course data
│   │   ├── attendance/           # Attendance APIs
│   │   ├── content/              # Content management
│   │   ├── code/                 # Code submission
│   │   ├── execute-code/         # Code execution
│   │   └── test-judge0/          # Judge0 testing
│   │
│   ├── auth/                     # Auth-related pages
│   │   ├── verify-email/         # Email verification
│   │   └── reset-password/       # Password reset
│   └── videos/                   # Video content
│
├── components/                   # React components
│   ├── admin-layout.tsx          # Admin layout component
│   ├── student-layout.tsx        # Student layout component
│   ├── main-layout.tsx           # Main layout wrapper
│   ├── theme-provider.tsx        # Theme context provider
│   ├── monaco-editor.tsx         # Monaco editor wrapper
│   ├── CodeEditor.tsx            # Simple code editor
│   ├── code-execution-result.tsx # Display code results
│   ├── student-qr-code.tsx       # QR code component
│   │
│   ├── ui/                       # shadcn/ui components (50+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   └── ... (40+ more)
│   │
│   ├── auth/                     # Auth components
│   │   ├── EmailVerificationStatus.tsx
│   │   └── PhoneVerification.tsx
│   │
│   ├── forms/                    # Form components
│   │   ├── AdminCreationForm.tsx
│   │   ├── StudentCreationForm.tsx
│   │   ├── TeacherCreationForm.tsx
│   │   └── UserFormBase.tsx
│   │
│   ├── home/                     # Landing page components
│   └── schedule/                 # Calendar components
│
├── lib/                          # Utilities & services
│   ├── firebase.ts               # Firebase client config
│   ├── firebase-admin-client.ts  # Firebase admin SDK
│   ├── auth-context.tsx          # Auth context provider
│   ├── role-config.ts            # Role-based navigation
│   │
│   ├── judge0.ts                 # Judge0 API integration
│   ├── judge0-wrapper.ts         # Judge0 helper functions
│   ├── language-adapters.ts      # Language-specific adapters
│   │
│   ├── attendance-service.ts     # Attendance management
│   ├── attendance-export.ts      # Attendance CSV export
│   ├── attendance-excel-export.ts# Attendance Excel export
│   ├── attendance-query-service.ts
│   ├── attendance-types.ts
│   ├── attendance-utils.ts
│   │
│   ├── quiz-service.ts           # Quiz management
│   ├── student-service.ts        # Student operations
│   ├── schedule-service.ts       # Schedule management
│   ├── course-utils.ts           # Course utilities
│   ├── email-service.ts          # Email sending
│   │
│   ├── export-utils.ts           # General export utilities
│   ├── course-export-utils.ts    # Course export
│   ├── student-export-utils.ts   # Student export
│   │
│   └── utils.ts                  # Common utilities
│
├── hooks/                        # Custom React hooks
│   ├── use-attendance.ts         # Attendance hook
│   ├── use-toast.ts              # Toast notifications
│   └── use-mobile.tsx            # Mobile detection
│
├── types/                        # TypeScript definitions
│   ├── student.ts                # Student types
│   ├── schedule.ts               # Schedule types
│   ├── programming.ts            # Programming types
│   └── external.d.ts             # External type declarations
│
├── styles/                       # Additional styles
│   ├── calendar.css
│   ├── calendar-overrides.css
│   └── phone-input.css
│
├── public/                       # Static assets
│   └── companies/                # Company logos
│
├── scripts/                      # Utility scripts
│   └── update-total-classes.ts
│
├── docs/                         # Documentation
│   └── screenshots/              # App screenshots
│
├── docker-compose.yml            # Production Docker config
├── docker-compose.dev.yml        # Development Docker config
├── Dockerfile                    # Production Dockerfile
├── Dockerfile.dev                # Development Dockerfile
│
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadcn/ui configuration
└── package.json                  # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Firebase Project** with Firestore, Auth, and Storage enabled
- **Judge0 API Key** (for code execution features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lms-portal.git
   cd lms-portal
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: `--legacy-peer-deps` is needed for React 19 compatibility

3. **Set up environment variables** (see below)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (Required)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Firebase Admin SDK (Required for server-side operations)
FIREBASE_ADMIN_PROJECT_ID=your_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Judge0 API Configuration (Required for code execution)
JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your_rapidapi_key
JUDGE0_API_HOST=judge0-ce.p.rapidapi.com

# Email Service (Optional)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Resend API (Optional - alternative email service)
RESEND_API_KEY=your_resend_api_key
```

### Running the Application

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Create `.env` file** with your environment variables

2. **Build and run with Docker Compose**
   ```bash
   # Production
   docker-compose up -d

   # Development
   docker-compose -f docker-compose.dev.yml up -d
   ```

3. **Access the application** at [http://localhost:3000](http://localhost:3000)

### Using Dockerfile Directly

```bash
# Build the image
docker build -t lms-portal \
  --build-arg NEXT_PUBLIC_FIREBASE_API_KEY=your_key \
  --build-arg NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain \
  --build-arg NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project \
  --build-arg NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket \
  --build-arg NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id \
  --build-arg NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id \
  --build-arg NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id \
  .

# Run the container
docker run -p 3000:3000 --env-file .env lms-portal
```

### Vercel Deployment

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

---

## 📦 Core Modules

### Authentication & User Management

The authentication system uses Firebase Auth with custom role management:

```typescript
// lib/auth-context.tsx - Authentication Provider
interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string, batch: string) => Promise<void>
  signOut: () => Promise<void>
  userProfile: any | null
  userClaims: any | null
}
```

**Roles:**
- **Admin** - Full access to all features
- **Teacher** - Can manage students, courses, and assessments (scoped to assigned courses)
- **Student** - Can view courses, take assessments, and track attendance

### Course Management

Courses are stored in Firestore with the following structure:

```typescript
interface Course {
  id: string
  title: string
  description: string
  content: string[]
  videoUrls: string[]
  enrolledStudents: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

**Features:**
- CRUD operations for courses
- Content management with rich text
- Video embedding support
- Student enrollment tracking
- Course-based filtering

### Programming Assessments

The programming environment uses Monaco Editor and Judge0 API:

```typescript
// lib/judge0.ts - Supported Languages
export const LANGUAGE_IDS: Record<string, number> = {
  javascript: 63,  // Node.js 12.14.0
  python: 71,      // Python 3.8.1
  java: 62,        // OpenJDK 13.0.1
  cpp: 54,         // GCC 9.2.0
  csharp: 51,      // Mono 6.6.0.161
  php: 68,         // PHP 7.4.1
  ruby: 72,        // Ruby 2.7.0
  go: 60,          // Go 1.13.5
  rust: 73,        // Rust 1.40.0
}
```

**Execution Flow:**
1. Student writes code in Monaco Editor
2. Code is normalized by language adapters
3. Submitted to Judge0 with base64 encoding
4. Results decoded and displayed with:
   - Standard output
   - Compilation errors
   - Runtime errors
   - Execution time & memory usage

### Quiz System

Quizzes support multiple question types and auto-grading:

```typescript
// lib/quiz-service.ts
interface Quiz {
  id: string
  topic: string
  course?: string
  courseID?: string
  courseName?: string
  questions: {
    question: string
    options: string[]
    correctAnswer: number
  }[]
}
```

**Features:**
- Course/topic-based quiz organization
- Auto-grading for objective questions
- Result history and analytics
- Backward-compatible quiz ID formats

### Attendance System

Real-time attendance tracking with QR codes:

```typescript
// lib/attendance-service.ts
interface AttendanceRecord {
  id?: string
  date: string
  status: "present" | "absent" | "holiday" | "late" | "excused"
  time: string | null
  hoursSpent: number
  courseId?: string
  courseName?: string
  timeIn?: string
  timeOut?: string
  notes?: string
}
```

**Features:**
- QR code generation for sessions
- Real-time Firestore listeners
- Debounced updates to prevent UI thrashing
- Weekly/monthly summaries
- Export to Excel/CSV

### Schedule Management

Calendar-based schedule management:

```typescript
// types/schedule.ts
interface CourseSchedule {
  id: string
  courseId: string
  courseName: string
  dayOfWeek: DayOfWeek
  startTime: string
  endTime: string
  mode: 'online' | 'offline'
  instructorName?: string
  location?: string
  isRecurring: boolean
}
```

**Features:**
- Recurring and one-time events
- Holiday management
- Schedule exceptions
- Role-based visibility
- Calendar integration

### Export & Reporting

Multiple export formats supported:

```typescript
// lib/attendance-excel-export.ts
function createAttendanceWorkbook(
  exportData: any[], 
  student: Student | null, 
  filters?: any
): XLSX.WorkBook
```

**Export Types:**
- Attendance reports (Excel/CSV)
- Student lists
- Course enrollments
- Quiz results

---

## 🔌 API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/route` | POST | Authentication operations |
| `/api/auth/verify-email` | POST | Email verification |
| `/api/auth/verify-phone` | POST | Phone verification |
| `/api/auth/reset-password` | POST | Password reset |
| `/api/admin/*` | Various | Admin operations |
| `/api/students/*` | Various | Student CRUD |
| `/api/courses/*` | Various | Course management |
| `/api/attendance/*` | Various | Attendance tracking |
| `/api/execute-code` | POST | Code execution via Judge0 |
| `/api/code/*` | Various | Code submissions |
| `/api/content/*` | Various | Content management |

---

## 🧩 UI Components

The project includes 50+ reusable UI components built with Radix UI and styled with Tailwind CSS:

### Form Components
- `Button`, `Input`, `Textarea`, `Select`
- `Checkbox`, `Radio Group`, `Switch`
- `Form` (with React Hook Form integration)
- `Input OTP` (for verification codes)

### Layout Components
- `Card`, `Dialog`, `Sheet`, `Drawer`
- `Tabs`, `Accordion`, `Collapsible`
- `Navigation Menu`, `Menubar`, `Sidebar`
- `Scroll Area`, `Resizable`

### Data Display
- `Table`, `Data Table`
- `Badge`, `Avatar`, `Progress`
- `Chart` (Recharts wrapper)
- `Calendar`, `Carousel`

### Feedback
- `Toast`, `Sonner`
- `Alert`, `Alert Dialog`
- `Skeleton`, `Loader`
- `Tooltip`, `Popover`, `Hover Card`

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client (Browser)                        │
├─────────────────────────────────────────────────────────────┤
│  Next.js 15 App Router  │  React 19  │  Tailwind CSS        │
│  Monaco Editor          │  shadcn/ui │  Framer Motion       │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js API Routes                        │
├─────────────────────────────────────────────────────────────┤
│  /api/auth/*      │  /api/admin/*     │  /api/students/*    │
│  /api/courses/*   │  /api/attendance/*│  /api/execute-code  │
└────────────────┬────────────────────────────────────────────┘
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
┌──────────────┐    ┌──────────────┐
│   Firebase   │    │   Judge0     │
│  ──────────  │    │   ────────   │
│  • Firestore │    │  Code        │
│  • Auth      │    │  Execution   │
│  • Storage   │    │  API         │
└──────────────┘    └──────────────┘
```

### Data Flow

1. **Authentication Flow:**
   - User signs in → Firebase Auth validates → Custom claims fetched → Profile loaded from Firestore

2. **Code Execution Flow:**
   - Code submitted → Language adapter normalizes → Base64 encoded → Judge0 API → Results decoded → Displayed

3. **Attendance Flow:**
   - QR scanned → Firestore updated → Snapshot listeners triggered → UI updated → Export available

---

## 🔒 Security

### Best Practices Implemented

- ✅ **Server-side secrets:** Judge0 API keys and admin credentials are never exposed to clients
- ✅ **Firebase Security Rules:** Firestore rules enforce role-based access
- ✅ **Input validation:** Zod schemas validate all user inputs
- ✅ **Secure code execution:** Judge0 sandboxed environment
- ✅ **Base64 encoding:** Code transmitted securely
- ✅ **Environment variables:** All secrets in env vars, not in code
- ✅ **Authentication checks:** Every API route verifies auth status
- ✅ **Role-based access:** Navigation and features filtered by user role

### Firebase Security Rules Example

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Students can only read their own data
    match /students/{studentId} {
      allow read: if request.auth != null && request.auth.uid == studentId;
      allow write: if false; // Only admin via server
    }
    
    // Admin collection - only admin users
    match /admin/{document=**} {
      allow read, write: if request.auth.token.role == 'admin';
    }
  }
}
```

---

## 📸 Screenshots

<details>
<summary><b>🔐 Login Page</b></summary>
<p align="center">
  <img width="1365" height="629" alt="Login Page" src="https://github.com/user-attachments/assets/0e052e93-dbe3-4c34-bb10-f0275988f7db" />
</p>
<p align="center"><em>Single login page for Admin, Teacher, and Student roles</em></p>
</details>

<details>
<summary><b>👥 Student Management</b></summary>
<p align="center">
  <img width="1365" height="624" alt="Student Management" src="https://github.com/user-attachments/assets/de8f6b81-3663-4fde-a03a-fa1f4bc0c05f" />
</p>
<p align="center"><em>Comprehensive student management with filtering and bulk operations</em></p>

<p align="center">
  <img width="1364" height="630" alt="Student Filter" src="https://github.com/user-attachments/assets/3b0ca4f4-5028-4b15-b939-05d2ab6347a6" />
</p>
<p align="center"><em>Advanced filtering options</em></p>

<p align="center">
  <img width="1365" height="628" alt="Bulk Operations" src="https://github.com/user-attachments/assets/790f10ab-ebfb-4146-a9ad-e4038ca596a4" />
</p>
<p align="center"><em>Bulk delete, status change, and email operations</em></p>

<p align="center">
  <img width="1365" height="626" alt="Individual Student" src="https://github.com/user-attachments/assets/b3c02722-4433-43ef-8753-6610e0a56b2b" />
</p>
<p align="center"><em>Individual student details within student list</em></p>
</details>

<details>
<summary><b>🎓 Student Dashboard</b></summary>
<p align="center">
  <img width="1365" height="632" alt="Student Dashboard" src="https://github.com/user-attachments/assets/c1b92a52-94c5-4aa1-b0f7-00e1a781f199" />
</p>
<p align="center"><em>Student dashboard with course progress and attendance</em></p>

<p align="center">
  <img width="1365" height="629" alt="Student Courses" src="https://github.com/user-attachments/assets/a44debd9-84bc-435d-a0c3-a7da66ca1456" />
</p>
<p align="center"><em>Student course view</em></p>

<p align="center">
  <img width="1365" height="633" alt="Student Attendance" src="https://github.com/user-attachments/assets/58041e7f-e50a-4505-9d64-a01010450cb1" />
</p>
<p align="center"><em>Attendance tracking view</em></p>

<p align="center">
  <img width="1365" height="633" alt="Student Profile" src="https://github.com/user-attachments/assets/bda5916f-b042-45f7-9f49-442e4b39deb1" />
</p>
<p align="center"><em>Student profile page</em></p>
</details>

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use the existing component library when possible
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project was built during a 3-month internship at Chitragupt/Cloud Institution. Please confirm permissions before publishing or reusing code publicly.

---

## 👨‍💻 Author

**Lead Application Developer** during a 3-month internship

**Key Contributions:**
- 🧰 Component-driven UI, layouts, and theme system
- 🧩 Monaco editor integration with dynamic loading
- 🔒 Judge0 integration with language adapters and base64 handling
- 📡 QR attendance service with Firestore listeners
- 📝 Quiz management with auto-grading
- 📥 Excel/CSV export pipelines

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Judge0](https://judge0.com/) - Code execution API
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Primitive components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor
- [Vercel](https://vercel.com/) - Deployment platform

---

<p align="center">
  Made with ❤️ for Cloud Institution
</p>

<p align="center">
  <a href="https://www.cloudinstitution.in/">🌐 Visit Live Site</a>
</p>
