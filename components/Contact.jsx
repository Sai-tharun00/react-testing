import React from 'react';

const Contact = () => {
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
              <a href="about.html" className="hover:text-blue-300">
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
              <a href="contact.html" className="bg-blue-600 px-3 py-1 rounded-md">
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
