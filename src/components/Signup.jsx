import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { checkPasswordStrength } from '../utils/passwordstrength';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [strength, setStrength] = useState({ label: "", score: 0 });

  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signup(name, email, password);
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  };
  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    try {
      setStrength(checkPasswordStrength(value) || { label: "", score: 0 });
    } catch {
      setStrength({ label: "", score: 0 });
    }
  }
  const getStrengthColor = () => {
    if (strength.score === 3) return "bg-green-500";
    if (strength.score === 2) return "bg-yellow-500";
    if (strength.score === 1) return "bg-red-500";
    return "bg-gray-300";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              value={password}
              onChange={passwordHandler}
              required
            />
            {/* Password strength bar */}
            <div className={`h-2 mt-2 rounded ${getStrengthColor()}`}></div>
            <div className="text-xs mt-1 text-gray-500">{strength.label}</div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;