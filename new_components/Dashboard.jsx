import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
              <Link to="/dashboard" className="bg-blue-600 px-3 py-1 rounded-md">
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
              src="/path/to/profile-icon.png"  // Update the path to the profile icon if needed
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
            Dashboard
          </h1>
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Citizen Streaks */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Citizen Streaks
              </h3>
              <p className="text-gray-600">
                View your streaks and achievements for reporting issues.
              </p>
              <div className="mt-4">
                {/* Example Streak Info */}
                <p className="text-lg font-semibold text-blue-600">
                  Streak: 5 Days
                </p>
              </div>
            </div>
            {/* Card 2: Leader Performance */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Leader Performance
              </h3>
              <p className="text-gray-600">
                See how many issues have been resolved by leaders.
              </p>
              <div className="mt-4">
                {/* Example Performance Info */}
                <p className="text-lg font-semibold text-blue-600">
                  Resolved Issues: 150
                </p>
              </div>
            </div>
            {/* Card 3: Recent Reports */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Recent Reports
              </h3>
              <p className="text-gray-600">
                Track the most recent issues reported by citizens.
              </p>
              <div className="mt-4">
                {/* Example Recent Report Info */}
                <p className="text-lg font-semibold text-blue-600">
                  Latest Report: Garbage Collection
                </p>
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

export default Dashboard;
