import React from 'react';
import Header from '../components/Header';

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Support Tickets" />
      <main className="p-8">
        <div className="flex justify-between items-center mb-6">
           <h1 className="text-3xl font-bold text-gray-900">Support Tickets</h1>
           <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow hover:bg-primary-hover">+ Create New Ticket</button>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
           <div className="relative flex-1 min-w-[300px]">
             <input type="text" placeholder="Search by Ticket ID..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-primary focus:border-primary" />
           </div>
           <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium">Status: All</button>
           <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium">Priority: All</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Ticket ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: '#TKT-83472', user: 'Olivia Rhye', cat: 'Payment Issue', pri: 'High', stat: 'Open', date: 'Oct 29, 2023' },
                { id: '#TKT-28910', user: 'Phoenix Baker', cat: 'App Bug', pri: 'Medium', stat: 'In Progress', date: 'Oct 28, 2023' },
                { id: '#TKT-51034', user: 'Lana Steiner', cat: 'Order Issue', pri: 'Low', stat: 'Closed', date: 'Oct 27, 2023' },
              ].map(ticket => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{ticket.id}</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    {ticket.user}
                  </td>
                  <td className="px-6 py-4">{ticket.cat}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      ticket.pri === 'High' ? 'bg-red-100 text-red-700' :
                      ticket.pri === 'Medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>{ticket.pri}</span>
                  </td>
                   <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      ticket.stat === 'Open' ? 'bg-green-100 text-green-700' :
                      ticket.stat === 'Closed' ? 'bg-gray-100 text-gray-700' :
                      'bg-green-50 text-green-600'
                    }`}>{ticket.stat}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Support;