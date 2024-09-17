import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // State for form inputs and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Validation functions
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation
        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill out both fields.');
            return;
        }

        // Email validation
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Password validation
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long and include letters, numbers, and special characters.');
            return;
        }

        // If all validations pass
        setError('');

        // Simulate authentication and role determination
        const userRole = email.includes('leader') ? 'leader' : 'citizen';

        // Simulate async operation
        try {
            // Simulate an API call or authentication process
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

            // Redirect based on user role
            if (userRole === 'leader') {
                navigate('/leader-dashboard');
            } else {
                navigate('/citizen-dashboard');
            }
        } catch (err) {
            // Handle errors (e.g., network or authentication errors)
            setError('An error occurred during login. Please try again.');
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
                            <Link to="/report" className="hover:text-blue-300">
                                Report Issue
                            </Link>
                        </li>
                        <li>
                            <Link to="/track" className="hover:text-blue-300">
                                Track Issues
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-300">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="bg-blue-600 px-3 py-1 rounded-md">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="hover:text-blue-300">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Login Section */}
            <section className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error.includes('email') ? 'border-red-500' : ''}`}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error.includes('Password') ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-500 transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link to="/contact" className="hover:text-blue-300">
                        Contact Us
                    </Link>
                    <Link to="/privacy" className="hover:text-blue-300">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-blue-300">
                        Terms of Service
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Login;
