import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '../components/Header';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', orders: 400 },
  { name: 'Tue', orders: 300 },
  { name: 'Wed', orders: 550 },
  { name: 'Thu', orders: 450 },
  { name: 'Fri', orders: 650 },
  { name: 'Sat', orders: 800 },
  { name: 'Sun', orders: 750 },
];

const pieData = [
  { name: 'Delivery', value: 75 },
  { name: 'Takeaway', value: 25 },
];

const COLORS = ['#e23645', '#faaeb4'];

const StatCard = ({ title, value, change, isPositive }: { title: string, value: string, change: string, isPositive: boolean }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
    <p className="text-sm font-medium text-gray-500 mb-2">{title}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <div className={`flex items-center text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Dashboard" />
      <main className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Orders" value="12,450" change="2.5%" isPositive={true} />
          <StatCard title="Total Revenue" value="$85,320" change="5.1%" isPositive={true} />
          <StatCard title="Active Restaurants" value="350" change="1.2%" isPositive={true} />
          <StatCard title="Active Delivery Partners" value="820" change="-3.4%" isPositive={false} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Daily Orders Trend</h3>
                <p className="text-sm text-gray-500">Last 7 Days</p>
              </div>
              <div className="flex items-baseline gap-2">
                 <span className="text-2xl font-bold text-gray-800">1,280</span>
                 <span className="text-sm font-medium text-green-600">+15.2%</span>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e23645" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#e23645" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="orders" stroke="#e23645" strokeWidth={3} fillOpacity={1} fill="url(#colorOrders)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2 w-full text-left">Order Breakdown</h3>
            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-gray-800">75%</span>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-primary"></div>
                 <span className="text-sm text-gray-600">Delivery</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#faaeb4]"></div>
                 <span className="text-sm text-gray-600">Takeaway</span>
               </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table Preview */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
            <button className="text-sm font-medium text-primary hover:text-red-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Restaurant</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: '#12045', customer: 'John Doe', rest: 'The Pizza Place', amt: '$25.50', status: 'Delivered', date: '2023-10-27' },
                  { id: '#12044', customer: 'Jane Smith', rest: 'Burger Hub', amt: '$15.75', status: 'Pending', date: '2023-10-27' },
                  { id: '#12043', customer: 'Mike Johnson', rest: 'Sushi World', amt: '$42.00', status: 'Delivered', date: '2023-10-27' },
                  { id: '#12042', customer: 'Emily Williams', rest: 'Taco Town', amt: '$18.90', status: 'Cancelled', date: '2023-10-27' },
                ].map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4 text-gray-600">{order.rest}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{order.amt}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;