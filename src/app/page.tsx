'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Store, 
  Truck, 
  Users, 
  TrendingDown, 
  Shield, 
  Clock,
  MapPin,
  Star,
  PhoneCall
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Store className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
            <span className="text-lg sm:text-2xl font-bold text-gray-900">StreetSource</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-4" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm px-2 sm:px-4" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Connect Street Food Vendors with 
              <span className="text-orange-600"> Trusted Suppliers</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Revolutionizing raw material sourcing for India&apos;s street food ecosystem. 
              Get better prices, guaranteed quality, and reliable delivery through our verified supplier network.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">
                <Link href="/vendor/register">Join as Vendor</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/supplier/register">Become a Supplier</Link>
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <span>Better Prices</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                <span>Quick Delivery</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-green-800 text-sm sm:text-base">Fresh Vegetables</p>
                    <p className="text-xs sm:text-sm text-green-600">25% bulk discount</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-800 text-sm sm:text-base">₹45/kg</p>
                    <p className="text-xs sm:text-sm text-gray-500 line-through">₹60/kg</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-yellow-800 text-sm sm:text-base">Spices & Masala</p>
                    <p className="text-xs sm:text-sm text-yellow-600">Premium quality</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-800 text-sm sm:text-base">₹280/kg</p>
                    <p className="text-xs sm:text-sm text-gray-500">Verified supplier</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-red-800 text-sm sm:text-base">Cooking Oil</p>
                    <p className="text-xs sm:text-sm text-red-600">Group order active</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-800 text-sm sm:text-base">₹165/L</p>
                    <p className="text-xs sm:text-sm text-gray-500">5 vendors joined</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything You Need to Source Better
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our platform addresses the core challenges street food vendors face when sourcing raw materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Verified Suppliers</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  All suppliers are thoroughly verified for quality, reliability, and business legitimacy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Group Ordering</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Join with other vendors to place bulk orders and get better wholesale prices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Price Comparison</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Compare prices across multiple suppliers in real-time to get the best deals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Location-Based</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Find suppliers near your location for faster delivery and lower transportation costs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Order Tracking</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Track your orders in real-time from placement to delivery with SMS notifications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">Rating System</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Rate and review suppliers to build trust and help the community make better choices
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How StreetSource Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to transform your raw material sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Register & Verify</h3>
              <p className="text-gray-600">
                Sign up as a vendor or supplier. Complete our simple verification process to ensure trust and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse & Compare</h3>
              <p className="text-gray-600">
                Search for products, compare prices, check supplier ratings, and join group orders for better deals.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Order & Track</h3>
              <p className="text-gray-600">
                Place orders, make secure payments, and track delivery in real-time. Rate your experience to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-orange-100">Verified Vendors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-orange-100">Trusted Suppliers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹2L+</div>
              <p className="text-orange-100">Monthly Savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-orange-100">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of street food vendors who are already saving money and time with StreetSource
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/vendor/register">Start as Vendor</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-600 text-white hover:bg-gray-800">
              <Link href="/supplier/register">Join as Supplier</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Store className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-gray-900">StreetSource</span>
              </div>
              <p className="text-gray-600 mb-4">
                Connecting street food vendors with trusted suppliers across India.
              </p>
              <div className="flex items-center space-x-2 text-gray-600">
                <PhoneCall className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Vendors</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/vendor/register" className="hover:text-orange-600">Register</Link></li>
                <li><Link href="/marketplace" className="hover:text-orange-600">Browse Suppliers</Link></li>
                <li><Link href="/group-orders" className="hover:text-orange-600">Group Orders</Link></li>
                <li><Link href="/vendor/dashboard" className="hover:text-orange-600">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Suppliers</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/supplier/register" className="hover:text-orange-600">Join Us</Link></li>
                <li><Link href="/supplier/dashboard" className="hover:text-orange-600">Dashboard</Link></li>
                <li><Link href="/supplier/analytics" className="hover:text-orange-600">Analytics</Link></li>
                <li><Link href="/verification" className="hover:text-orange-600">Verification</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/help" className="hover:text-orange-600">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-orange-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 StreetSource. All rights reserved. Built for India&apos;s street food ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
