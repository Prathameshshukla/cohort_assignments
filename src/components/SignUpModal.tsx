import React, { useState } from "react";
import Modal from "./Modal"; // Import custom modal
import { Button } from "./ui/button";
import { Briefcase, Laptop } from "lucide-react";

export default function SignUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-center">Join as a client or freelancer</h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div
          className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center ${
            selectedRole === "client" ? "border-blue-600 bg-blue-50" : "border-gray-300"
          }`}
          onClick={() => setSelectedRole("client")}
        >
          <Briefcase size={24} />
          <p className="text-center mt-2">I’m a client, hiring for a project</p>
        </div>

        <div
          className={`p-4 border rounded-lg cursor-pointer flex flex-col items-center ${
            selectedRole === "freelancer" ? "border-blue-600 bg-blue-50" : "border-gray-300"
          }`}
          onClick={() => setSelectedRole("freelancer")}
        >
          <Laptop size={24} />
          <p className="text-center mt-2">I’m a freelancer, looking for work</p>
        </div>
      </div>

      <Button
        className="w-full mt-6 bg-blue-600 text-white rounded-lg"
        disabled={!selectedRole}
        onClick={() => alert(`Signed up as: ${selectedRole}`)}
      >
        Create Account
      </Button>

      <p className="text-center text-sm mt-4">
        Already have an account? <a href="/login" className="text-blue-600 font-semibold">Log In</a>
      </p>
    </Modal>
  );
}
