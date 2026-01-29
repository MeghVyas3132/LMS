"use client"

import MainLayout from "@/components/main-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "AWS Cloud Computing",
    description: "Learn Amazon Web Services fundamentals and cloud infrastructure",
    youtubeId: "N4sJj-SxX00",
    category: "AWS"
  },
  {
    id: 2,
    title: "Java Programming",
    description: "Master Java programming concepts and object-oriented design",
    youtubeId: "7-lK9EpBS_Y",
    category: "Java"
  },
  {
    id: 3,
    title: "Python Development",
    description: "Complete Python programming from basics to advanced concepts",
    youtubeId: "fqF9M92jzUo",
    category: "Python"
  }
]

export default function VideosPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play className="h-10 w-10 text-white" />
              <h1 className="text-4xl font-bold text-white">Course Videos</h1>
            </div>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Watch our comprehensive course videos covering AWS, Java, and Python.
              Start learning at your own pace with expert-led tutorials.
            </p>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-slate-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {video.title}
                    </CardTitle>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {video.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  {/* YouTube Iframe Embed */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              More Courses Coming Soon
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We're constantly adding new video content to help you master in-demand technologies.
              Check back regularly for updates on Azure, DevOps, Data Analytics, and more.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
