// src/pages/LeaderDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LeaderDashboard = () => {
    // Sample data
    const reportedIssues = [
        { id: 1, title: "Pothole on Main Street", status: "Resolved" },
        { id: 2, title: "Broken Streetlight at Elm Avenue", status: "In Progress" },
        { id: 3, title: "Graffiti on City Hall", status: "Pending" },
        { id: 4, title: "Overflowing Trash Bin at Park", status: "Pending" },
    ];

    const unresolvedIssues = reportedIssues.filter(issue => issue.status !== "Resolved");

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
                            <Link to="/leader-dashboard" className="bg-blue-600 px-3 py-1 rounded-md text-white">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/leader-performance" className="bg-blue-600 px-3 py-1 rounded-md text-white">
                                Performance Analytics
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
                    </ul>
                    <div className="profile">
                        <img
                            src="/path/to/profile-icon.png"
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                </nav>
            </header>

            {/* Leader Dashboard Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Leader Dashboard
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                        {/* Card 1: Backlogs */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-red-600 mb-4">
                                🚨 Attention Required: Backlogs
                            </h3>
                            <p className="text-lg text-gray-800 font-semibold">
                                Unresolved Issues
                            </p>
                            {unresolvedIssues.length > 0 ? (
                                <ul className="mt-4 space-y-3">
                                    {unresolvedIssues.map(issue => (
                                        <li key={issue.id} className="text-gray-700">
                                            <strong>{issue.title}</strong> - <span className={`font-semibold ${issue.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>{issue.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-green-600 mt-4">All issues have been resolved!</p>
                            )}
                        </div>

                        {/* Card 2: Leader Performance */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Leader Performance
                            </h3>
                            <p className="text-gray-600">
                                See how many issues you have resolved.
                            </p>
                            <div className="mt-4">
                                <p className="text-lg font-semibold text-blue-600">
                                    Resolved Issues: 150
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Reported Issues */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Reported Issues
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {reportedIssues.map(issue => (
                                    <li key={issue.id} className="text-gray-700">
                                        <strong>{issue.title}</strong> - <span className={`font-semibold ${issue.status === 'Resolved' ? 'text-green-600' : issue.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>{issue.status}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
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

export default LeaderDashboard;


