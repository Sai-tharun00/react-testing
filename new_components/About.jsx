import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
              <Link to="/about" className="bg-blue-600 px-3 py-1 rounded-md">
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
              <Link to="/contact" className="hover:text-blue-300">
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

      {/* About Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Civic Network</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Civic Network is dedicated to enhancing community engagement through a robust platform that allows citizens
            to report civic issues, track their progress, and interact with local leaders. Our goal is to foster better
            communication and accountability within communities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide tools for citizens to easily report issues, follow up on their reports, and get involved with
            their local leaders to drive positive change. Join us in making your community a better place!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
