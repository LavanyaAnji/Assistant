import React from 'react';
import { Search, User } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'John Smith',
    age: 45,
    lastVisit: '2024-03-10',
    condition: 'Hypertension',
    status: 'Stable'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    age: 32,
    lastVisit: '2024-03-12',
    condition: 'Diabetes Type 2',
    status: 'Under Control'
  },
  {
    id: 3,
    name: 'Mike Brown',
    age: 28,
    lastVisit: '2024-03-15',
    condition: 'Asthma',
    status: 'Improving'
  },
  {
    id: 4,
    name: 'Emily Davis',
    age: 52,
    lastVisit: '2024-03-16',
    condition: 'Arthritis',
    status: 'Stable'
  },
  {
    id: 5,
    name: 'David Wilson',
    age: 39,
    lastVisit: '2024-03-18',
    condition: 'Anxiety',
    status: 'Under Treatment'
  }
];

function PatientRecords() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Records</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-100 bg-gray-50 font-medium text-gray-600">
          <div>Patient</div>
          <div>Age</div>
          <div>Last Visit</div>
          <div className="col-span-2">Condition</div>
          <div>Status</div>
        </div>

        {patients.map((patient) => (
          <div key={patient.id} className="grid grid-cols-6 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-800">{patient.name}</span>
            </div>
            <div className="flex items-center">{patient.age}</div>
            <div className="flex items-center">{patient.lastVisit}</div>
            <div className="col-span-2 flex items-center">{patient.condition}</div>
            <div className="flex items-center">
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                {patient.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientRecords;