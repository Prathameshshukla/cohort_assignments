import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientNavbar from "./components/ClientNavbar";
import FreelancerNavbar from "./components/ui/FreelancerNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

const DashboardLayout: React.FC<{ 
  children: React.ReactNode;
  userRole: "client" | "freelancer";
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
}> = ({ children, userRole, darkMode, setDarkMode, onLogout }) => {
  return (
    <>
      {userRole === "client" ? (
        <ClientNavbar darkMode={darkMode} setDarkMode={setDarkMode} onLogout={onLogout} />
      ) : (
        <FreelancerNavbar darkMode={darkMode} setDarkMode={setDarkMode} onLogout={onLogout} />
      )}
      <div className="dashboard-content mt-16">{children}</div>
    </>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [userRole, setUserRole] = useState<"client" | "freelancer" | null>(null);

  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <>
      {/* Show Navbar for non-dashboard routes */}
      {!isDashboard && !userRole && (
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onLoginClick={() => setIsLoginOpen(true)} 
          onSignUpClick={() => setIsSignUpOpen(true)} 
        />
      )}

      {/* App Routes */}
      <Routes>
        <Route 
          path="/" 
          element={<HomePage darkMode={darkMode} onLoginClick={() => setIsLoginOpen(true)} onSignUpClick={() => setIsSignUpOpen(true)} />} 
        />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/client-dashboard" 
          element={userRole === "client" ? (
            <DashboardLayout 
              userRole={userRole} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              onLogout={handleLogout}
            >
              <ClientDashboard />
            </DashboardLayout>
          ) : <Navigate to="/" />} 
        />
        <Route 
          path="/freelancer-dashboard" 
          element={userRole === "freelancer" ? (
            <DashboardLayout 
              userRole={userRole} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              onLogout={handleLogout}
            >
              <FreelancerDashboard />
            </DashboardLayout>
          ) : <Navigate to="/" />} 
        />
      </Routes>

      {/* Modals with userRole update */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={(role) => {
          setUserRole(role);
          setIsLoginOpen(false);
        }} 
      />
      
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignUp={(role) => {
          setUserRole(role);
          setIsSignUpOpen(false);
        }} 
      />
    </>
  );
};

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
