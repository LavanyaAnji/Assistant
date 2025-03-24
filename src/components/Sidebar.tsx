import React from 'react';
import { Home, Calendar, FileText, PillIcon, Settings } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'appointments', icon: Calendar, label: 'Appointments' },
  { id: 'patient-records', icon: FileText, label: 'Patient Records' },
  { id: 'medications', icon: PillIcon, label: 'Medications' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

function Sidebar({ onPageChange, currentPage }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">MedAssist</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center px-6 py-3 transition-colors duration-200 ${
              currentPage === item.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;