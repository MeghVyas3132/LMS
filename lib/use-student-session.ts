"use client"

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { getStudentSession } from './session-storage'

/**
 * Custom hook to handle session management in student pages
 * @param callback Function to call with student data when session is available
 * @returns Object containing loading state and router
 */
export function useStudentSession(callback: (studentData: any) => void) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  // Use a stable callback with useCallback
  const stableCallback = useCallback(callback, []);
    useEffect(() => {
    let isMounted = true;
    
    // Get student data from localStorage (now returns demo data if no session)
    const studentData = getStudentSession()
    
    if (studentData) {
      // We have a valid session, call the callback with student data
      stableCallback(studentData)
      if (isMounted) setIsLoading(false)
    } else {
      // No session - just stop loading, don't redirect
      if (isMounted) setIsLoading(false)
    }
    
    return () => {
      isMounted = false;
    }
  }, [router, stableCallback])
  
  return { router, isLoading }
}
