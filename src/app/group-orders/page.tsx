'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Plus,
  ArrowLeft,
  MapPin,
  Star,
  Calendar
} from 'lucide-react';

export default function GroupOrders() {
  const [activeTab, setActiveTab] = useState('active');

  // Mock group orders data
  const mockGroupOrders = [
    {
      id: 1,
      title: 'Premium Cooking Oil Bulk Order',
      description: 'High-quality refined oil for street food vendors in Andheri area',
      supplier: 'Singh Wholesale Hub',
      supplierRating: 4.6,
      location: 'Andheri West, Mumbai',
      targetQuantity: 500,
      currentQuantity: 340,
      pricePerUnit: 165,
      originalPrice: 185,
      discount: '20%',
      timeLeft: '2 days left',
      participants: 12,
      status: 'active',
      items: [
        { name: 'Refined Sunflower Oil', quantity: '10L', price: 1650, discount: '20%' },
        { name: 'Mustard Oil', quantity: '5L', price: 850, discount: '15%' }
      ],
      savings: 3500,
      deliveryDate: '2025-07-28'
    },
    {
      id: 2,
      title: 'Fresh Vegetables Weekly Supply',
      description: 'Farm-fresh vegetables delivered every Monday for street vendors',
      supplier: 'Farmers Direct Co-op',
      supplierRating: 4.8,
      location: 'Borivali East, Mumbai',
      targetQuantity: 1000,
      currentQuantity: 750,
      pricePerUnit: 45,
      originalPrice: 55,
      discount: '18%',
      timeLeft: '5 days left',
      participants: 18,
      status: 'active',
      items: [
        { name: 'Onions', quantity: '25kg', price: 1125, discount: '18%' },
        { name: 'Tomatoes', quantity: '20kg', price: 1200, discount: '15%' },
        { name: 'Potatoes', quantity: '30kg', price: 1350, discount: '20%' }
      ],
      savings: 2800,
      deliveryDate: '2025-07-30'
    },
    {
      id: 3,
      title: 'Spices & Masala Combination Pack',
      description: 'Premium quality spices and masalas for authentic street food taste',
      supplier: 'Spice Kings Trading',
      supplierRating: 4.7,
      location: 'Crawford Market, Mumbai',
      targetQuantity: 200,
      currentQuantity: 200,
      pricePerUnit: 280,
      originalPrice: 350,
      discount: '25%',
      timeLeft: 'Order complete',
      participants: 25,
      status: 'completed',
      items: [
        { name: 'Garam Masala', quantity: '2kg', price: 800, discount: '25%' },
        { name: 'Red Chili Powder', quantity: '5kg', price: 1250, discount: '20%' },
        { name: 'Turmeric Powder', quantity: '3kg', price: 750, discount: '30%' }
      ],
      savings: 4200,
      deliveryDate: '2025-07-25'
    }
  ];

  const filteredOrders = mockGroupOrders.filter(order => {
    if (activeTab === 'active') return order.status === 'active';
    if (activeTab === 'completed') return order.status === 'completed';
    return true;
  });

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Group Orders
            </h1>
            <p className="text-gray-600">
              Join group orders to get better wholesale prices on raw materials.
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Group Order
          </Button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('active')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'active'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Active Orders ({mockGroupOrders.filter(o => o.status === 'active').length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed ({mockGroupOrders.filter(o => o.status === 'completed').length})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Orders ({mockGroupOrders.length})
            </button>
          </nav>
        </div>

        {/* Group Orders Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{order.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-3">
                      {order.description}
                    </CardDescription>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{order.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{order.supplierRating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{order.participants} joined</span>
                      </div>
                    </div>

                    {/* Supplier Info */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="font-medium text-gray-900">{order.supplier}</p>
                    </div>
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-gray-900">₹{order.pricePerUnit}</div>
                    <div className="text-sm text-gray-500 line-through">₹{order.originalPrice}</div>
                    <div className="text-sm font-medium text-green-600">{order.discount} off</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress: {order.currentQuantity}/{order.targetQuantity} kg</span>
                    <span>{Math.round(getProgressPercentage(order.currentQuantity, order.targetQuantity))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(order.currentQuantity, order.targetQuantity)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Items List */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Items included:</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} ({item.quantity})</span>
                        <div className="text-right">
                          <span className="font-medium">₹{item.price}</span>
                          <span className="text-green-600 ml-2">({item.discount} off)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Savings & Time */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>Save ₹{order.savings}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Delivery: {new Date(order.deliveryDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  {order.status === 'active' && (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <Clock className="h-4 w-4" />
                      <span>{order.timeLeft}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  {order.status === 'active' ? (
                    <>
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        Join Group Order
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" className="flex-1">
                      Order Completed ✓
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {activeTab} group orders found
            </h3>
            <p className="text-gray-500 mb-6">
              Start or join a group order to get better wholesale prices.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Group Order
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
