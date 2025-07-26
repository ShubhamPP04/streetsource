'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Store, LogOut, User } from 'lucide-react'

interface NavbarProps {
  className?: string
}

export function Navbar({ className = "" }: NavbarProps) {
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${className}`}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Store className="h-8 w-8 text-orange-600" />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            StreetSource
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/marketplace" className="text-gray-600 hover:text-orange-600 transition-colors">
            Marketplace
          </Link>
          <Link href="/group-orders" className="text-gray-600 hover:text-orange-600 transition-colors">
            Group Orders
          </Link>
          {user && (
            <Link href="/vendor/dashboard" className="text-gray-600 hover:text-orange-600 transition-colors">
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{user.user_metadata?.name || user.email?.split('@')[0]}</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                  {user.user_metadata?.role || 'user'}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
