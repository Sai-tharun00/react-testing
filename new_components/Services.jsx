import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Civic Network</Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="bg-blue-600 px-3 py-1 rounded-md">Services</Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-blue-300">Report</Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-blue-300">Track</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-300">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Services Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Issue Reporting</h2>
              <p className="text-gray-600">Easily report various civic issues and connect with local leaders to address them promptly.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Progress Tracking</h2>
              <p className="text-gray-600">Track the status of your reported issues and receive real-time updates on their resolution.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Community Engagement</h2>
              <p className="text-gray-600">Engage with community leaders and participate in initiatives aimed at improving local conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
