import React from 'react';

const Login = () => {
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
              <a href="/report" className="hover:text-blue-300">
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
            <li>
              <a href="/login" className="bg-blue-600 px-3 py-1 rounded-md">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-blue-300">
                Sign Up
              </a>
            </li>
          </ul>
          <div className="profile">
            <img src="/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </nav>
      </header>

      {/* Login Section */}
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
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

export default Login;
