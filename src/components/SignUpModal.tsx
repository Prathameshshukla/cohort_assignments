import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [role, setRole] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("India");
  const [agreed, setAgreed] = useState(false);

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl w-[450px] sm:w-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          ✖
        </button>

        {!role ? (
          <>
            <h2 className="text-2xl font-semibold text-center">Join as a Client or Freelancer</h2>
            <div className="flex gap-6 justify-center mt-6">
              <div className="border rounded-lg p-6 flex flex-col items-center w-1/2 cursor-pointer hover:shadow-md" onClick={() => setRole("Client")}>
                <span className="text-xl">👤</span>
                <p className="mt-2 text-center">I’m a client, hiring for a project</p>
              </div>
              <div className="border rounded-lg p-6 flex flex-col items-center w-1/2 cursor-pointer hover:shadow-md" onClick={() => setRole("Freelancer")}>
                <span className="text-xl">💼</span>
                <p className="mt-2 text-center">I’m a freelancer, looking for work</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center">Sign Up as {role}</h2>

            {/* Social Sign Up */}
            <button className="w-full flex items-center justify-center border px-4 py-3 rounded-lg mt-4 hover:bg-gray-100 dark:hover:bg-gray-800">
              🍏 Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center border px-4 py-3 rounded-lg mt-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              🔵 Continue with Google
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-300 dark:border-gray-700" />
              <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
              <hr className="flex-1 border-gray-300 dark:border-gray-700" />
            </div>

            {/* Sign-Up Form */}
            <form className="flex flex-col space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <input type="email" placeholder={role === "Client" ? "Work email address" : "Email"} value={email} onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />

              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Password (8 or more characters)" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <span className="absolute right-4 top-3 cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* Country Dropdown */}
              <select value={country} onChange={(e) => setCountry(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>

              {/* Email Subscription */}
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" defaultChecked />
                Send me helpful emails to find rewarding work and job leads.
              </label>

              {/* Terms & Conditions */}
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" checked={agreed} onChange={() => setAgreed(!agreed)} />
                Yes, I understand and agree to the
                <a href="#" className="text-blue-600 ml-1">Terms of Service</a>,
                <a href="#" className="text-blue-600 ml-1">User Agreement</a>, and
                <a href="#" className="text-blue-600 ml-1">Privacy Policy</a>.
              </label>

              {/* Create Account Button */}
              <button type="submit" className={`mt-2 w-full py-3 rounded-lg ${
                  email && password.length >= 8 && agreed
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-400 cursor-not-allowed text-gray-300"
                }`}
                disabled={!email || password.length < 8 || !agreed}
              >
                Create my account
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
              Already have an account? <span className="text-green-600 cursor-pointer">Log In</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
