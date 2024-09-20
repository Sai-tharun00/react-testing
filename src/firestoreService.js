// src/firestoreService.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming firebase config is already set up

// Function to fetch leader data by leaderId
export const fetchLeaderData = async (leaderId) => {
    try {
        const docRef = doc(db, 'leaders', leaderId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const leaderData = docSnap.data();
            console.log("Leader data:", leaderData);
            return leaderData; // returns resolved and unresolved issues
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error fetching leader data:", error);
    }
};
