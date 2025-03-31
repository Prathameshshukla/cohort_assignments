import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Placeholder functions for login/signup
  const handleLoginClick = () => {
    console.log("Login Clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign Up Clicked");
  };

  return (
    <Router>
      {/* Pass required props to Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onLoginClick={handleLoginClick} 
        onSignUpClick={handleSignUpClick} 
      />

      <Routes>
        {/* Pass necessary props to HomePage */}
        <Route path="/" element={
          <HomePage 
            onLoginClick={handleLoginClick} 
            onSignUpClick={handleSignUpClick} 
            darkMode={darkMode} 
          />
        } />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
