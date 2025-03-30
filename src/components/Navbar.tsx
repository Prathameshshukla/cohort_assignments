import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import SignUpModal from "./SignUpModal";

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center px-6 py-3 shadow-md bg-white dark:bg-gray-900 z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">BLOCKWORK</h1>

        {/* Navigation Links - Positioned to the Left */}
        <nav className="flex-1 ml-10">
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a></li>
            <li><a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Features</a></li>
            <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a></li>
          </ul>
        </nav>

        {/* Buttons - Positioned to the Right */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 dark:text-gray-200 font-medium hover:underline">Log In</button>
          
          <button 
            onClick={() => setShowSignUp(true)} 
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Sign up
          </button>

          <Button onClick={() => setDarkMode(!darkMode)} className="ml-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </header>

      {/* Sign Up Modal */}
      <SignUpModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} />
    </>
  );
}
