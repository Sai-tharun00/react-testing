import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Navigation component
const Navigation = ({ userRole, toggleLogin }) => (
    <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Civic Network</Link>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                {userRole ? (
                    <li><button onClick={toggleLogin} className="hover:text-blue-300">Logout</button></li>
                ) : (
                    <>
                        <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
                        <li><Link to="/signup" className="hover:text-blue-300">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    </header>
);

// Hero Section component
const HeroSection = ({ userRole }) => (
    <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Civic Network</h1>
            <p className="text-lg mb-6">
                A platform for citizens to report issues and connect with leaders for better community engagement.
            </p>
            {userRole ? (
                <p className="mb-6">
                    {userRole === 'citizen' ? 'Explore your dashboard to manage and track your reports.' : 'Check your dashboard for updates and progress.'}
                </p>
            ) : (
                <Link
                    to="/report-issue"
                    className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition inline-block"
                >
                    Report an Issue
                </Link>
            )}
        </div>
    </section>
);

// Features Section component
const FeaturesSection = () => (
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How Civic Network Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Report Issues', 'Track Progress', 'Engage with Leaders'].map((title, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">{title}</h3>
                        <p className="text-gray-600">
                            {title === 'Report Issues' && 'Easily report civic issues and tag relevant leaders to escalate and resolve problems.'}
                            {title === 'Track Progress' && 'Track the progress of your reports and stay updated with real-time notifications.'}
                            {title === 'Engage with Leaders' && 'Follow leaders\' profiles, engage with their efforts, and hold them accountable.'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Call to Action Section component
const CallToActionSection = () => (
    <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Civic Network Today</h2>
            <p className="mb-6">
                Be a part of the change and help improve your community with the power of connection.
            </p>
            <Link
                to="/signup"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
            >
                Sign Up
            </Link>
        </div>
    </section>
);

// Footer component
const Footer = () => (
    <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
    </footer>
);

const Home = () => {
    const [userRole, setUserRole] = useState(null); // 'citizen', 'leader', or null

    const toggleLogin = () => {
        setUserRole(prevRole => (prevRole ? null : 'guest')); // Toggle login status
    };

    return (
        <div className="bg-gray-100 font-sans">
            <Navigation userRole={userRole} toggleLogin={toggleLogin} />
            <HeroSection userRole={userRole} />
            <FeaturesSection />
            <CallToActionSection />
            <Footer />
        </div>
    );
};

export default Home;



