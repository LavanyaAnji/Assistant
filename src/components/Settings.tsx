import React, { useState } from 'react';
import { Moon, Sun, Bell, Lock, User, Globe } from 'lucide-react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {darkMode ? <Moon className="w-5 h-5 mr-3" /> : <Sun className="w-5 h-5 mr-3" />}
              <h3 className="text-lg font-semibold">Appearance</h3>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                darkMode ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-gray-600">Toggle between light and dark mode</p>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-5 h-5 mr-3" />
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email Notifications</span>
              <input type="checkbox" className="rounded text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Push Notifications</span>
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">SMS Notifications</span>
              <input type="checkbox" className="rounded text-blue-600" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <Lock className="w-5 h-5 mr-3" />
            <h3 className="text-lg font-semibold">Security</h3>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">
              Two-Factor Authentication
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100">
              Login History
            </button>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <User className="w-5 h-5 mr-3" />
            <h3 className="text-lg font-semibold">Profile</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-2 border border-gray-200 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 border border-gray-200 rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <Globe className="w-5 h-5 mr-3" />
            <h3 className="text-lg font-semibold">Language</h3>
          </div>
          <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings;