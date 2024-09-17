import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const handleSubmit = (e, role) => {
        e.preventDefault();
        // Redirect logic based on role
        if (role === 'citizen') {
            window.location.href = '/citizen-dashboard';
        } else if (role === 'leader') {
            window.location.href = '/leader-dashboard';
        }
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                        <li><Link to="/report" className="hover:text-blue-300">Report</Link></li>
                        <li><Link to="/track" className="hover:text-blue-300">Track</Link></li>
                        <li><Link to="/citizen-dashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>
                        <li><Link to="/leader-dashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Signup Form Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Sign Up</h1>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Citizen Signup Form */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up as a Citizen</h2>
                                <form onSubmit={(e) => handleSubmit(e, 'citizen')}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition"
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Leader Signup Form */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up as a Leader</h2>
                                <form onSubmit={(e) => handleSubmit(e, 'leader')}>
                                    <div className="mb-4">
                                        <label htmlFor="name-leader" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            id="name-leader"
                                            name="name-leader"
                                            placeholder="Full Name"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email-leader" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            id="email-leader"
                                            name="email-leader"
                                            placeholder="Email"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password-leader" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            id="password-leader"
                                            name="password-leader"
                                            placeholder="Password"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                                        <input
                                            type="text"
                                            id="position"
                                            name="position"
                                            placeholder="Position"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition"
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Signup;
