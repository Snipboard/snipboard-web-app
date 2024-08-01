import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase.js'; // Adjust the path as needed
import Snip from './Snip';

const RecentSnipsCard = () => {
    const [snips, setSnips] = useState([]); // Define state for snips

    useEffect(() => {
        fetchSnips();
    }, []);

    const fetchSnips = async () => {
        try {
            const userDoc = doc(db, 'users', '0K0bpBzcoQttJEpg2cgI'); // Get the document reference
            const snipsCollection = collection(userDoc, 'snips'); // Get the subcollection reference
            const snipsSnapshot = await getDocs(snipsCollection);
            const snipsList = snipsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSnips(snipsList);
        } catch (error) {
            console.error('Error fetching snips:', error);
        }
    };

    return (
        <div className="bg-darkBlue text-lightBlue p-4 rounded-xl shadow-l h-max">
            <h2 className="text-2xl font-bold mb-4">Recent Snips</h2>
            <div className="pt-4 space-y-4">
                {snips.map(snip => (
                    <Snip
                        key={snip.id}
                        language={snip.languages}
                        code={snip.content}
                        title={snip.title}
                        description={snip.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecentSnipsCard;