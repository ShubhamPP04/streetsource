'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Store, 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  Truck,
  Shield,
  Filter,
  Users,
  Phone,
  ArrowLeft
} from 'lucide-react';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Mock suppliers data
  const mockSuppliers = [
    {
      id: 1,
      name: 'Raj Vegetables & Fruits',
      category: 'Fresh Produce',
      rating: 4.8,
      reviews: 156,
      location: 'Andheri West, Mumbai',
      distance: '2.3 km',
      responseTime: '30 min',
      minOrder: 500,
      deliveryFee: 0,
      verified: true,
      online: true,
      products: ['Onions', 'Tomatoes', 'Potatoes', 'Green Vegetables'],
      description: 'Fresh vegetables directly from farms. Quality guaranteed with 30-day return policy.',
      discounts: ['Bulk orders 15% off', 'Free delivery above ₹1000']
    },
    {
      id: 2,
      name: 'Singh Wholesale Hub',
      category: 'Spices & Oil',
      rating: 4.6,
      reviews: 89,
      location: 'Karol Bagh, Delhi',
      distance: '4.1 km',
      responseTime: '45 min',
      minOrder: 800,
      deliveryFee: 50,
      verified: true,
      online: false,
      products: ['Cooking Oil', 'Spices', 'Masala', 'Ghee'],
      description: 'Premium spices and cooking oils. Established 1985. GST billing available.',
      discounts: ['Group orders 20% off']
    },
    {
      id: 3,
      name: 'Mumbai Grains & Pulses',
      category: 'Grains',
      rating: 4.7,
      reviews: 234,
      location: 'Crawford Market, Mumbai',
      distance: '5.8 km',
      responseTime: '1 hour',
      minOrder: 1000,
      deliveryFee: 80,
      verified: true,
      online: true,
      products: ['Basmati Rice', 'Wheat', 'Pulses', 'Dal'],
      description: 'Quality grains sourced from Punjab and UP. Bulk quantities available.',
      discounts: ['Monthly subscription 10% off', 'Bulk orders 25% off']
    },
    {
      id: 4,
      name: 'Fresh Dairy Co-op',
      category: 'Dairy',
      rating: 4.9,
      reviews: 67,
      location: 'Whitefield, Bangalore',
      distance: '3.2 km',
      responseTime: '20 min',
      minOrder: 300,
      deliveryFee: 0,
      verified: true,
      online: true,
      products: ['Milk', 'Paneer', 'Butter', 'Yogurt'],
      description: 'Farm-fresh dairy products. Daily delivery available. FSSAI certified.',
      discounts: ['Daily orders 5% off']
    }
  ];

  const categories = [
    'All Categories',
    'Fresh Produce',
    'Spices & Oil',
    'Grains',
    'Dairy',
    'Meat & Poultry',
    'Beverages'
  ];

  const filteredSuppliers = mockSuppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.products.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           supplier.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto max-w-7xl px-4 py-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/vendor/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Supplier Marketplace
          </h1>
          <p className="text-gray-600">
            Discover verified suppliers near you. Compare prices, check ratings, and place orders with confidence.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search suppliers, products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[180px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase().replace(' categories', '')}>
                    {category}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[150px]"
              >
                <option value="rating">Sort by Rating</option>
                <option value="distance">Sort by Distance</option>
                <option value="response">Sort by Response Time</option>
                <option value="minOrder">Sort by Min Order</option>
              </select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredSuppliers.length} suppliers {searchQuery && `for "${searchQuery}"`}
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl">{supplier.name}</CardTitle>
                      {supplier.verified && (
                        <Shield className="h-5 w-5 text-green-600" />
                      )}
                      <div className={`h-2 w-2 rounded-full ${
                        supplier.online ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <CardDescription className="text-sm text-gray-600">
                      {supplier.category}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{supplier.rating}</span>
                      <span className="text-sm text-gray-500">({supplier.reviews})</span>
                    </div>
                    <p className="text-sm text-gray-500">{supplier.online ? 'Online' : 'Offline'}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Location and Logistics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{supplier.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{supplier.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Truck className="h-4 w-4" />
                      <span>₹{supplier.deliveryFee} delivery</span>
                    </div>
                    <div className="text-gray-600">
                      Min order: ₹{supplier.minOrder}
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Products:</p>
                    <div className="flex flex-wrap gap-2">
                      {supplier.products.map((product) => (
                        <span
                          key={product}
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600">{supplier.description}</p>

                  {/* Discounts */}
                  {supplier.discounts.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-green-900 mb-1">Current Offers:</p>
                      <div className="space-y-1">
                        {supplier.discounts.map((discount, index) => (
                          <p key={index} className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                            • {discount}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-3 pt-2">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                      View Products
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500 pt-2 border-t">
                    <p>📍 {supplier.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredSuppliers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No suppliers found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Group Orders CTA */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Want better prices? Try Group Orders!
                </h3>
                <p className="text-purple-700">
                  Join with other vendors to place bulk orders and save up to 25% on your purchases.
                </p>
              </div>
              <div className="ml-6">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/group-orders">
                    <Users className="h-4 w-4 mr-2" />
                    Browse Group Orders
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
