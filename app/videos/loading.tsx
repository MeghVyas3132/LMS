import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-emerald-500/30" />
          <Skeleton className="h-6 w-96 mx-auto bg-emerald-500/30" />
        </div>
      </div>

      {/* Videos Grid Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <Skeleton className="h-4 w-64 mb-4" />
                <Skeleton className="aspect-video w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
