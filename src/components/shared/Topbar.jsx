import React from 'react'
import { Menu, Bell, User } from 'lucide-react'
import { AppContext } from '../../context/Appcontext';
import { useContext } from 'react';
const Topbar = () => {
    const {isOpen, setIsOpen} = useContext(AppContext);
    

    return (
        <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">

            {/* Left Section */}
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={24} className="text-gray-700" />
                </button>
                {/* <div className="logo text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    PassVault
                </div> */}
            </div>

            {/* Center Section */}
            <div className="flex-1 flex justify-center">
                <input
                    type="text"
                    placeholder="Search passwords..."
                    className="w-1/2 max-w-lg px-4 py-2 rounded-full bg-gray-100 border border-transparent
                               focus:outline-none focus:ring-2 focus:ring-indigo-500
                               placeholder-gray-500 text-gray-700"
                />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-5">
                <button className="relative p-2 rounded-full hover:bg-gray-100 transition transform hover:scale-110">
                    <Bell size={22} className="text-gray-600" />
                    {/* Notification dot */}
                    <span className="absolute top-1 right-1 block w-2 h-2 rounded-full bg-red-500"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition transform hover:scale-110">
                    <User size={22} className="text-gray-600" />
                </button>
            </div>

        </div>
    )
}

export default Topbar
