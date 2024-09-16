import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-blue-300">
                Report
              </Link>
            </li>
            <li>
              <Link to="/track" className="hover:text-blue-300">
                Track
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-blue-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" className="bg-blue-600 px-3 py-1 rounded-md">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-blue-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contact Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Get in touch with us for any inquiries or support. We're here to help!
          </p>
          <form action="#" method="post" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
