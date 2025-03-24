import React from 'react';
import { Calendar, Users, Clock, Bell } from 'lucide-react';

const stats = [
  { label: 'Appointments Today', value: '12', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Total Patients', value: '1,234', icon: Users, color: 'bg-green-500' },
  { label: 'Pending Reviews', value: '8', icon: Clock, color: 'bg-yellow-500' },
  { label: 'Urgent Cases', value: '3', icon: Bell, color: 'bg-red-500' },
];

function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-medium">SJ</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Patient {i + 1}</p>
                  <p className="text-sm text-gray-500">{9 + i}:00 AM - Regular Checkup</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Patients</h3>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-medium">P{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Patient Name {i + 1}</p>
                    <p className="text-sm text-gray-500">Last visit: Today</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;