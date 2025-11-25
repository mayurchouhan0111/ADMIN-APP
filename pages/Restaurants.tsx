import React from 'react';
import Header from '../components/Header';
import { Plus, Eye, Edit, MoreVertical, Star } from 'lucide-react';
import { Restaurant } from '../types';

const restaurantsData: Restaurant[] = [
  { id: '1', name: 'The Golden Spoon', owner: 'John Doe', category: 'Italian', rating: 4.5, status: 'Active', image: 'https://picsum.photos/200' },
  { id: '2', name: 'Taco Town', owner: 'Jane Smith', category: 'Mexican', rating: 4.2, status: 'Pending', image: 'https://picsum.photos/201' },
  { id: '3', name: 'Wok & Roll', owner: 'Sam Wilson', category: 'Chinese', rating: 3.9, status: 'Blocked', image: 'https://picsum.photos/202' },
  { id: '4', name: 'Curry House', owner: 'Chris Green', category: 'Indian', rating: 4.1, status: 'Active', image: 'https://picsum.photos/203' },
];

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Restaurants Management" />
      <main className="p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Status: All</button>
             <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Category: All</button>
             <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Sort by: Name</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover shadow-sm">
            <Plus size={18} />
            Add New Restaurant
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                <tr>
                  <th className="px-6 py-4">Restaurant</th>
                  <th className="px-6 py-4">Owner</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {restaurantsData.map((rest) => (
                  <tr key={rest.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={rest.image} alt={rest.name} className="w-10 h-10 rounded-lg object-cover" />
                        <span className="font-semibold text-gray-900">{rest.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{rest.owner}</td>
                    <td className="px-6 py-4 text-gray-600">{rest.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-medium text-gray-700">{rest.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        rest.status === 'Active' ? 'bg-green-100 text-green-800' :
                        rest.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {rest.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <button className="p-1 hover:text-primary hover:bg-gray-100 rounded"><Eye size={18} /></button>
                        <button className="p-1 hover:text-primary hover:bg-gray-100 rounded"><Edit size={18} /></button>
                        <button className="p-1 hover:text-primary hover:bg-gray-100 rounded"><MoreVertical size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-500">Showing 1 to 4 of 97 results</span>
            <div className="flex gap-1">
               <button className="px-3 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-sm">Prev</button>
               <button className="px-3 py-1 bg-primary/10 text-primary border border-primary/10 rounded text-sm font-medium">1</button>
               <button className="px-3 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-sm">2</button>
               <button className="px-3 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 text-sm">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurants;