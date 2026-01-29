import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Course Videos | Chitragupt LMS",
  description: "Watch our comprehensive course videos covering AWS Cloud Computing, Java Programming, and Python Development. Learn at your own pace with expert-led tutorials.",
  keywords: ["AWS", "Java", "Python", "course videos", "programming tutorials", "cloud computing"],
  openGraph: {
    title: "Course Videos | Chitragupt LMS",
    description: "Watch comprehensive course videos on AWS, Java, and Python",
    type: "website",
  },
}

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
