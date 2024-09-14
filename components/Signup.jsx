import React from 'react';

const Signup = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="logo text-2xl font-bold">Civic Network</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href="/services" className="hover:text-blue-300">Services</a></li>
            <li><a href="/report" className="hover:text-blue-300">Report</a></li>
            <li><a href="/track" className="hover:text-blue-300">Track</a></li>
            <li><a href="/dashboard" className="hover:text-blue-300">Dashboard</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Signup Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Sign Up</h1>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Citizen Signup Form */}
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up as a Citizen</h2>
                <form action="/citizen-dashboard" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>

            {/* Leader Signup Form */}
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up as a Leader</h2>
                <form action="/leader-dashboard" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name-leader" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name-leader"
                      name="name-leader"
                      placeholder="Full Name"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email-leader" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email-leader"
                      name="email-leader"
                      placeholder="Email"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password-leader" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password-leader"
                      name="password-leader"
                      placeholder="Password"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      placeholder="Position"
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
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

export default Signup;
