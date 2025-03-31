import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: "client" | "freelancer") => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
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
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close Modal"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Log in to <span className="text-green-600">BlockWork</span>
        </h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <div className="flex gap-4 mt-4">
          <Button 
            onClick={() => onLogin("client")}
            className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
          >
            Login as Client
          </Button>
          <Button 
            onClick={() => onLogin("freelancer")}
            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Login as Freelancer
          </Button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
          <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-700" />
        </div>

        <Button className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center transition">
          Sign Up
        </Button>

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
