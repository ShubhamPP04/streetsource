export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  businessType: string;
  verified: boolean;
  rating: number;
  createdAt: Date;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  categories: string[];
  verified: boolean;
  rating: number;
  totalOrders: number;
  responseTime: number; // in hours
  deliveryRadius: number; // in km
  minOrderAmount: number;
  createdAt: Date;
}

export interface Product {
  id: string;
  supplierId: string;
  name: string;
  category: string;
  unit: string; // kg, liter, piece, etc.
  pricePerUnit: number;
  minOrderQuantity: number;
  maxOrderQuantity: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
  qualityGrade: 'A' | 'B' | 'C';
  expiryDays?: number;
}

export interface Order {
  id: string;
  vendorId: string;
  supplierId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'dispatched' | 'delivered' | 'cancelled';
  orderDate: Date;
  expectedDelivery: Date;
  deliveryAddress: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  groupOrderId?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

export interface GroupOrder {
  id: string;
  createdBy: string;
  supplierId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  participants: string[];
  status: 'active' | 'completed' | 'cancelled';
  expiryDate: Date;
  products: Product[];
}

export interface Review {
  id: string;
  reviewerId: string;
  revieweeId: string;
  orderId: string;
  rating: number;
  comment: string;
  reviewType: 'supplier' | 'vendor';
  createdAt: Date;
}
