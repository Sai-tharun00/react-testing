import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // Firebase auth and Firestore
import { setDoc, doc } from 'firebase/firestore'; // Firestore methods
import { toast } from 'react-toastify'; // For success/error popups

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [role, setRole] = useState(""); // For role selection (citizen/leader)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create user with Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data to Firestore
            await setDoc(doc(db, 'Users', user.uid), {
                email: user.email,
                firstName: fname,
                lastName: lname,
                role: role, // Store the role in Firestore
                photo: ""
            });
            console.log("User registered successfully");
            // Toast success message
            toast.success("User Registered Successfully!", {
                position: "top-center",
            });

            // Role-based redirection after signup
            if (role === 'citizen') {
                window.location.href = '/citizen-dashboard';
            } else if (role === 'leader') {
                window.location.href = '/leader-dashboard';
            }

        } catch (error) {
            console.error(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className="bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                        <li><Link to="/report" className="hover:text-blue-300">Report</Link></li>
                        <li><Link to="/track" className="hover:text-blue-300">Track</Link></li>
                        <li><Link to="/citizen-dashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>
                        <li><Link to="/leader-dashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Signup Form Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Sign Up</h1>
                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Common Signup Form */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            placeholder="First Name"
                                            required
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            placeholder="Last Name"
                                            value={lname}
                                            onChange={(e) => setLname(e.target.value)}
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>

                                    {/* Role selection */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Role</label>
                                        <select
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="" disabled>Select your role</option>
                                            <option value="citizen">Citizen</option>
                                            <option value="leader">Leader</option>
                                        </select>
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


