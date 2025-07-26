'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, ArrowLeft, Upload } from 'lucide-react';

export default function SupplierRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    businessType: '',
    categories: [] as string[],
    experience: '',
    gstNumber: '',
    panNumber: '',
    deliveryRadius: '',
    minOrderAmount: '',
    description: ''
  });

  const categoryOptions = [
    'Fresh Vegetables',
    'Fruits',
    'Spices & Masala',
    'Cooking Oil & Ghee',
    'Grains & Rice',
    'Pulses & Lentils',
    'Dairy Products',
    'Meat & Poultry',
    'Seafood',
    'Dry Fruits & Nuts',
    'Packaged Foods',
    'Beverages',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Supplier registration:', formData);
    // For demo purposes, redirect to signup with pre-filled email
    const signupUrl = `/auth/signup?email=${encodeURIComponent(formData.email)}&role=supplier`;
    router.push(signupUrl);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navbar />

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Verified Supplier</h1>
          <p className="text-xl text-gray-600">
            Join our network and connect with street food vendors across your city
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Supplier Registration</CardTitle>
            <CardDescription>
              Complete your business details to become a verified supplier. Our team will review and approve your application within 48 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                      Business Name *
                    </label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your business/company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="ownerName" className="text-sm font-medium text-gray-700">
                      Owner Name *
                    </label>
                    <Input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={handleChange}
                      placeholder="Business owner's full name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="business@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select business type</option>
                    <option value="wholesale">Wholesale Distributor</option>
                    <option value="farmer">Farmer/Producer</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="retailer">Retailer</option>
                    <option value="cooperative">Farmer Cooperative</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Business Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, building name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium text-gray-700">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-medium text-gray-700">
                        State *
                      </label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                        Pincode *
                      </label>
                      <Input
                        id="pincode"
                        name="pincode"
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="123456"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Categories *</h3>
                <p className="text-sm text-gray-600 mb-4">Select all categories that you supply</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {categoryOptions.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                      Years in Business *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select experience</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="more-than-10">More than 10 years</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="deliveryRadius" className="text-sm font-medium text-gray-700">
                      Delivery Radius (km) *
                    </label>
                    <Input
                      id="deliveryRadius"
                      name="deliveryRadius"
                      type="number"
                      required
                      min="1"
                      max="50"
                      value={formData.deliveryRadius}
                      onChange={handleChange}
                      placeholder="10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="minOrderAmount" className="text-sm font-medium text-gray-700">
                      Minimum Order Amount (₹) *
                    </label>
                    <Input
                      id="minOrderAmount"
                      name="minOrderAmount"
                      type="number"
                      required
                      min="0"
                      value={formData.minOrderAmount}
                      onChange={handleChange}
                      placeholder="500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="gstNumber" className="text-sm font-medium text-gray-700">
                      GST Number
                    </label>
                    <Input
                      id="gstNumber"
                      name="gstNumber"
                      type="text"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Business Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your business, products, and what makes you unique..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Business License/Registration
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, JPG or PNG (max 5MB)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      GST Certificate (if applicable)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, JPG or PNG (max 5MB)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Box */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Verification Process</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Our team will verify your business documents</li>
                  <li>• You&apos;ll receive verification status within 48 hours</li>
                  <li>• Once verified, you can start listing products</li>
                  <li>• Set up your supplier profile and start receiving orders</li>
                </ul>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" required className="rounded border-gray-300" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-green-600 hover:underline">
                    Terms of Service
                  </Link>,{' '}
                  <Link href="/privacy" className="text-green-600 hover:underline">
                    Privacy Policy
                  </Link>, and{' '}
                  <Link href="/supplier-agreement" className="text-green-600 hover:underline">
                    Supplier Agreement
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Submit Application
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-green-600 hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
