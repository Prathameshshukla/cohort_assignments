// src/context/UserContext.tsx
import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  userRole: "client" | "freelancer" | null;
  setUserRole: React.Dispatch<React.SetStateAction<"client" | "freelancer" | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<"client" | "freelancer" | null>(null);

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
