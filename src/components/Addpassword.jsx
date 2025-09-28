import { useContext, useState } from "react";
import { PasswordContext } from "../context/Passwordcontext";
import React from "react";
export default function AddPassword() {
  const {addPassword} =useContext(PasswordContext);
  const [form, setForm] = useState({
    title: "",
    usernameOrEmail: "",
    Password: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password saved:", form);
    // 🔒 TODO: Send to backend (API call)
    
    addPassword(form);
    setForm({ title: "", usernameOrEmail: "", Password: "",category:"" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add New Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Site Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website / App
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. github.com"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username / Email
            </label>
            <input
              type="text"
              name="usernameOrEmail"
              value={form.usernameOrEmail}
              onChange={handleChange}
              placeholder="e.g. johndoe@email.com"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="text"
              name="Password"
              value={form.Password}
              onChange={handleChange}
              placeholder="Enter password"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
}
