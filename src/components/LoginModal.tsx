import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close Modal"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Log in to <span className="text-green-600">BlockWork</span>
        </h2>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        {/* Continue Button */}
        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
          Continue
        </Button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        {/* Google Login */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center transition">
          <span className="mr-2">
            {/* Google SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M23.494 12.224c0-.762-.068-1.496-.195-2.202H12v4.217h6.559c-.3 1.512-1.171 2.787-2.416 3.65v3.03h3.899c2.284-2.093 3.591-5.172 3.591-8.695z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.944-1.077 7.925-2.903l-3.899-3.03c-1.088.73-2.477 1.165-4.026 1.165-3.095 0-5.718-2.091-6.652-4.901H1.237v3.07C3.218 20.592 7.298 24 12 24z"/>
              <path fill="#FBBC05" d="M5.348 14.331A7.229 7.229 0 0 1 4.83 12c0-.81.139-1.591.382-2.331V6.599H1.237A11.996 11.996 0 0 0 0 12c0 1.971.467 3.841 1.237 5.401l4.111-3.07z"/>
              <path fill="#EA4335" d="M12 4.8c1.777 0 3.369.612 4.624 1.813l3.44-3.44C17.944 1.385 15.24 0 12 0 7.298 0 3.218 3.408 1.237 8.201l4.111 3.07C6.282 8.461 8.905 6.37 12 6.37z"/>
            </svg>
          </span>
          Continue with Google
        </Button>

        {/* Apple Login */}
        <Button className="w-full mt-2 bg-black hover:bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center transition">
          <span className="mr-2">
            {/* Apple SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.365 1.43c-.793.852-2.146 1.514-3.282 1.43-.144-1.28.515-2.561 1.256-3.282C15.188-.215 16.64.259 16.365 1.43ZM19.177 12.193c.051 3.184 2.728 4.25 2.783 4.27-.026.09-.438 1.526-1.438 3.02-.875 1.283-1.791 2.564-3.224 2.59-1.387.026-1.829-.844-3.397-.844s-2.047.816-3.363.87c-1.434.026-2.537-1.396-3.428-2.67-1.863-2.665-3.282-7.536-1.378-10.834C6.534 6.662 8.573 5.467 10.661 5.467c1.369 0 2.645.953 3.363.953.69 0 2.197-1.183 3.72-1.01.632.027 2.407.254 3.523 1.906-.09.064-2.117 1.236-2.09 3.777Z"/>
            </svg>
          </span>
          Continue with Apple
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have a BlockWork account?
        </p>

        <Button className="w-full mt-2 border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-600 hover:text-white transition">
          Sign Up
        </Button>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="mt-4 text-gray-500 dark:text-gray-400 hover:underline block text-center w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
