import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    // Example role, this could come from props, context, or a global state
    const [userRole, setUserRole] = useState('guest'); // 'citizen', 'leader', or 'guest'

    // State for modal visibility and content
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    const services = [
        { title: 'Issue Reporting', description: 'Easily report various civic issues and connect with local leaders to address them promptly.' },
        { title: 'Progress Tracking', description: 'Track the status of your reported issues and receive real-time updates on their resolution.' },
        { title: 'Community Engagement', description: 'Engage with community leaders and participate in initiatives aimed at improving local conditions.' }
    ];

    const handleCardClick = (title, description) => {
        setModalContent({ title, description });
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/services" className="bg-blue-600 px-3 py-1 rounded-md">Services</Link></li>
                        <li><Link to="/report" className="hover:text-blue-300">Report</Link></li>
                        <li><Link to="/track" className="hover:text-blue-300">Track</Link></li>
                        {userRole === 'leader' && (
                            <li><Link to="/leader-dashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>
                        )}
                        {userRole === 'citizen' && (
                            <li><Link to="/citizen-dashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>
                        )}
                        {userRole === 'guest' && (
                            <>
                                <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                                <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
                                <li><Link to="/signup" className="hover:text-blue-300">Sign Up</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>

            {/* Services Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
                                onClick={() => handleCardClick(service.title, service.description)}
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">{modalContent.title}</h2>
                        <p className="text-gray-600">{modalContent.description}</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Services;
