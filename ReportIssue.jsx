import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportIssue = ({ isAuthenticated, userRole }) => {
    // State for form inputs and error messages
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('pothole');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({ title: '', description: '', location: '', image: '' });

    // Helper function to check if the string is alphanumeric or alphabetic
    const isAlphaNumeric = (str) => /^[a-zA-Z0-9\s]+$/.test(str);

    // Validate form inputs
    const validateForm = () => {
        let isValid = true;
        const newErrors = { title: '', description: '', location: '', image: '' };

        // Title validation
        if (!isAlphaNumeric(title) || title.length < 5) {
            newErrors.title = 'The issue title must be at least 5 characters long and contain only alphabets or alphanumeric characters.';
            isValid = false;
        }

        // Description validation
        if (!isAlphaNumeric(description) || description.length < 10) {
            newErrors.description = 'The description must be at least 10 characters long and contain only alphabets or alphanumeric characters.';
            isValid = false;
        }

        // Location validation
        if (!isAlphaNumeric(location) || location.length < 5) {
            newErrors.location = 'The location must be at least 5 characters long and contain only alphabets or alphanumeric characters.';
            isValid = false;
        }

        // Image validation
        if (!image) {
            newErrors.image = 'Please upload an image.';
            isValid = false;
        } else {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!validImageTypes.includes(image.type)) {
                newErrors.image = 'Please upload a valid image file (JPEG, PNG, SVG).';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process form submission here, e.g., send data to server
            alert('Your issue has been successfully reported!');

            // Clear the form
            setTitle('');
            setDescription('');
            setLocation('');
            setCategory('pothole');
            setImage(null);
            setErrors({ title: '', description: '', location: '', image: '' });
        }
    };

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

                        {/* For all users, including guests */}
                        <li>
                            <Link to="/report" className="bg-blue-600 px-3 py-1 rounded-md">
                                Report Issue
                            </Link>
                        </li>
                        <li>
                            <Link to="/track" className="hover:text-blue-300">
                                Track Issues
                            </Link>
                        </li>

                        {/* Show different dashboard links based on user role */}
                        {isAuthenticated && userRole === 'citizen' && (
                            <li>
                                <Link to="/citizendashboard" className="hover:text-blue-300">
                                    Citizen Dashboard
                                </Link>
                            </li>
                        )}
                        {isAuthenticated && userRole === 'leader' && (
                            <li>
                                <Link to="/leaderdashboard" className="hover:text-blue-300">
                                    Leader Dashboard
                                </Link>
                            </li>
                        )}

                        <li>
                            <Link to="/about" className="hover:text-blue-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-300">
                                Contact Us
                            </Link>
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
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">
                                Issue Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.title ? 'border-red-500' : ''}`}
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.description ? 'border-red-500' : ''}`}
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-lg font-semibold text-gray-800 mb-2">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Auto-filled or manually enter location"
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.location ? 'border-red-500' : ''}`}
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
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
                                onChange={(e) => setImage(e.target.files[0])}
                                className={`w-full text-gray-500 ${errors.image ? 'border-red-500' : ''}`}
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Submit Issue
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReportIssue;
