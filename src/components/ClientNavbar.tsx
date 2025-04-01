import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, Bell, User } from "lucide-react";
import wolfIcon from "../assets/wolf_favicon.ico"; // Import your icon

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
}

const ClientNavbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onLogout }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      {/* Primary Navbar */}
      <nav className={`p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Left Section: Logo & Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Logo with Clickable Title to Navigate Back */}
            <button onClick={() => navigate("/")} className="flex items-center space-x-2 focus:outline-none">
              <img src={wolfIcon} alt="Wolf Icon" className="w-8 h-8" />
              <h1 className="text-2xl font-bold hover:opacity-80 transition">BLOCKWORK</h1>
            </button>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder="Search Freelancers, Jobs..."
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Section: Notifications, Dark Mode Toggle, User Profile, Logout */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="p-2 relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="p-2 flex items-center space-x-2">
                <User size={24} />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded hidden group-hover:block">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className={`p-3 shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
        <div className="container mx-auto flex justify-center space-x-6">
          <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
          <Link to="/hire" className="hover:text-blue-500">Hire</Link>
          <Link to="/manage" className="hover:text-blue-500">Manage</Link>
          <Link to="/payments" className="hover:text-blue-500">Payments</Link>
        </div>
      </nav>
    </div>
  );
};

export default ClientNavbar;
