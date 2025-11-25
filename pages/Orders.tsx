import React from 'react';
import Header from '../components/Header';
import { Bike, CheckCircle2, Clock, MapPin, Receipt, Utensils } from 'lucide-react';

const Orders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Orders Management" />
      <main className="p-8 space-y-6">
        {/* Filters */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search Order ID..." 
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-medium">All Status</button>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm">Export Data</button>
        </div>

        {/* Master Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Orders List (Left) */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   <tr className="bg-blue-50/50">
                    <td className="px-6 py-4 font-medium text-primary">#83450</td>
                    <td className="px-6 py-4">John Doe</td>
                    <td className="px-6 py-4 font-bold">$35.10</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Out for Delivery
                      </span>
                    </td>
                    <td className="px-6 py-4"><button className="text-primary font-medium hover:underline">View</button></td>
                   </tr>
                   {[1, 2, 3].map((i) => (
                     <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">#{83450 + i}</td>
                      <td className="px-6 py-4">Customer {i}</td>
                      <td className="px-6 py-4 font-bold">${(20 + i * 5).toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-4"><button className="text-primary font-medium hover:underline">View</button></td>
                     </tr>
                   ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <button className="text-sm text-gray-500 hover:text-primary">Load More</button>
            </div>
          </div>

          {/* Detailed View (Right) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Order #83450</h3>
                  <p className="text-sm text-gray-500">From Pizza Heaven</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">Out for Delivery</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 text-sm">Items Ordered</h4>
                <div className="flex justify-between text-sm">
                  <span>1x Pepperoni Pizza (L)</span>
                  <span className="font-medium">$22.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>2x Garlic Bread</span>
                  <span className="font-medium">$8.00</span>
                </div>
                <div className="border-t border-gray-100 my-2 pt-2 space-y-1">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>$30.00</span>
                  </div>
                   <div className="flex justify-between text-sm text-gray-500">
                    <span>Tax & Fees</span>
                    <span>$5.10</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 pt-2">
                    <span>Total</span>
                    <span>$35.10</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <label className="block text-xs font-medium text-gray-500 mb-1">Assign Driver</label>
                <div className="flex gap-2">
                  <select className="flex-1 text-sm border-gray-200 rounded-lg">
                    <option>Esther Howard (Current)</option>
                    <option>John Smith</option>
                  </select>
                  <button className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-hover">Update</button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Timeline</h3>
              <div className="relative pl-4 border-l-2 border-gray-100 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[21px] bg-blue-100 p-1 rounded-full border-4 border-white">
                    <Bike size={14} className="text-blue-600" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Out for Delivery</h4>
                  <p className="text-xs text-gray-500">Oct 2, 2023, 1:25 PM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] bg-gray-100 p-1 rounded-full border-4 border-white">
                    <Utensils size={14} className="text-gray-600" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Preparing Food</h4>
                  <p className="text-xs text-gray-500">Oct 2, 2023, 1:10 PM</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] bg-gray-100 p-1 rounded-full border-4 border-white">
                    <Receipt size={14} className="text-gray-600" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Order Placed</h4>
                  <p className="text-xs text-gray-500">Oct 2, 2023, 1:02 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;