import React, { useState } from 'react';
import Header from '../components/Header';
import { Plus, Edit2, Trash2, CloudUpload, X } from 'lucide-react';
import { MenuItem } from '../types';

const initialItems: MenuItem[] = [
  { id: '1', name: 'Margherita Pizza', category: 'Pizza', price: 12.99, available: true, image: 'https://picsum.photos/100' },
  { id: '2', name: 'Caesar Salad', category: 'Salads', price: 8.50, available: true, image: 'https://picsum.photos/101' },
  { id: '3', name: 'Spaghetti Carbonara', category: 'Pasta', price: 15.00, available: false, image: 'https://picsum.photos/102' },
  { id: '4', name: 'Classic Beef Burger', category: 'Burgers', price: 10.75, available: true, image: 'https://picsum.photos/103' },
];

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  const toggleAvailability = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, available: !item.available } : item));
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header title="Menu & Items" />
      <main className="p-8">
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors"
          >
            <Plus size={20} />
            Add New Item
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4">Item Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-center">Availability</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                        <span className="font-semibold text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => toggleAvailability(item.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${item.available ? 'bg-primary' : 'bg-gray-200'}`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.available ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg hover:text-primary"><Edit2 size={18} /></button>
                        <button className="p-2 text-gray-500 hover:bg-red-50 rounded-lg hover:text-primary"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
             <span>Showing 1 to 4 of 100 entries</span>
             <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">{'<'}</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">{'>'}</button>
             </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Add New Menu Item</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-full"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" placeholder="e.g. Margherita Pizza" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} placeholder="Describe the item..." className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary">
                    <option>Select...</option>
                    <option>Pizza</option>
                    <option>Burgers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input type="number" placeholder="0.00" className="w-full rounded-lg border-gray-200 bg-gray-50 text-sm focus:ring-primary focus:border-primary" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Food Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors">
                  <CloudUpload size={32} className="mb-2" />
                  <p className="text-sm"><span className="font-semibold text-primary">Click to upload</span> or drag and drop</p>
                  <p className="text-xs mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 flex justify-end gap-2 bg-gray-50">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg">Cancel</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg shadow-sm">Save Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;