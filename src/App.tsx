import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import PatientRecords from './components/PatientRecords';
import Medications from './components/Medications';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'appointments':
        return <Appointments />;
      case 'patient-records':
        return <PatientRecords />;
      case 'medications':
        return <Medications />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
      
      {/* AI Assistant Button */}
      <button 
        className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
        aria-label="AI Assistant"
      >
        <Bot className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;