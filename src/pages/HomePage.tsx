import CategoryBlocks from "../components/CategoryBlocks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { useState } from "react";
import WhyUs from "../components/WhyUs";

// Import CategoryBlocks

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            className={`min-h-screen flex flex-col ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Center the Header Content */}
            <header className="flex flex-col justify-center items-center text-center min-h-screen">
                <h2 className="text-4xl font-bold">
                    AI & Blockchain-Powered Freelancing
                </h2>
                <p className="text-lg mt-4">
                    Secure, Transparent, and Fair Marketplace
                </p>
                <Button className="mt-6 px-6 py-2 text-lg bg-blue-600 text-white rounded-xl">
                    Get Started
                </Button>
            </header>

            {/* Features Section */}
            <section
                id="features"
                className="py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            >
                <div className="p-6 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold">AI Arbitration</h3>
                    <p>Unbiased dispute resolution using AI.</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold">Blockchain Payments</h3>
                    <p>Secure escrow-based transactions.</p>
                </div>
                <div className="p-6 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold">Fair Pricing</h3>
                    <p>AI-driven payment structure for freelancers.</p>
                </div>
            </section>

            {/* Category Section - Appears after scrolling */}
            <section id="categories" className="py-12 px-6">
                {/* <h2 className="text-2xl font-bold text-center mb-6">
                    Popular Categories
                </h2> */}
                <CategoryBlocks />
            </section>

            <WhyUs />
            <Footer />
        </div>
    );
}
