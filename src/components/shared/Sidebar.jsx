import React, { useContext } from 'react'
import { Home, KeyRound, FileText, Settings, User, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { PasswordContext } from '../../context/Passwordcontext'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = () => {
    const { logout, user } = useContext(AuthContext)
    const navigte = useNavigate();
    const logouthandler =()=>{
        logout();
        navigte('/login');
    }
    console.log(user,'sidebar');
    return (
        <div className="sidebar h-screen w-64 bg-white shadow-md flex flex-col">

            {/* Top Section */}
            <div className="top-section p-6 border-b">
                <div className="logo text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    PassVault
                </div>
            </div>

            {/* Navigation */}
            <nav className="main-navigation flex-1 p-4">
                <ul className="space-y-2">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            <Home size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/passwords"
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            <KeyRound size={20} />
                            <span>Passwords</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/notes"
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            <FileText size={20} />
                            <span>Secure Notes</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/settings"
                            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>
                    </li>

                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="bottom-section p-4 border-t flex items-center justify-between">
                <div className="profile flex items-center gap-2">
                    <User size={20} className="text-gray-600" />
                    <span>Profile</span>
                </div>
                {
                    user ? (
                        <button
                            className="logout flex items-center gap-2 text-red-500 hover:text-red-600"
                            onClick={logouthandler}
                        >
                            <LogOut size={20} /> <span>Logout</span>
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="logout flex items-center gap-2 text-green-500 hover:text-green-600"
                        >
                            <span>Login</span>
                        </Link>
                    )
                }

            </div>

        </div>
    )
}

export default Sidebar;