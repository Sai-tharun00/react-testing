import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { FaPhone } from 'react-icons/fa'; // Import phone icon

// Navigation component
const Navigation = ({ userRole, toggleLogin }) => (
  <header className="bg-gray-900 text-white shadow-lg">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Civic Network</Link>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
        <li><Link to="/help" className="hover:text-blue-300">Help</Link></li>
        {userRole ? (
          <li><button onClick={toggleLogin} className="hover:text-blue-300">Logout</button></li>
        ) : (
          <>
            <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-300">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  </header>
);

const HelpPage = () => {
  const [userRole, setUserRole] = useState(null); // 'citizen', 'leader', or null

  const toggleLogin = () => {
    setUserRole(prevRole => (prevRole ? null : 'guest')); // Toggle login status
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <Navigation userRole={userRole} toggleLogin={toggleLogin} />

      {/* Main Help Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p className="mt-2">Find the answers to your questions and learn how to use the platform.</p>
        </section>

        {/* FAQs for the Public */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">For the Public:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2"><strong>How do I report an issue through the app?</strong> - Navigate to the <strong>Report Issue</strong> page, fill in the required details, and submit the form.</li>
            <li className="mb-2"><strong>What type of issues can I report?</strong> - You can report any civic issues such as potholes, garbage, broken streetlights, etc.</li>
            <li className="mb-2"><strong>Can I upload multiple photos for the same issue?</strong> - Yes, you can upload multiple photos to provide a clearer understanding of the issue.</li>
            <li className="mb-2"><strong>How will I know if my issue has been received by the authorities?</strong> - You will receive a confirmation email or notification with a unique issue ID once your issue is successfully reported.</li>
            <li className="mb-2"><strong>How long does it take for an issue to be resolved?</strong> - The resolution time varies depending on the issue and its severity. You can check the status on the <strong>Track Issues</strong> page.</li>
            <li className="mb-2"><strong>Can I track the status of my reported issue?</strong> - Yes, use the <strong>Track Issues</strong> page to view real-time updates on your issue.</li>
            <li className="mb-2"><strong>Will I be notified when my issue is resolved?</strong> - Yes, you will receive a notification once your issue is resolved.</li>
            <li className="mb-2"><strong>Can I report an issue anonymously?</strong> - Yes, you can choose to report an issue without providing personal details.</li>
            <li className="mb-2"><strong>What happens if my issue isn't resolved?</strong> - If an issue isn't resolved in a reasonable time, you can escalate it to higher authorities.</li>
            <li className="mb-2"><strong>How can I provide feedback on the quality of the resolution?</strong> - After an issue is resolved, you can provide feedback through a feedback form available on the <strong>Track Issues</strong> page.</li>
          </ul>
        </section>

        {/* FAQs for Public Officials/Authorities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">For Public Officials/Authorities:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2"><strong>How do we receive reported issues?</strong> - Reported issues are sent to your dashboard where you can view and manage them.</li>
            <li className="mb-2"><strong>What type of issues can be addressed through the app?</strong> - The app handles a variety of civic issues including infrastructure, sanitation, and public safety.</li>
            <li className="mb-2"><strong>How do we prioritize and assign tasks to the appropriate department?</strong> - Issues can be prioritized based on severity and assigned to the relevant department through your dashboard.</li>
            <li className="mb-2"><strong>Can we respond directly to citizens through the app?</strong> - Yes, you can communicate with citizens directly via the app to provide updates or request more information.</li>
            <li className="mb-2"><strong>How do we update the status of an issue?</strong> - Update the status through the issue management system on your dashboard.</li>
            <li className="mb-2"><strong>How can we showcase completed projects to the public?</strong> - Completed projects can be highlighted on your dashboard and shared through public announcements on the app.</li>
            <li className="mb-2"><strong>What if an issue requires cooperation with another department?</strong> - You can coordinate with other departments using the app's internal communication features.</li>
            <li className="mb-2"><strong>Is there a way to track recurring issues in a particular area?</strong> - Yes, the app provides analytics and reports to track recurring issues in specific areas.</li>
            <li className="mb-2"><strong>Can we communicate delays or difficulties to the citizens through the app?</strong> - Yes, you can use the app to update citizens on delays or difficulties encountered during issue resolution.</li>
            <li className="mb-2"><strong>How do we ensure transparency in the resolution process?</strong> - Ensure transparency by providing regular updates, maintaining clear communication, and documenting all actions taken on issues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-gray-700 mb-4">
            If you have further questions, feel free to reach out to our support team via email or phone. We're here to help!
          </p>
          <ul className="text-gray-700 flex items-center space-x-2">
            <li><FaPhone className="inline mr-2 text-blue-600" /> +123 456 7890</li>
            <li>Email: support@civicnetwork.com</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HelpPage;

