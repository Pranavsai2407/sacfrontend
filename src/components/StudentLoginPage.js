import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function StudentLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        // Here, you would typically send a request to the backend to authenticate the student
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Redirect to the homepage or another page on successful login
                navigate('/home'); // Navigate to the Homepage
            } else {
                setErrorMessage('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setErrorMessage('Error logging in. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)} // Navigate to the previous page
                    className="absolute top-4 left-4 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                >
                    &larr; Back
                </button>

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Student Login</h2>

                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account?</p>
                    <a href="/register" className="text-blue-500 hover:underline">Register Here</a>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;
