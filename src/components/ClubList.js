import React, { useEffect, useState } from 'react';
import { getClubs } from '../api/apiService';

function ClubList() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        async function fetchClubs() {
            const response = await getClubs();
            setClubs(response.data);
        }
        fetchClubs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Clubs</h2>
                {clubs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {clubs.map((club) => (
                            <div
                                key={club.name}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-blue-600">{club.name}</h3>
                                <p className="mt-2 text-gray-700">{club.description}</p>
                                <p className="mt-4 text-sm text-gray-500">
                                    <strong>Achievements:</strong> {club.achievements || 'None'}
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    <strong>Size:</strong> {club.size || 'N/A'}
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    <strong>Growth:</strong> {club.growth || 'N/A'}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg animate-pulse">Loading clubs...</p>
                )}
            </div>
        </div>
    );
}

export default ClubList;
