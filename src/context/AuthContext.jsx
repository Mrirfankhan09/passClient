import React, { createContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
// If you use js-cookie, import it: import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Signup: set token from response if backend returns it
  const signup = async (name, email, password) => {
    const res = await axios.post("/api/auth/signup", { name, email, password });
    if (res.data.user) setUser(res.data.user);
  };

  // Login: set token from response if backend returns it
  const login = async (email, password) => {
    const res = await axios.post("/api/auth/login", { email, password });
    if (res.data.user) setUser(res.data.user);
  };

  // Logout: clear token
  const logout = async () => {
    await axios.get("/api/auth/logout");
    setUser(null);
  };

  // On mount, check if token exists in cookie (for httpOnly cookies, you need a backend endpoint to verify)
  useEffect(() => {
    // If token is stored in localStorage:
    // const storedToken = localStorage.getItem("token");
    // setToken(storedToken);

    // If token is in cookie and accessible:
    // import Cookies from "js-cookie";
    // const cookieToken = Cookies.get("token");
    // setToken(cookieToken || null);

    // If using httpOnly cookie, call backend to check login status:
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth/me", { withCredentials: true });
        console.log("Auth check response:", res.data);
        if (res.data.user) setUser(res.data.user);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};