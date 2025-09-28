import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import Topbar from './components/shared/Topbar';
import Dashboard from './components/Dashboard';
import Passwords from './components/Passwords';
import SecureNotes from './components/SecureNotes';
import Settings from './components/Settings'
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import AddPassword from './components/Addpassword';
import { AppContext } from './context/Appcontext';
import { useContext } from 'react';
import SecurityCheckup from './components/SecurityCheckup';

function App() {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <Router>
      <div className="app-layout flex h-screen">
        {/* Sidebar */}
        {
          isOpen && <Sidebar />
        }
        {/* <Sidebar /> */}

        {/* Main Section */}
        <div className="main flex-1 flex flex-col">
          <Topbar />

          {/* Page Content */}
          <div className="content flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/passwords" element={<Passwords />} />
              <Route path="/notes" element={<SecureNotes />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/addpassword' element={<AddPassword />} />
              <Route path='/securitycheckup' element={<SecurityCheckup/>} /> 
            
              <Route path="*" element={<h2 className="text-2xl font-bold">404 - Page Not Found</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
