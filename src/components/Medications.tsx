import React from 'react';
import { PillIcon, Search, AlertCircle } from 'lucide-react';

const medications = [
  {
    patient: 'John Smith',
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', notes: 'Take in the morning' },
      { name: 'Metoprolol', dosage: '25mg', frequency: 'Twice daily', notes: 'Take with food' }
    ]
  },
  {
    patient: 'Sarah Johnson',
    medications: [
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', notes: 'Take with meals' },
      { name: 'Glipizide', dosage: '5mg', frequency: 'Once daily', notes: 'Take before breakfast' }
    ]
  },
  {
    patient: 'Mike Brown',
    medications: [
      { name: 'Albuterol', dosage: '90mcg', frequency: 'As needed', notes: 'Use inhaler for breathing difficulties' },
      { name: 'Fluticasone', dosage: '110mcg', frequency: 'Twice daily', notes: 'Use inhaler morning and night' }
    ]
  }
];

function Medications() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Medications</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search medications..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-6">
        {medications.map((record, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <PillIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{record.patient}</h3>
              </div>
            </div>

            <div className="space-y-4">
              {record.medications.map((medication, medIndex) => (
                <div key={medIndex} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800">{medication.name}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {medication.dosage}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    {medication.frequency}
                  </div>
                  <div className="flex items-start text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />
                    {medication.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medications;