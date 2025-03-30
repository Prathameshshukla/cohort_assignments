import React, { useEffect } from "react";

export default function SignUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content */}
      <div
        className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-[450px] sm:w-[500px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-2xl font-semibold text-center">Join as a Client or Freelancer</h2>

        {/* Sign-Up Options */}
        <div className="flex gap-6 justify-center mt-6">
          <div className="border rounded-lg p-6 flex flex-col items-center w-1/2 cursor-pointer hover:shadow-md">
            <span className="text-xl">👤</span>
            <p className="mt-2 text-center">I’m a client, hiring for a project</p>
          </div>
          <div className="border rounded-lg p-6 flex flex-col items-center w-1/2 cursor-pointer hover:shadow-md">
            <span className="text-xl">💼</span>
            <p className="mt-2 text-center">I’m a freelancer, looking for work</p>
          </div>
        </div>

        {/* Create Account Button */}
        <button className="mt-6 w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed">
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <span className="text-green-600 cursor-pointer">Log In</span>
        </p>
      </div>
    </div>
  );
}
