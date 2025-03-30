import { useState } from "react";
import CategoryBlocks from "../components/CategoryBlocks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import WhyUs from "../components/WhyUs";

interface HomePageProps {
    onLoginClick: () => void;
    onSignUpClick: () => void;
}

export default function HomePage({ onLoginClick, onSignUpClick }: HomePageProps) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                onLoginClick={onLoginClick} 
                onSignUpClick={onSignUpClick} 
            />

            <header className="flex flex-col justify-center items-center text-center min-h-screen px-6">
                <h2 className="text-4xl font-bold">AI & Blockchain-Powered Freelancing</h2>
                <p className="text-lg mt-4">Secure, Transparent, and Fair Marketplace</p>
                <Button className="mt-6 px-6 py-2 text-lg bg-blue-600 text-white rounded-xl" onClick={onSignUpClick}>
                    Get Started
                </Button>
            </header>

            <section id="features" className="py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                    { 
                        title: "AI Arbitration", 
                        desc: "Our AI-driven arbitration system ensures unbiased, fast, and accurate dispute resolution. It analyzes work completion, client requirements, and communication history to make fair judgments." 
                    },
                    { 
                        title: "Blockchain Payments", 
                        desc: "All transactions are processed securely using blockchain-based escrow payments. Funds are held safely until predefined milestones are met, ensuring trust for both clients and freelancers." 
                    },
                    { 
                        title: "Fair Pricing", 
                        desc: "Our AI-driven pricing model calculates freelancer rates based on experience, skill level, and project complexity. This ensures transparent and fair compensation, reducing price exploitation." 
                    }
                ].map((feature, index) => (
                    <div key={index} className="p-6 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="mt-2">{feature.desc}</p>
                    </div>
                ))}
            </section>
            <section id="categories" className="py-12 px-6">
                <CategoryBlocks />
            </section>

            <WhyUs />
            <Footer />
        </div>
    );
}
