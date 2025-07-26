'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// Demo user type
type DemoUser = {
  id: string
  email: string
  user_metadata?: {
    role?: string
    name?: string
  }
}

type AuthError = {
  message: string
}

type AuthContextType = {
  user: DemoUser | null
  session: { user: DemoUser } | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<{ error: AuthError | null }>
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>
}

// Demo credentials
const DEMO_CREDENTIALS = [
  {
    email: 'vendor@demo.com',
    password: 'demo123',
    role: 'vendor',
    name: 'Demo Vendor'
  },
  {
    email: 'supplier@demo.com', 
    password: 'demo123',
    role: 'supplier',
    name: 'Demo Supplier'
  },
  {
    email: 'admin@demo.com',
    password: 'demo123', 
    role: 'admin',
    name: 'Demo Admin'
  }
]

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [session, setSession] = useState<{ user: DemoUser } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('demo_user')
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      setSession({ user: userData })
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Find demo user
    const demoUser = DEMO_CREDENTIALS.find(
      cred => cred.email === email && cred.password === password
    )
    
    if (!demoUser) {
      return { 
        error: { 
          message: 'Invalid email or password. Try: vendor@demo.com / demo123' 
        } as AuthError 
      }
    }
    
    const userData: DemoUser = {
      id: `demo-${demoUser.role}-${Date.now()}`,
      email: demoUser.email,
      user_metadata: {
        role: demoUser.role,
        name: demoUser.name
      }
    }
    
    // Save to localStorage
    localStorage.setItem('demo_user', JSON.stringify(userData))
    setUser(userData)
    setSession({ user: userData })
    
    return { error: null }
  }

  const signUp = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demo, just create a vendor account
    const userData: DemoUser = {
      id: `demo-vendor-${Date.now()}`,
      email: email,
      user_metadata: {
        role: 'vendor',
        name: email.split('@')[0]
      }
    }
    
    // In a real app, this would send verification email
    // For demo, we'll just show success message
    return { error: null }
  }

  const signOut = async () => {
    localStorage.removeItem('demo_user')
    setUser(null)
    setSession(null)
    return { error: null }
  }

  const resetPassword = async (email: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo, always succeed if it's a demo email
    const isDemoEmail = DEMO_CREDENTIALS.some(cred => cred.email === email)
    if (!isDemoEmail && !email.includes('@')) {
      return { error: { message: 'Please enter a valid email address' } as AuthError }
    }
    
    return { error: null }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
