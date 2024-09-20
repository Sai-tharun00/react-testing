import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import Firestore instance
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore methods
import { useParams } from 'react-router-dom';

const StatusPage = () => {
    const [issue, setIssue] = useState(null);
    const [loading, setLoading] = useState(true);
    const { issueId } = useParams();

    useEffect(() => {
        const fetchIssue = async () => {
            try {
                const issueDoc = await getDoc(doc(db, 'issues', issueId));
                if (issueDoc.exists()) {
                    setIssue(issueDoc.data());
                } else {
                    console.error('No such issue!');
                    setIssue(null); // Ensure issue state is cleared
                }
            } catch (error) {
                console.error('Error fetching issue:', error);
                setIssue(null); // Ensure issue state is cleared in case of error
            } finally {
                setLoading(false);
            }
        };

        fetchIssue();
    }, [issueId]);

    if (loading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (!issue) {
        return <div className="text-center py-12 text-red-500">Issue not found</div>;
    }

    // Hardcoded data for demonstration purposes
    const demoIssue = {
        reportedBy: 'Anonymous',
        reportDate: new Date('2021-07-17T00:00:00Z'),
        status: 'unresolved',
        assignedTo: null,
        startDate: null,
        resolvedBy: null,
        resolveDate: null,
    };

    const issueData = issue || demoIssue;

    const formatDate = (timestamp) => {
        return timestamp ? new Date(timestamp).toLocaleDateString('en-GB') : 'N/A';
    };

    const getFormattedStatus = () => {
        if (!issueData.status) {
            return 'N/A'; // Return a default value if status is undefined
        }
        return issueData.status.charAt(0).toUpperCase() + issueData.status.slice(1);
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <header className="bg-gray-900 text-white shadow-md py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Civic Network</h1>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Status of Issue #{issueId}</h1>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Issue Details:</h2>
                        <p className="mb-2"><strong className="font-medium">Reported By:</strong> {issueData.reportedBy || 'Anonymous'}</p>
                        <p className="mb-2"><strong className="font-medium">Report Date:</strong> {formatDate(issueData.reportDate)}</p>
                        <p className="mb-4"><strong className="font-medium">Status:</strong> {issueData.status || 'N/A'}</p>
                        {issueData.status === 'in-progress' && (
                            <div className="mb-4">
                                <p className="mb-2"><strong className="font-medium">Assigned To:</strong> {issueData.assignedTo || 'N/A'}</p>
                                <p className="mb-2"><strong className="font-medium">Start Date:</strong> {formatDate(issueData.startDate)}</p>
                            </div>
                        )}
                        {issueData.status === 'resolved' && (
                            <div className="mb-4">
                                <p className="mb-2"><strong className="font-medium">Resolved By:</strong> {issueData.resolvedBy || 'N/A'}</p>
                                <p className="mb-2"><strong className="font-medium">Resolve Date:</strong> {formatDate(issueData.resolveDate)}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Issue Status</h2>
                        <p className="text-xl text-gray-600">Status: {getFormattedStatus()}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StatusPage;



