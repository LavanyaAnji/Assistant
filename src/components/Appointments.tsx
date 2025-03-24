import React from 'react';
import { Clock } from 'lucide-react';

const schedules = {
  morning: [
    { time: '09:00 AM', patient: 'John Smith', reason: 'Regular Checkup' },
    { time: '10:00 AM', patient: 'Sarah Johnson', reason: 'Follow-up' },
    { time: '11:00 AM', patient: 'Mike Brown', reason: 'Consultation' },
  ],
  noon: [
    { time: '12:00 PM', patient: 'Emily Davis', reason: 'Blood Test Results' },
    { time: '01:00 PM', patient: 'David Wilson', reason: 'Vaccination' },
    { time: '02:00 PM', patient: 'Lisa Anderson', reason: 'Regular Checkup' },
  ],
  evening: [
    { time: '04:00 PM', patient: 'Robert Taylor', reason: 'Follow-up' },
    { time: '05:00 PM', patient: 'Jennifer Martin', reason: 'Consultation' },
    { time: '06:00 PM', patient: 'William Lee', reason: 'Regular Checkup' },
  ],
};

function Appointments() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(schedules).map(([period, appointments]) => (
          <div key={period} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800 capitalize">{period}</h3>
            </div>
            
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-blue-600">{appointment.time}</span>
                    <span className="text-sm text-gray-500">{appointment.reason}</span>
                  </div>
                  <p className="text-gray-800">{appointment.patient}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;