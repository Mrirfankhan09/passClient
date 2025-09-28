import React from "react";

const Settings = () => {
  return (
    <div className="settings">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-lg px-3 py-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border rounded-lg px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Security</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Master PIN</label>
              <input
                type="password"
                className="mt-1 block w-full border rounded-lg px-3 py-2"
                placeholder="Enter new PIN"
              />
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Update PIN
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Preferences</h2>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
