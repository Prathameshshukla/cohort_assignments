import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

export default function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <HomePage 
                onLoginClick={() => setIsLoginOpen(true)} 
                onSignUpClick={() => setIsSignUpOpen(true)} 
            />

            {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
            {isSignUpOpen && <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />}
        </div>
    );
}
