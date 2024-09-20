import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = ({ userRole, onLogout }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleInfo = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="bg-blue-600 px-3 py-1 rounded-md">About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                
                        <li><Link to="/help" className="hover:text-blue-300">Help</Link></li>
                        {!userRole ? (
                            <>
                                <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
                                <li><Link to="/choose" className="hover:text-blue-300">Sign Up</Link></li>
                            </>
                        ) : (
                            <>
                                {userRole === 'citizen' && (
                                    <li><Link to="/citizen-dashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>
                                )}
                                {userRole === 'leader' && (
                                    <li><Link to="/leader-dashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>
                                )}
                                <li><button onClick={onLogout} className="hover:text-blue-300">Logout</button></li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            {/* About Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Civic Network</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Civic Network is dedicated to enhancing community engagement through a robust platform that allows citizens
                        to report civic issues, track their progress, and interact with local leaders. Our goal is to foster better
                        communication and accountability within communities.
                    </p>
                    {userRole ? (
                        <>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                As a valued member of Civic Network, you have access to detailed tracking of issues, insights into
                                community engagement, and direct communication with leaders. We are committed to supporting your
                                efforts in driving positive change in your community.
                            </p>
                            {showMore && (
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    We provide tools for citizens to easily report issues, follow up on their reports, and get involved with
                                    their local leaders to drive positive change. Join us in making your community a better place!
                                </p>
                            )}
                        </>
                    ) : (
                        <>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We provide tools for citizens to easily report issues, follow up on their reports, and get involved with
                                their local leaders to drive positive change. Join us in making your community a better place!
                            </p>
                            {showMore && (
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Learn more about how you can contribute and make an impact in your community.
                                </p>
                            )}
                        </>
                    )}
                    <button
                        onClick={handleToggleInfo}
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                    >
                        {showMore ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;

