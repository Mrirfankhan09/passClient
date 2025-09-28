import React from "react";

const SecureNotes = () => {
  return (
    <div className="secure-notes">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Secure Notes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Note */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium mb-2">WiFi Passwords</h2>
          <p className="text-gray-600 text-sm mb-3">
            Office WiFi: abcd1234
          </p>
          <div className="flex justify-end gap-2 text-sm">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium mb-2">Bank Notes</h2>
          <p className="text-gray-600 text-sm mb-3">
            Don’t share OTP with anyone.
          </p>
          <div className="flex justify-end gap-2 text-sm">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>

        {/* More notes will be listed here dynamically */}
      </div>
    </div>
  );
};

export default SecureNotes;
