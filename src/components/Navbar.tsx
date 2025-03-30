import React, { useState } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import SignUpModal from "./SignUpModal";
import wolfIcon from "../assets/wolf_favicon.ico"; // Import the wolf icon

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onLoginClick, onSignUpClick }: NavbarProps) {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center px-6 py-3 shadow-md bg-white dark:bg-gray-900 z-50">
        {/* Logo + Project Name */}
        <div className="flex items-center space-x-2">
          <img src={wolfIcon} alt="Wolf Icon" className="w-8 h-8" /> {/* Icon added here */}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">BLOCKWORK</h1>
        </div>

        <nav className="flex-1 ml-10">
          <ul className="flex space-x-6 relative">
            <li 
              className="relative cursor-pointer"
              onMouseEnter={() => setShowFeaturesDropdown(true)}
              onMouseLeave={() => setShowFeaturesDropdown(false)}
            >
              <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                Features <ChevronDown size={16} className="ml-1" />
              </div>
              
              {showFeaturesDropdown && (
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md">
                  <li><a href="#post-job" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Post Job</a></li>
                  <li><a href="#browse-jobs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Jobs</a></li>
                  <li><a href="#browse-freelancers" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Freelancers</a></li>
                </ul>
              )}
            </li>

            <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a></li>
            <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-gray-700 dark:text-gray-200 font-medium hover:underline" onClick={onLoginClick}>
            Log In
          </button>
          
          <button 
            onClick={onSignUpClick} 
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Sign up
          </button>

          <Button onClick={() => setDarkMode(!darkMode)} className="ml-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </header>
    </>
  );
}
