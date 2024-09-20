// src/pages/LeaderPerformanceChart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary components for Bar chart
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const LeaderPerformanceChart = () => {
    // Sample data for the bar chart
    const data = {
        labels: ['2020', '2021', '2022', '2023'],  // X-axis labels (Years)
        datasets: [
            {
                label: 'Resolved Issues',
                data: [120, 150, 170, 200],  // Resolved issues per year
                backgroundColor: '#36A2EB',
                hoverBackgroundColor: '#36A2EB',
                borderWidth: 1,
            },
            {
                label: 'Unresolved Issues',
                data: [40, 35, 50, 30],  // Unresolved issues per year
                backgroundColor: '#FF6384',
                hoverBackgroundColor: '#FF6384',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,  // Ensure the chart size is flexible
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Leader Performance Overview (Resolved vs Unresolved Issues per Year)',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,  // Tighter step size for more granular detail
                    callback: function (value) {
                        return value;  // Display the raw value on Y-axis
                    }
                },
                title: {
                    display: true,
                    text: 'Number of Issues',
                },
            },
        },
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

            {/* Leader Performance Bar Chart Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Leader Performance Analytics
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Performance Overview by Year
                        </h3>
                        <div className="mt-4 flex justify-center">
                            {/* Slightly reduced chart size */}
                            <div style={{ width: '900px', height: '450px' }}>  {/* Adjusted width and height */}
                                <Bar data={data} options={options} />
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








