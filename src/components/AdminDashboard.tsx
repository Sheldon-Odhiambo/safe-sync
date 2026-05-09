import { AlertCircle, MapPin, CheckCircle, Clock } from 'lucide-react';
import React from 'react';

export function AdminDashboard() {
  const incidents = [
    { id: 'INC-48293', type: 'Fire Alarm', location: 'Aisle 4, Main Store', time: '14:20', status: 'Active' },
    { id: 'INC-48294', type: 'Medical Emergency', location: 'West Wing, Level 2', time: '14:15', status: 'Pending' },
    { id: 'INC-48291', type: 'Security Breach', location: 'South Gate Entrance', time: '13:45', status: 'Resolved' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
        <div>
            <h2 className="text-xl font-bold">Emergency Response Center</h2>
            <p className="text-gray-500">Real-time surveillance and incident monitoring.</p>
        </div>
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold">12 Active Incidents</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
         <input className="w-full p-3 border rounded mb-4" placeholder="Search by location, incident ID, or personnel..." />
         <div className="space-y-4">
            {incidents.map(inc => (
                <div key={inc.id} className="grid grid-cols-4 items-center border-b pb-4">
                    <div className="font-bold">{inc.type} <span className="block text-xs text-gray-500 font-normal">{inc.id}</span></div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> {inc.location}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> {inc.time}</div>
                    <div className="flex items-center justify-between"><span className={`px-2 py-1 rounded text-xs font-bold ${inc.status === 'Active' ? 'bg-red-100 text-red-700' : inc.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{inc.status.toUpperCase()}</span></div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
}
