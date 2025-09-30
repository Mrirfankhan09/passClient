import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from './AuthContext'
// import axiosInstance from "../utils/axiosInstance";
import axios from "axios";
import { checkPasswordStrength } from "../utils/passwordstrength";
import { AppContext } from "./Appcontext";
// import { useNavigate } from "react-router-dom";
// 1. Create context
export const PasswordContext = createContext();

// 2. Create provider
export const PasswordProvider = ({ children }) => {
  // const navigate = useNavigate();
 const {passwords,setPasswords} = useContext(AppContext)
  const { user } = useContext(AuthContext);

  // console.log("Auth Token in PasswordContext:", user);


  const fetchPasswords = async () => {
    console.log("Fetching passwords with token:", user);
    // if (!user) {
    //   setPasswords([]);
    //   return;
    // }
    try {
      const res = await axios.get("http://localhost:5000/api/passwords", { withCredentials: true });
      console.log("Fetched Passwords:", res.data);
      setPasswords(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    fetchPasswords();


  }, [user]);


  // Add new password
  const addPassword = async (newPassword) => {
    const res = await axios.post("http://localhost:5000/api/passwords/add", newPassword, { withCredentials: true });
    setPasswords((prev) => [...prev, newPassword]);
    fetchPasswords();
  };

  // Delete password
  const deletePassword = async (id) => {
    console.log("Deleting password with id:", id);
    const res = await axios.delete(`http://localhost:5000/api/passwords/${id}`, { withCredentials: true });
    console.log("Delete response:", res.data);
    fetchPasswords();

    setPasswords((prev) => prev.filter((p) => p.id !== id));
  };

  // Update password
  const updatePassword = async (id, updatedData) => {
    const res = await axios.put(`http://localhost:5000/api/passwords/${id}`, updatedData, { withCredentials: true });
    console.log("Update response:", res.data);
    fetchPasswords();
    setPasswords((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
    );
    fetchPasswords();
  };


  return (
    <PasswordContext.Provider
      value={{ passwords, addPassword, deletePassword, updatePassword }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
