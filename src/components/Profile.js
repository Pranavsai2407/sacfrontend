import React, { useState, useEffect } from 'react';

function Profile({ username }) {
    const [profile, setProfile] = useState(null);
    const [newProfilePic, setNewProfilePic] = useState(null); // Track the new profile picture

    useEffect(() => {
        // Fetch user profile from the backend
        async function fetchProfile() {
            const response = await fetch(`http://localhost:8080/getprofile/${username}`);
            const data = await response.json();
            setProfile(data);
        }
        fetchProfile();
    }, [username]);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewProfilePic(reader.result); // Set the new image as a base64 string
        };
        if (file) reader.readAsDataURL(file); // Read the selected file as a base64 string
    };

    const handleRemoveProfilePic = () => {
        setNewProfilePic(null); // Reset the profile picture
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 py-10 px-4">
            {profile ? (
                <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 space-y-8">
                    {/* Header Section */}
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                            {profile.fname} {profile.lname}
                        </h2>
                        <p className="text-lg text-gray-600">Welcome to your profile</p>
                    </div>

                    {/* Profile Picture Section */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-32 h-32 mb-6">
                            {/* Display profile picture */}
                            <img
                                src={newProfilePic || `http://localhost:8080/${profile.profilePicture || ''}`}
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute bottom-0 right-0 mb-2 mr-2">
                                <label htmlFor="profilePic" className="cursor-pointer bg-blue-500 text-white p-2 rounded-full shadow-lg transition-colors duration-300 hover:bg-blue-600">
                                    <i className="fas fa-camera"></i>
                                </label>
                                <input
                                    type="file"
                                    id="profilePic"
                                    accept="image/*"
                                    onChange={handleProfilePicChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Profile Info Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Email:</p>
                            <p className="text-gray-600">{profile.email}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Age:</p>
                            <p className="text-gray-600">{profile.age}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Club:</p>
                            <p className="text-gray-600">{profile.club || 'Not assigned'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Phone Number:</p>
                            <p className="text-gray-600">{profile.phoneNumber || 'Not provided'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Address:</p>
                            <p className="text-gray-600">{profile.address || 'Not provided'}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-700">Registration Date:</p>
                            <p className="text-gray-600">{new Date(profile.registrationDate).toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Remove Profile Picture Button */}
                    {newProfilePic && (
                        <div className="text-center">
                            <button
                                onClick={handleRemoveProfilePic}
                                className="bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-600 transition duration-200"
                            >
                                Remove Picture
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center text-white animate-pulse">
                    <p className="text-lg">Loading profile...</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
