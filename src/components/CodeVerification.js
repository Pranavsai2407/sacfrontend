import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CodeVerification() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const correctCode = '12345'; // Replace with your actual access code
        if (code === correctCode) {
            navigate('/addclub'); // Redirect to Add Club page
        } else {
            setError('Invalid code. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">Enter Access Code</h2>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                            Access Code
                        </label>
                        <input
                            id="code"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CodeVerification;
