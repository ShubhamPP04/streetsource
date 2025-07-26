'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'vendor' | 'supplier' | 'admin'
  fallbackPath?: string
}

export function ProtectedRoute({ 
  children, 
  requiredRole, 
  fallbackPath = '/auth/login' 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(fallbackPath)
        return
      }

      // If a specific role is required, check user metadata
      if (requiredRole && user.user_metadata?.role !== requiredRole) {
        // For demo purposes, if user is not the right role, redirect to login with message
        router.push(`${fallbackPath}?error=insufficient_permissions`)
        return
      }
    }
  }, [user, loading, router, requiredRole, fallbackPath])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole && user.user_metadata?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
