// FreelancerNavbar.tsx (similar to ClientNavbar.tsx)
import React from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
}

const FreelancerNavbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onLogout }) => {
  return (
    <nav>
      {/* Freelancer navbar code */}
    </nav>
  );
};

export default FreelancerNavbar;
