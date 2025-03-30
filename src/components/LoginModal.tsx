import React, { useState } from "react";
import { Button } from "../components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div 
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Log in to BlockWork</h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-4 p-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800"
        />

        <Button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg">Continue</Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <Button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
          <img src="/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>

        <Button className="w-full mt-2 bg-black text-white py-2 rounded-lg flex items-center justify-center">
          <img src="/apple-logo.png" alt="Apple" className="w-5 h-5 mr-2" />
          Continue with Apple
        </Button>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have a BlockWork account?
        </p>

        <Button className="w-full mt-2 border border-green-600 text-green-600 py-2 rounded-lg">Sign Up</Button>

        <button onClick={onClose} className="mt-4 text-gray-500 hover:underline block text-center w-full">
          Close
        </button>
      </div>
    </div>
  );
}
