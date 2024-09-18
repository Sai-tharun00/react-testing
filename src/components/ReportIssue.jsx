import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from './firebase';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

const ReportIssue = ({ isAuthenticated, userRole }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('pothole');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [leaders, setLeaders] = useState([]);
    const [selectedLeaders, setSelectedLeaders] = useState([]);

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const leadersRef = collection(db, 'leaders');
                const q = query(leadersRef, where('categories', 'array-contains', category));
                const querySnapshot = await getDocs(q);
                const fetchedLeaders = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    position: doc.data().position,
                    category: doc.data().category,
                }));
                setLeaders(fetchedLeaders);
            } catch (error) {
                console.error("Error fetching leaders:", error);
            }
        };

        fetchLeaders();
    }, [category]);

    const validateForm = () => {
        const newErrors = {};

        if (title.length < 5) newErrors.title = 'Title must be at least 5 characters long.';
        if (description.length < 10) newErrors.description = 'Description must be at least 10 characters long.';
        if (location.length < 5) newErrors.location = 'Location must be at least 5 characters long.';
        if (image) {
            const validImageTypes = ['image/jpeg', 'image/png'];
            if (!validImageTypes.includes(image.type)) newErrors.image = 'Please upload a valid image file (JPEG, PNG).';
        } else {
            newErrors.image = 'Please upload an image.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImageUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            return await getDownloadURL(imageRef);
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const imageUrl = await handleImageUpload();
                const uniqueId = new Date().getTime().toString(); // Use timestamp as a unique ID

                await addDoc(collection(db, 'issues'), {
                    id: uniqueId,
                    title,
                    description,
                    location,
                    category,
                    imageUrl,
                    taggedLeaders: selectedLeaders,
                });

                toast.success('Your issue has been successfully reported!');
                setTitle('');
                setDescription('');
                setLocation('');
                setCategory('pothole');
                setImage(null);
                setSelectedLeaders([]);
                setErrors({});
            } catch (error) {
                console.error("Error reporting issue:", error);
                toast.error('There was an error reporting your issue.');
            }
        }
    };

    const handleLeaderSelection = (e) => {
        const options = Array.from(e.target.selectedOptions);
        setSelectedLeaders(options.map(option => option.value));
    };

    return (
        <div className="bg-gray-100 font-sans">
            <header className="bg-gray-900 text-white shadow-lg">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Civic Network</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/report" className="bg-blue-600 px-3 py-1 rounded-md">Report Issue</Link></li>
                        <li><Link to="/track" className="hover:text-blue-300">Track Issues</Link></li>
                        {isAuthenticated && userRole === 'citizen' && <li><Link to="/citizendashboard" className="hover:text-blue-300">Citizen Dashboard</Link></li>}
                        {isAuthenticated && userRole === 'leader' && <li><Link to="/leaderdashboard" className="hover:text-blue-300">Leader Dashboard</Link></li>}
                        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
                    </ul>
                    <div className="profile">
                        <img src="/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </div>
                </nav>
            </header>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Report an Issue</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">Issue Title</label>
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
                            <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-2">Description</label>
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
                            <label htmlFor="category" className="block text-lg font-semibold text-gray-800 mb-2">Category</label>
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
                            <label htmlFor="location" className="block text-lg font-semibold text-gray-800 mb-2">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.location ? 'border-red-500' : ''}`}
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-2">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/jpeg, image/png"
                                onChange={(e) => setImage(e.target.files[0])}
                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm ${errors.image ? 'border-red-500' : ''}`}
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="leaders" className="block text-lg font-semibold text-gray-800 mb-2">Tag Leaders</label>
                            <select
                                id="leaders"
                                name="leaders"
                                multiple
                                value={selectedLeaders}
                                onChange={handleLeaderSelection}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                {leaders.map(leader => (
                                    <option key={leader.id} value={leader.id}>
                                        {leader.position} - {leader.category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Report Issue
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReportIssue;









