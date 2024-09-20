import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TrackIssues = ({ isAuthenticated, userRole }) => {
    const [issueId, setIssueId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Mock function to simulate issue search - replace with actual API call
    const searchIssue = async () => {
        setError('');
        try {
            // Replace with your API endpoint and request logic
            const response = await fetch(`/api/issues/${issueId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Redirect to Status Page with the issue ID
                navigate(`/status/${issueId}`);
            } else {
                setError('Issue not found.');
            }
        } catch (err) {
            setError('An error occurred while fetching the issue.');
            console.error('Error fetching issue:', err);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (issueId.trim() === '') {
            setError('Please enter an Issue ID.');
            return;
        }
        searchIssue();
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
                            <Link to="/track" className="bg-blue-600 px-3 py-1 rounded-md">
                                Track Issues
                            </Link>
                        </li>
                        {isAuthenticated && userRole === 'citizen' && (
                            <li>
                                <Link to="/citizendashboard" className="hover:text-blue-300">
                                    Citizen Dashboard
                                </Link>
                            </li>
                        )}
                        {isAuthenticated && userRole === 'leader' && (
                            <li>
                                <Link to="/leaderdashboard" className="hover:text-blue-300">
                                    Leader Dashboard
                                </Link>
                            </li>
                        )}
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
                        <img src="/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </div>
                </nav>
            </header>

            {/* Track Issues Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Track Your Issues</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mb-8">
                        <div className="mb-4">
                            <label htmlFor="issueId" className="block text-lg font-semibold text-gray-800 mb-2">
                                Issue ID
                            </label>
                            <input
                                type="text"
                                id="issueId"
                                value={issueId}
                                onChange={(e) => setIssueId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Search
                        </button>
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default TrackIssues;







