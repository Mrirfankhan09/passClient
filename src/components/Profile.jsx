import React from "react";
import { User, Mail, Shield, LogOut } from "lucide-react";

const Profile = () => {
  return (
    <div className="profile p-6 max-w-md mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          U
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">User Name</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Premium Member</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <User className="w-5 h-5 text-indigo-500" />
          <span>John Doe</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <Mail className="w-5 h-5 text-indigo-500" />
          <span>john.doe@example.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <Shield className="w-5 h-5 text-indigo-500" />
          <span>2FA Enabled</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow">
          Edit Profile
        </button>
        <button className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
