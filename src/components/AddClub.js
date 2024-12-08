import React, { useState } from 'react';
import { addClub } from '../api/apiService';

function AddClub() {
    const [form, setForm] = useState({
        name: '',
        size: '',
        achievements: '',
        growth: '',
        description: '',
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addClub(form);
        alert(response.data.message);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Add a New Club</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Club Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter club name"
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Size</label>
                    <input
                        type="text"
                        name="size"
                        placeholder="Enter club size"
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Achievements</label>
                    <input
                        type="text"
                        name="achievements"
                        placeholder="Enter club achievements"
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Growth</label>
                    <input
                        type="text"
                        name="growth"
                        placeholder="Enter club growth"
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter club description"
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Club
                </button>
            </form>
        </div>
    );
}

export default AddClub;
