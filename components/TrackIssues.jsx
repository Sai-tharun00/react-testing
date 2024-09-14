import React from 'react';

const TrackIssues = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Civic Network</a>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/report" className="hover:text-blue-300">Report Issue</a></li>
            <li><a href="/track" className="bg-blue-600 px-3 py-1 rounded-md">Track Issues</a></li>
            <li><a href="/dashboard" className="hover:text-blue-300">Dashboard</a></li>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
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
              placeholder="Search for issues..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            {/* Example Issue */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Issue Title</h3>
              <p className="text-gray-600 mb-2">Status: <span className="font-semibold text-yellow-600">Pending</span></p>
              <p className="text-gray-600">Description: Example description of the issue.</p>
            </div>
            {/* More issues can be dynamically added here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/contact" className="hover:text-blue-300">Contact Us</a>
          <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default TrackIssues;
