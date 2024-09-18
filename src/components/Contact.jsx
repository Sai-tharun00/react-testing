import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ userRole, onLogout }) => {
    // State for form inputs and error messages
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    // Validate form inputs
    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        // Name validation: only alphabets and spaces allowed, must be at least 5 characters long
        if (!/^[a-zA-Z\s]+$/.test(name) || name.length < 5) {
            newErrors.name = 'Name must contain only letters and spaces and be at least 5 characters long.';
            isValid = false;
        }

        // Email validation: must be a valid email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Message validation: alphanumeric or alphabetic characters only, must be at least 5 characters long
        if (!/^[a-zA-Z0-9\s]+$/.test(message) || message.length < 5) {
            newErrors.message = 'Message must be at least 5 characters long and contain only alphanumeric characters or letters.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process form submission here, e.g., send data to server
            alert('Message sent successfully!');
            // Clear the form
            setName('');
            setEmail('');
            setMessage('');
            setErrors({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">
                        Civic Network
                    </Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-blue-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-blue-300">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/report" className="hover:text-blue-300">
                                Report
                            </Link>
                        </li>
                        <li>
                            <Link to="/track" className="hover:text-blue-300">
                                Track
                            </Link>
                        </li>
                        {userRole ? (
                            <>
                                {userRole === 'citizen' && (
                                    <li>
                                        <Link to="/citizen-dashboard" className="hover:text-blue-300">
                                            Citizen Dashboard
                                        </Link>
                                    </li>
                                )}
                                {userRole === 'leader' && (
                                    <li>
                                        <Link to="/leader-dashboard" className="hover:text-blue-300">
                                            Leader Dashboard
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <button onClick={onLogout} className="hover:text-blue-300">
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="hover:text-blue-300">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="hover:text-blue-300">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to="/contact" className="bg-blue-600 px-3 py-1 rounded-md">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Contact Us Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        {userRole
                            ? 'Feel free to reach out with any inquiries or support requests. You can also use your dashboard for direct communication with our team.'
                            : 'Get in touch with us for any inquiries or support. We’re here to help!'}
                    </p>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
