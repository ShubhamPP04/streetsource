'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Store, 
  Search, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Package,
  Bell,
  Settings,
  LogOut,
  MapPin,
  Star,
  Clock,
  Filter
} from 'lucide-react';

export default function VendorDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  // Mock data
  const mockProducts = [
    {
      id: 1,
      name: 'Fresh Onions',
      supplier: 'Raj Vegetables',
      price: 45,
      unit: 'kg',
      rating: 4.5,
      location: '2.5 km away',
      discount: '15% off on 20kg+',
      inStock: true,
      groupOrder: false
    },
    {
      id: 2,
      name: 'Premium Tomatoes',
      supplier: 'Singh Fresh Mart',
      price: 60,
      unit: 'kg',
      rating: 4.8,
      location: '3.2 km away',
      discount: null,
      inStock: true,
      groupOrder: true
    },
    {
      id: 3,
      name: 'Cooking Oil (Refined)',
      supplier: 'Wholesale Hub',
      price: 165,
      unit: 'liter',
      rating: 4.6,
      location: '1.8 km away',
      discount: '20% off on 10L+',
      inStock: true,
      groupOrder: true
    },
    {
      id: 4,
      name: 'Basmati Rice',
      supplier: 'Grain Traders',
      price: 95,
      unit: 'kg',
      rating: 4.7,
      location: '4.1 km away',
      discount: null,
      inStock: false,
      groupOrder: false
    }
  ];

  const mockGroupOrders = [
    {
      id: 1,
      title: 'Bulk Cooking Oil Order',
      targetAmount: 50000,
      currentAmount: 32000,
      participants: 8,
      timeLeft: '2 days',
      savings: '25%'
    },
    {
      id: 2,
      title: 'Fresh Vegetables Bundle',
      targetAmount: 30000,
      currentAmount: 28500,
      participants: 12,
      timeLeft: '6 hours',
      savings: '18%'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD001',
      supplier: 'Raj Vegetables',
      items: 'Onions, Potatoes, Tomatoes',
      amount: 1250,
      status: 'Delivered',
      date: '2025-01-24'
    },
    {
      id: 'ORD002',
      supplier: 'Wholesale Hub',
      items: 'Cooking Oil, Spices',
      amount: 850,
      status: 'In Transit',
      date: '2025-01-25'
    }
  ];

  return (
    <ProtectedRoute requiredRole="vendor">
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Store className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-gray-900">StreetSource</span>
              </Link>
              <div className="hidden md:flex items-center space-x-1 text-sm text-gray-500">
                <span>/</span>
                <span>Vendor Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.user_metadata?.name || user?.email?.split('@')[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Find the best deals on raw materials from verified suppliers near you.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Savings</p>
                  <p className="text-2xl font-bold text-gray-900">₹3,240</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">18% average discount</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Group Orders</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-purple-600 mt-2">2 active</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-orange-600 mt-2">1 in transit</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Browse Suppliers & Products</CardTitle>
                <CardDescription>
                  Find the best deals on raw materials from verified suppliers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search for products, suppliers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="all">All Categories</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="spices">Spices</option>
                    <option value="oil">Oils & Ghee</option>
                    <option value="grains">Grains & Rice</option>
                    <option value="dairy">Dairy</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>

                {/* Products Grid */}
                <div className="space-y-4">
                  {mockProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          {product.groupOrder && (
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                              Group Order
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                              Out of Stock
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{product.supplier}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{product.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{product.location}</span>
                          </div>
                          {product.discount && (
                            <span className="text-green-600 font-medium">{product.discount}</span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          ₹{product.price}
                          <span className="text-sm font-normal text-gray-500">/{product.unit}</span>
                        </p>
                        <Button
                          size="sm"
                          className="mt-2 bg-orange-600 hover:bg-orange-700"
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">#{order.id}</p>
                        <p className="text-sm text-gray-600">{order.supplier}</p>
                        <p className="text-sm text-gray-500">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">₹{order.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Group Orders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Active Group Orders</span>
                </CardTitle>
                <CardDescription>
                  Join group orders to get better bulk pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockGroupOrders.map((order) => (
                  <div key={order.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{order.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>₹{order.currentAmount.toLocaleString()} / ₹{order.targetAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full" 
                          style={{ width: `${(order.currentAmount / order.targetAmount) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{order.participants} vendors joined</span>
                        <span className="text-green-600 font-medium">{order.savings} savings</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-500">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {order.timeLeft} left
                        </span>
                        <Button size="sm" variant="outline">
                          Join Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Browse All Suppliers
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Create Group Order
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Track Orders
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Rate Suppliers
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Our support team is here to help you with any questions about sourcing or orders.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </ProtectedRoute>
  );
}
