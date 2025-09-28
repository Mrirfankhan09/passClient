// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   const signup = async (name, email, password) => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
//       setUser(res.data.user);
//       setToken(res.data.token);
//       localStorage.setItem("token", res.data.token);
//     } catch (error) {
//       console.error("Signup failed:", error);
//       throw error;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//       setUser(res.data.user);
//       setToken(res.data.token);
//       localStorage.setItem("token", res.data.token);
//     } catch (error) {
//       console.error("Login failed:", error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState(new Date());

    const activity = async () => {
        const response = await axios.get("http://localhost:5000/api/activity", { withCredentials: true });

        setTime(new Date(response.data[0].timestamp));
        setActivities(response.data);

    }
    useEffect(() => {
        activity();
    }, []);


    return (
        <AppContext.Provider value={{time,activities, isOpen, setIsOpen }}>
            {children}
        </AppContext.Provider>
    )
};



