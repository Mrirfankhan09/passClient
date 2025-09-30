import React, { useState, useContext } from "react";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { PasswordContext } from "../context/Passwordcontext";
import axios from "axios";
import { checkPasswordStrength } from "../utils/passwordstrength";

const getStrengthColor = (score) => {
  if (score === 3) return "bg-green-500";
  if (score === 2) return "bg-yellow-500";
  if (score === 1) return "bg-red-500";
  return "bg-gray-300";
};

const Passwords = () => {
  const { passwords, updatePassword, deletePassword } = useContext(PasswordContext);
  const [editingPassword, setEditingPassword] = useState(null);
  const [visibleIds, setVisibleIds] = useState([]); // Track which passwords are visible
  const [decryptedPasswords, setDecryptedPasswords] = useState({}); // Store decrypted passwords

  // Toggle password visibility for a specific row
  const toggleVisibility = async (id) => {
    if (!visibleIds.includes(id)) {
      // Always fetch decrypted password when showing
      try {
        const res = await axios.get(`https://passserver.onrender.com/api/passwords/decrypt/${id}`, { withCredentials: true });
        console.log(res)
        setDecryptedPasswords((prev) => ({ ...prev, [id]: res.data.password }));
      } catch (err) {
        setDecryptedPasswords((prev) => ({ ...prev, [id]: "Error" }));
      }
      setVisibleIds((prev) => [...prev, id]);
    } else {
      // Hide password and clear decrypted value
      setVisibleIds((prev) => prev.filter((vid) => vid !== id));
      setDecryptedPasswords((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  // Handler for submitting the edit form
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updatePassword(editingPassword._id, editingPassword);
    setEditingPassword(null);
  };




  return (
    <div className="passwords p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Passwords</h1>
        <Link
          to="/addpassword"
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          <Plus size={18} /> Add Password
        </Link>
      </div>

      {/* Password List (Table) */}
      <div className="password-list bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Website</th>
              <th className="p-3">Username</th>
              <th className="p-3">Password</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((password) => {
              const pwdValue = visibleIds.includes(password._id)
                ? decryptedPasswords[password._id]
                : "";

              const strength = pwdValue
                ? checkPasswordStrength(pwdValue)
                : { label: "", score: 0 };

              return (
                <tr className="border-b hover:bg-gray-50" key={password._id}>
                  <td className="p-3">{password.title}</td>
                  <td className="p-3">{password.usernameOrEmail}</td>
                  <td className="p-3 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {visibleIds.includes(password._id)
                        ? decryptedPasswords[password._id] || "Loading..."
                        : "••••••••"}
                      <button
                        type="button"
                        onClick={() => toggleVisibility(password._id)}
                        className="focus:outline-none"
                      >
                        {visibleIds.includes(password._id) ? (
                          <EyeOff size={16} className="text-gray-500 hover:text-gray-700" />
                        ) : (
                          <Eye size={16} className="text-gray-500 hover:text-gray-700" />
                        )}
                      </button>
                    </div>
                    {/* Strength bar and label */}
                    {visibleIds.includes(password._id) && (
                      <>
                        <div className={`h-2 rounded ${getStrengthColor(strength.score)}`}></div>
                        <div className="text-xs text-gray-500">{strength.label}</div>
                      </>
                    )}
                  </td>
                  <td className="p-3 text-right space-x-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => setEditingPassword(password)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deletePassword(password._id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit Password Form */}
      {editingPassword && (
        <form
          className="mt-6 bg-white p-4 rounded-xl shadow space-y-4"
          onSubmit={handleEditSubmit}
        >
          <input
            type="text"
            value={editingPassword.title}
            onChange={e => setEditingPassword({ ...editingPassword, title: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Website"
          />
          <input
            type="text"
            value={editingPassword.usernameOrEmail}
            onChange={e => setEditingPassword({ ...editingPassword, usernameOrEmail: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Username or Email"
          />
          <input
            type="text"
            value={editingPassword.password}
            onChange={e => setEditingPassword({ ...editingPassword, password: e.target.value })}
            className="w-full border rounded px-3 py-2"
            placeholder="Password"
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 rounded bg-gray-200"
            onClick={() => setEditingPassword(null)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Passwords;