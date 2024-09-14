import React from 'react';

const ReportIssue = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Civic Network
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="/report" className="bg-blue-600 px-3 py-1 rounded-md">
                Report Issue
              </a>
            </li>
            <li>
              <a href="/track" className="hover:text-blue-300">
                Track Issues
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-blue-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="profile">
            <img src="/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </nav>
      </header>

      {/* Report Issue Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Report an Issue</h1>
          <form action="#" method="post" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">
                Issue Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-lg font-semibold text-gray-800 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="pothole">Pothole</option>
                <option value="garbage">Garbage</option>
                <option value="streetlight">Streetlight</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-lg font-semibold text-gray-800 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Auto-filled or manually enter location"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-2">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/contact" className="hover:text-blue-300">
            Contact Us
          </a>
          <a href="/privacy" className="hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-300">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ReportIssue;
