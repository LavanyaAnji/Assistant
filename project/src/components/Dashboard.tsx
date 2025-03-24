import React, { useState } from 'react';
import { User, Pill, Calendar, Settings, FolderOpen, Menu, X, Plus, ChevronLeft, Edit } from 'lucide-react';
import { Patient, mockPatients, medicationTemplates, appointments } from '../data/mockData';

interface DashboardProps {
  username: string;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  userData: {
    email: string;
    password: string;
    username: string;
  } | null;
  setUserData: (userData: { email: string; password: string; username: string; } | null) => void;
}

export function Dashboard({ username, isDarkMode, setIsDarkMode, userData, setUserData }: DashboardProps) {
  const [activeSection, setActiveSection] = useState('patients');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isAddingPatient, setIsAddingPatient] = useState(false);
  const [showProfileEditor, setShowProfileEditor] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    username: userData?.username || '',
    email: userData?.email || '',
    specialization: '',
    phoneNumber: '',
    address: ''
  });
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
    name: '',
    age: 0,
    condition: '',
    medications: []
  });

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.condition) {
      const patient: Patient = {
        id: (mockPatients.length + 1).toString(),
        name: newPatient.name,
        age: newPatient.age,
        condition: newPatient.condition,
        medications: newPatient.medications || []
      };
      mockPatients.push(patient);
      setIsAddingPatient(false);
      setNewPatient({ name: '', age: 0, condition: '', medications: [] });
    }
  };

  const handleProfileUpdate = () => {
    if (userData) {
      setUserData({
        ...userData,
        username: editedProfile.username,
        email: editedProfile.email
      });
      setShowProfileEditor(false);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'patients':
        if (selectedPatient) {
          return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <button
                onClick={() => setSelectedPatient(null)}
                className="flex items-center text-indigo-600 dark:text-indigo-400 mb-4"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Patient List
              </button>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedPatient.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">Age: {selectedPatient.age}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Medical Condition
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedPatient.condition}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Current Medications
                  </h3>
                  <ul className="space-y-2">
                    {selectedPatient.medications.map((med, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <Pill className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
                        {med}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Upcoming Appointments
                  </h3>
                  <div className="space-y-2">
                    {appointments
                      .filter((apt) => apt.patientName === selectedPatient.name)
                      .map((apt) => (
                        <div
                          key={apt.id}
                          className="border dark:border-gray-700 rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-800 dark:text-gray-200">
                                {apt.type}
                              </p>
                              <p className="text-gray-600 dark:text-gray-400">{apt.notes}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-indigo-600 dark:text-indigo-400">{apt.date}</p>
                              <p className="text-gray-500 dark:text-gray-500">{apt.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (isAddingPatient) {
          return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <button
                onClick={() => setIsAddingPatient(false)}
                className="flex items-center text-indigo-600 dark:text-indigo-400 mb-4"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Patient List
              </button>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Add New Patient
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    value={newPatient.age}
                    onChange={(e) =>
                      setNewPatient({ ...newPatient, age: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Medical Condition
                  </label>
                  <input
                    type="text"
                    value={newPatient.condition}
                    onChange={(e) => setNewPatient({ ...newPatient, condition: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Medications (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newPatient.medications?.join(', ')}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        medications: e.target.value.split(',').map((m) => m.trim()),
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button
                  onClick={handleAddPatient}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  Add Patient
                </button>
              </div>
            </div>
          );
        }

        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Patient Records</h2>
              <button
                onClick={() => setIsAddingPatient(true)}
                className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                <Plus className="h-5 w-5 mr-1" />
                Add Patient
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockPatients.map((patient: Patient) => (
                <div
                  key={patient.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition duration-200"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {patient.name}
                    </h2>
                    <span className="text-gray-500 dark:text-gray-400">Age: {patient.age}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Condition: {patient.condition}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Pill className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        Medications:
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {patient.medications.map((med, index) => (
                        <li key={index}>{med}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {appointment.patientName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{appointment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {appointment.date}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">{appointment.time}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{appointment.notes}</p>
              </div>
            ))}
          </div>
        );

      case 'medications':
        return (
          <div className="space-y-6">
            {medicationTemplates.map((template, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {template.condition}
                </h3>
                <div className="space-y-2">
                  {template.medications.map((medication, medIndex) => (
                    <div
                      key={medIndex}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <Pill className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{medication}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'settings':
        if (showProfileEditor) {
          return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Edit Profile
                </h3>
                <button
                  onClick={() => setShowProfileEditor(false)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={editedProfile.username}
                    onChange={(e) => setEditedProfile({ ...editedProfile, username: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Specialization
                  </label>
                  <input
                    type="text"
                    value={editedProfile.specialization}
                    onChange={(e) => setEditedProfile({ ...editedProfile, specialization: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="e.g., Cardiologist"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={editedProfile.phoneNumber}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phoneNumber: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Address
                  </label>
                  <textarea
                    value={editedProfile.address}
                    onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    rows={3}
                    placeholder="Enter your clinic/hospital address"
                  />
                </div>
                <button
                  onClick={handleProfileUpdate}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                  Save Changes
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Account Settings
              </h3>
              <button
                onClick={() => setShowProfileEditor(true)}
                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
              >
                <Edit className="h-5 w-5 mr-1" />
                Edit Profile
              </button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Notifications
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-indigo-600 dark:text-indigo-400"
                    defaultChecked
                  />
                  <span className="text-gray-600 dark:text-gray-300">
                    Receive appointment reminders
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-indigo-600 dark:text-indigo-400"
                    defaultChecked
                  />
                  <span className="text-gray-600 dark:text-gray-300">
                    Receive patient updates
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Theme Preferences
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  value={isDarkMode ? 'dark' : 'light'}
                  onChange={(e) => setIsDarkMode(e.target.value === 'dark')}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="md:hidden mr-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Healthcare Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowProfileEditor(true)}
              className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
            >
              <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-800 dark:text-white font-medium">{username}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <nav
            className={`md:w-64 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <ul className="space-y-2">
                <li>
                  
                  <button
                    onClick={() => setActiveSection('patients')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                      activeSection === 'patients'
                        ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <FolderOpen className="h-5 w-5" />
                    <span>Patient Records</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('appointments')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                      activeSection === 'appointments'
                        ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Appointments</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('medications')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                      activeSection === 'medications'
                        ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Pill className="h-5 w-5" />
                    <span>Medications</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('settings')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                      activeSection === 'settings'
                        ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}