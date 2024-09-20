import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 font-roboto">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 transition-opacity duration-500 opacity-100">
          Join CivFix
        </h1>
        <p className="text-lg text-gray-700 mb-12 transition-opacity duration-500 opacity-80">
          Choose your role to contribute to the betterment of your community.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Citizen Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Citizen</h2>
            <p className="text-gray-600 mb-6">
              Engage in civic activities, report issues, and collaborate with community members.
            </p>
            <Link
              to="/signup"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
            >
              Join as Citizen
            </Link>
          </div>

          {/* Leader Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-300">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">Leader</h2>
            <p className="text-gray-600 mb-6">
              Lead initiatives, make impactful decisions, and guide community development.
            </p>
            <Link
              to="/leadersignup"
              className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-500 transition-colors duration-300"
            >
              Join as Leader
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
