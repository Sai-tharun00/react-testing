import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from './firebase'; // Firebase imports
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';

const states = {
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bengaluru', 'Mysuru'],
    Telangana: ['Hyderabad', 'Warangal'],
    Kerala: ['Thiruvananthapuram', 'Kochi'],
    Delhi: ['New Delhi', 'Dwarka'],
};

const districts = {
    Mumbai: ['South Mumbai', 'Bandra'],
    Pune: ['Hinjewadi', 'Kothrud'],
    Bengaluru: ['Whitefield', 'Koramangala'],
    Mysuru: ['Jayanagar', 'Vijayanagar'],
    Hyderabad: ['Banjara Hills', 'Secunderabad'],
    Warangal: ['Hanamkonda', 'Kazipet'],
    Thiruvananthapuram: ['Kowdiar', 'Pettah'],
    Kochi: ['Ernakulam', 'Fort Kochi'],
    Delhi: ['Connaught Place', 'Karol Bagh'],
    Dwarka: ['Dwarka Sector 21', 'Dwarka Sector 12'],
};

const areas = {
    'South Mumbai': ['Colaba', 'Marine Drive'],
    Bandra: ['Bandra West', 'Bandra East'],
    Hinjewadi: ['Phase 1', 'Phase 2'],
    Kothrud: ['Kothrud Depot', 'Paud Road'],
    'Whitefield': ['ITPL', 'Hope Farm Junction'],
    'Koramangala': ['1st Block', '4th Block'],
    Jayanagar: ['4th Block', '7th Block'],
    'Vijayanagar': ['8th Stage', '2nd Stage'],
    'Connaught Place': ['Inner Circle', 'Outer Circle'],
    'Karol Bagh': ['Ajmal Khan Road', 'Paharganj'],
    'Dwarka Sector 21': ['IGI Airport', 'Sector 21'],
    'Dwarka Sector 12': ['Sector 12 Market', 'Dwarka Sector 12'],
};

const ReportIssue = ({ isAuthenticated, userRole }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState({ state: '', district: '', area: '' });
    const [category, setCategory] = useState('pothole');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [leaders, setLeaders] = useState([]);
    const [selectedLeaders, setSelectedLeaders] = useState([]);
    const [suggestedStates, setSuggestedStates] = useState([]);
    const [suggestedDistricts, setSuggestedDistricts] = useState([]);
    const [suggestedAreas, setSuggestedAreas] = useState([]);

    // Fetching leaders based on the selected category
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
                console.error('Error fetching leaders:', error);
            }
        };

        fetchLeaders();
    }, [category]);

    // Handling location suggestions and updates
    const handleLocationChange = (e, type) => {
        const value = e.target.value;

        setLocation(prevLocation => ({
            ...prevLocation,
            [type]: value,
        }));

        if (type === 'state') {
            setSuggestedStates(Object.keys(states).filter(state => state.toLowerCase().includes(value.toLowerCase())));
            setSuggestedDistricts([]);
            setSuggestedAreas([]);
        }

        if (type === 'district' && location.state) {
            const districtList = states[location.state] || [];
            setSuggestedDistricts(districtList.filter(district => district.toLowerCase().includes(value.toLowerCase())));
            setSuggestedAreas([]);
        }

        if (type === 'area' && location.district) {
            const areaList = districts[location.district] || [];
            setSuggestedAreas(areaList.filter(area => area.toLowerCase().includes(value.toLowerCase())));
        }
    };

    // Form validation logic
    const validateForm = () => {
        const newErrors = {};

        if (title.length < 5) newErrors.title = 'Title must be at least 5 characters long.';
        if (description.length < 10) newErrors.description = 'Description must be at least 10 characters long.';
        if (!location.state || !location.district || !location.area) newErrors.location = 'Please select a valid state, district, and area.';
        if (image) {
            const validImageTypes = ['image/jpeg', 'image/png'];
            if (!validImageTypes.includes(image.type)) newErrors.image = 'Please upload a valid image file (JPEG, PNG).';
        } else {
            newErrors.image = 'Please upload an image.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Image upload to Firebase storage
    const handleImageUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            return await getDownloadURL(imageRef);
        }
        return null;
    };

    // Submitting the form and saving the issue to Firestore
    const handleSubmit = async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const imageUrl = await handleImageUpload();

                // Add the new issue document to Firestore and get the document reference
                const docRef = await addDoc(collection(db, 'issues'), {
                    title,
                    description,
                    location,
                    category,
                    imageUrl,
                    taggedLeaders: selectedLeaders,
                });

                // Get the unique ID of the newly created document
                const uniqueId = docRef.id;

                // Display a success message with the unique ID
                toast.success(`Issue with ID ${uniqueId} has been reported successfully!`);

                // Reset form fields
                setTitle('');
                setDescription('');
                setLocation({ state: '', district: '', area: '' });
                setCategory('pothole');
                setImage(null);
                setSelectedLeaders([]);
                setErrors({});
            } catch (error) {
                console.error('Error reporting issue:', error);
                toast.error('There was an error reporting your issue.');
            }
        }
    };

    // Handling leader selection for tagging
    const handleLeaderSelection = e => {
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
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">Report an Issue</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${errors.title ? 'border-red-500' : ''}`}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${errors.description ? 'border-red-500' : ''}`}
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    {/* Location Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="State"
                                    value={location.state}
                                    onChange={e => handleLocationChange(e, 'state')}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${errors.location ? 'border-red-500' : ''}`}
                                />
                                <ul className="mt-1">
                                    {suggestedStates.map(state => (
                                        <li key={state} className="cursor-pointer" onClick={() => setLocation({ ...location, state })}>
                                            {state}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="District"
                                    value={location.district}
                                    onChange={e => handleLocationChange(e, 'district')}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${errors.location ? 'border-red-500' : ''}`}
                                />
                                <ul className="mt-1">
                                    {suggestedDistricts.map(district => (
                                        <li key={district} className="cursor-pointer" onClick={() => setLocation({ ...location, district })}>
                                            {district}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Area"
                                    value={location.area}
                                    onChange={e => handleLocationChange(e, 'area')}
                                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${errors.location ? 'border-red-500' : ''}`}
                                />
                                <ul className="mt-1">
                                    {suggestedAreas.map(area => (
                                        <li key={area} className="cursor-pointer" onClick={() => setLocation({ ...location, area })}>
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                    </div>

                    {/* Category Field */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="pothole">Pothole</option>
                            <option value="garbage">Garbage</option>
                            <option value="streetlight">Streetlight</option>
                        </select>
                    </div>

                    {/* Image Upload Field */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/jpeg, image/png"
                            onChange={e => setImage(e.target.files[0])}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    {/* Leader Tagging Field */}
                    <div className="mb-4">
                        <label htmlFor="leaders" className="block text-sm font-medium text-gray-700">Tag Leaders</label>
                        <select
                            multiple
                            id="leaders"
                            value={selectedLeaders}
                            onChange={handleLeaderSelection}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        >
                            {leaders.map(leader => (
                                <option key={leader.id} value={leader.id}>
                                    {leader.position} - {leader.category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
                    >
                        Submit Issue
                    </button>
                </form>
            </main>
        </div>
    );
};

export default ReportIssue;







