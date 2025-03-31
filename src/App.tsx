import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleSignUpClick = () => setIsSignUpOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const closeSignUp = () => setIsSignUpOpen(false);

  return (
    <Router>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onLoginClick={handleLoginClick} 
        onSignUpClick={handleSignUpClick} 
      />

      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Pass `isOpen` prop to modals */}
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
      <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUp} />
    </Router>
  );
};

export default App;
