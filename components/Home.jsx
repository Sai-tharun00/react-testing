import React from 'react';

const Home = () => {
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

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Civic Network</h1>
          <p className="text-lg mb-6">
            A platform for citizens to report issues and connect with leaders for better community engagement.
          </p>
          <a
            href="report.html"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Report an Issue
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How Civic Network Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Report Issues</h3>
              <p className="text-gray-600">
                Easily report civic issues and tag relevant leaders to escalate and resolve problems.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Track Progress</h3>
              <p className="text-gray-600">
                Track the progress of your reports and stay updated with real-time notifications.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Engage with Leaders</h3>
              <p className="text-gray-600">
                Follow leaders' profiles, engage with their efforts, and hold them accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Civic Network Today</h2>
          <p className="mb-6">
            Be a part of the change and help improve your community with the power of connection.
          </p>
          <a
            href="signup.html"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
          >
            Sign Up
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 Civic Network. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
