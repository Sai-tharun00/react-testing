import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Eye icons

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'Users', user.uid), {
                email: user.email,
                firstName: fname,
                lastName: lname,
                role: 'citizen', // Set role to 'citizen' by default
                photo: ""
            });

            toast.success("User Registered Successfully!", {
                position: "top-center",
            });

            navigate('/citizen-dashboard');

        } catch (error) {
            console.error(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-gray-100 font-sans">
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                        <li><Link to="/help" className="hover:text-blue-300">Help</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Sign Up</h1>
                    <div className="flex flex-wrap justify-center gap-12">
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
                                    <div className="mb-4 relative">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        {/* Eye Icon */}
                                        <div
                                            className="absolute right-3 top-8 cursor-pointer text-gray-500"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition"
                                    >
                                        Sign Up
                                    </button>
                                </form>
                                <p className="mt-4 text-center text-gray-600">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-blue-600 hover:underline">
                                        login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Civic Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Signup;
