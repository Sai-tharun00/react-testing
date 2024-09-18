import React from 'react';
import { Link } from 'react-router-dom';

const CitizenDashboard = () => {
    // Example streak data
    const streakInfo = {
        days: 5,
        achievements: [
            { title: "First Report", description: "Reported your first issue." },
            { title: "5 Days Streak", description: "Maintained a reporting streak for 5 days." },
        ],
    };

    // Example reported issues data
    const reportedIssues = [
        {
            id: 1,
            issue: "Pothole on Main Street",
            dateReported: "2024-09-10",
            status: "Solved",
        },
        {
            id: 2,
            issue: "Street Light Not Working",
            dateReported: "2024-09-12",
            status: "Pending",
        },
        {
            id: 3,
            issue: "Garbage Overflow",
            dateReported: "2024-09-14",
            status: "In Progress",
        },
    ];

    // Example top citizens data
    const topCitizens = [

        { name: "Samuel Green", streak: "15 Days", reports: 12 },
        { name: "John Doe", streak: "12 Days", reports: 10 },
        { name: "Jane Smith", streak: "8 Days", reports: 8 },
    ];

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
                            <Link to="/citizen-dashboard" className="bg-blue-600 px-3 py-1 rounded-md text-white">
                                Dashboard
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

            {/* Dashboard Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Citizen Dashboard
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Card 1: Citizen Streaks */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Citizen Streaks
                            </h3>
                            <p className="text-gray-600 mb-4">
                                View your streaks and achievements for reporting issues.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                                <p className="text-lg font-semibold text-blue-600 mb-2">
                                    Streak: {streakInfo.days} Days
                                </p>
                                <h4 className="text-md font-semibold text-gray-800 mb-2">
                                    Achievements
                                </h4>
                                <ul className="list-disc pl-5">
                                    {streakInfo.achievements.map((ach, index) => (
                                        <li key={index} className="text-gray-700 mb-1">
                                            <strong>{ach.title}:</strong> {ach.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Your Reports */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Your Reports
                            </h3>
                            <p className="text-gray-600 mb-4">
                                View and manage your reported issues.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                {reportedIssues.length > 0 ? (
                                    <ul className="space-y-4">
                                        {reportedIssues.map((issue) => (
                                            <li key={issue.id} className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-gray-800 font-semibold">
                                                        {issue.issue}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Reported on: {issue.dateReported}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${issue.status === 'Solved'
                                                        ? 'bg-green-100 text-green-600'
                                                        : issue.status === 'Pending'
                                                            ? 'bg-red-100 text-red-600'
                                                            : 'bg-yellow-100 text-yellow-600'
                                                        }`}
                                                >
                                                    {issue.status}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600">No reports found.</p>
                                )}
                            </div>
                        </div>

                        {/* Card 3: Top Citizens */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Top Citizens
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Citizens with the most reports and longest streaks.
                            </p>
                            <ul className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-4">
                                {topCitizens.map((citizen, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-800 font-semibold">
                                                {citizen.name}
                                            </p>
                                            <p className="text-gray-600">
                                                Streak: {citizen.streak} | Reports: {citizen.reports}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                                            Top
                                        </span>
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

export default CitizenDashboard;
