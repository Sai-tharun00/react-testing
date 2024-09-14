import React from 'react';

const About = () => {
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
              <a href="about.html" className="bg-blue-600 px-3 py-1 rounded-md">
                About
              </a>
            </li>
            <li>
              <a href="services.html" className="hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="report.html" className="hover:text-blue-300">
                Report
              </a>
            </li>
            <li>
              <a href="track.html" className="hover:text-blue-300">
                Track
              </a>
            </li>
            <li>
              <a href="dashboard.html" className="hover:text-blue-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-blue-300">
                Contact
              </a>
            </li>
            <li>
              <a href="login.html" className="hover:text-blue-300">
                Login
              </a>
            </li>
            <li>
              <a href="signup.html" className="hover:text-blue-300">
                Sign Up
              </a>
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
