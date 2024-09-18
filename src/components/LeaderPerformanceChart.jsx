// src/pages/LeaderPerformanceChart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const LeaderPerformanceChart = () => {
    // Sample data for the chart
    const data = {
        labels: ['Resolved Issues', 'Unresolved Issues'],
        datasets: [
            {
                data: [150, 30],  // Replace with actual data from Firestore
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">
                        Civic Network
                    </Link>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/leader-dashboard" className="hover:text-blue-300">
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

            {/* Leader Performance Chart Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Leader Performance Analytics
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Performance Overview
                        </h3>
                        <div className="mt-4 flex justify-center">
                            {/* Reduced chart size */}
                            <div style={{ maxWidth: '400px', maxHeight: '400px' }}>
                                <Pie data={data} width={200} height={200} />
                            </div>
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

export default LeaderPerformanceChart;


