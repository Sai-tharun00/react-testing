import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="index.html" className="text-2xl font-bold">
            Civic Network
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="index.html" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="report.html" className="hover:text-blue-300">
                Report Issue
              </a>
            </li>
            <li>
              <a href="track.html" className="hover:text-blue-300">
                Track Issues
              </a>
            </li>
            <li>
              <a href="dashboard.html" className="bg-blue-600 px-3 py-1 rounded-md">
                Dashboard
              </a>
            </li>
            <li>
              <a href="about.html" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="profile">
            <img
              src="profile-icon.png"
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
          <a href="contact.html" className="hover:text-blue-300">
            Contact Us
          </a>
          <a href="privacy.html" className="hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="terms.html" className="hover:text-blue-300">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
