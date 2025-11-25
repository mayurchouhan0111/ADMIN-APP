import React from 'react';
import Header from '../components/Header';
import { Camera, Plus, Edit2, Trash2, Key, Copy, AlertTriangle } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Settings" />
      <div className="p-8 space-y-8">
        
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Admin Profile</h3>
            <p className="text-sm text-gray-500">Update your profile details and password.</p>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <img src="https://picsum.photos/100/100" alt="Avatar" className="w-24 h-24 rounded-full object-cover" />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full border-2 border-white hover:bg-primary-hover">
                    <Camera size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 w-full">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" defaultValue="admin@zomato.com" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 flex justify-end">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover shadow-sm">Save Changes</button>
          </div>
        </div>

        {/* Roles & Permissions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Roles & Permissions</h3>
              <p className="text-sm text-gray-500">Manage user roles and access.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5">
              <Plus size={16} /> Add Role
            </button>
          </div>
          <div className="p-0">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-3">Role Name</th>
                  <th className="px-6 py-3">Permissions</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 font-medium">Admin</td>
                  <td className="px-6 py-4 text-gray-500">Full access to all system features.</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-500"><Edit2 size={16} /></button>
                  </td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 font-medium">Manager</td>
                  <td className="px-6 py-4 text-gray-500">Can manage restaurants and orders.</td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-500"><Edit2 size={16} /></button>
                    <button className="p-1 hover:bg-red-50 rounded text-red-500"><Trash2 size={16} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* API Keys */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
             <h3 className="text-lg font-bold text-gray-900">API Keys</h3>
          </div>
          <div className="divide-y divide-gray-100">
             <div className="p-6 flex items-center justify-between">
                <div>
                   <p className="font-medium text-gray-900">Mobile App Key</p>
                   <p className="text-xs text-gray-500 font-mono mt-1">zm_live_••••••••••••c4d3</p>
                </div>
                <div className="flex gap-2">
                   <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded text-xs font-medium hover:bg-gray-50">
                     <Copy size={14} /> Copy
                   </button>
                   <button className="flex items-center gap-1 px-3 py-1.5 border border-red-200 text-red-600 rounded text-xs font-medium hover:bg-red-50">
                     <AlertTriangle size={14} /> Revoke
                   </button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;