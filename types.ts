export interface Order {
  id: string;
  customer: string;
  restaurant: string;
  amount: number;
  status: 'Delivered' | 'Pending' | 'Cancelled' | 'Out for Delivery' | 'Processing';
  date: string;
  paymentMethod: string;
  items?: { name: string; price: number; quantity: number }[];
}

export interface Restaurant {
  id: string;
  name: string;
  owner: string;
  category: string;
  rating: number;
  status: 'Active' | 'Pending' | 'Blocked';
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  wallet: number;
  status: 'Active' | 'Inactive' | 'Suspended';
  avatar: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  available: boolean;
  image: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}
