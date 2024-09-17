import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Simulate a context to check authentication and role
const AuthContext = React.createContext();

const TrackIssues = () => {
    const [issues] = useState({
        '12345': { title: 'Broken Streetlight', status: 'Pending', description: 'The streetlight on Elm Street is broken.' },
        '67890': { title: 'Pothole on Main St', status: 'Resolved', description: 'Pothole fixed on Main Street.' }
    });
    const [search, setSearch] = useState('');
    const [issueDetails, setIssueDetails] = useState(null);

    // Auth context to get the user role and status
    const { isAuthenticated, userRole } = useContext(AuthContext);

    const handleSearch = () => {
        const issue = issues[search.trim()];
        if (issue) {
            setIssueDetails(issue);
        } else {
            alert('No issue found with that tracking number.');
            setIssueDetails(null);
        }
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/report" className="hover:text-blue-300">Report Issue</Link></li>
                        <li><Link to="/track" className="bg-blue-600 px-3 py-1 rounded-md">Track Issues</Link></li>
                        {isAuthenticated && userRole === 'citizen' && (
                            <li><Link to="/citizen-dashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>
                        )}
                        {isAuthenticated && userRole === 'leader' && (
                            <li><Link to="/leader-dashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>
                        )}
                        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
                    </ul>
                    <div className="profile">
                        <img src="profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </div>
                </nav>
            </header>

            {/* Track Issues Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Track Your Issues</h1>
                    <div className="mb-8 flex justify-center">
                        <input
                            type="text"
                            id="search"
                            placeholder="Enter tracking number..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                            id="track-button"
                            onClick={handleSearch}
                            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 transition"
                        >
                            Search
                        </button>
                    </div>
                    {issueDetails && (
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{issueDetails.title}</h3>
                            <p className="text-gray-600 mb-2">Status: <span className={`font-semibold ${issueDetails.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>{issueDetails.status}</span></p>
                            <p className="text-gray-600">Description: {issueDetails.description}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
                    <Link to="/privacy" className="hover:text-blue-300">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-blue-300">Terms of Service</Link>
                </div>
            </footer>
        </div>
    );
};

export default TrackIssues;
