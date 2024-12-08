import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import logo from '../components/logo.webp'; // Import the logo image
import newimage from '../images/newimage.jpg'
function Homepage() {
    const [showClubsMenu, setShowClubsMenu] = useState(false); // State to toggle the clubs menu
    const navigate = useNavigate(); // Create navigate function

    const dummyClubs = [
        { name: 'Art Club', description: 'Explore creativity through various art forms.' },
        { name: 'Drama Club', description: 'Perform and learn the art of storytelling.' },
        { name: 'Robotics Club', description: 'Build and innovate with robotics technology.' },
        { name: 'Music Club', description: 'Express yourself through rhythm and melody.' },
    ];

    const extracurricularActivities = [
        { name: 'Basketball', description: 'Join the team and compete in tournaments.' },
        { name: 'Debate', description: 'Hone your argumentation and public speaking skills.' },
        { name: 'Dance', description: 'Showcase your moves and learn new styles.' },
        { name: 'Photography', description: 'Capture moments and improve your skills.' },
    ];

    return (
        <div className="min-h-screen flex">
            {/* Sidebar (fixed) on the right side */}
            <div className="w-48 bg-blue-600 text-white flex-shrink-0 fixed top-0 right-0 bottom-0 z-10">
                <div className="p-6">
                    <h2 className="text-2xl font-bold">Menu</h2>
                </div>
                <ul className="space-y-4 p-6">
                    <li>
                        <button 
                            onClick={() => navigate('/home')} // Navigate to home page on click
                            className="block text-white hover:bg-blue-700 rounded-md p-2 flex items-center"
                        >
                            {/* Home Icon (SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-2">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            Home
                        </button>
                    </li>
                    {/* Clubs Dropdown */}
                    <li>
                        <button
                            onClick={() => setShowClubsMenu(!showClubsMenu)} // Toggle menu visibility
                            className="w-full text-white text-left hover:bg-blue-700 rounded-md p-2 flex items-center"
                        >
                            {/* Clubs Icon (SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-2">
                                <path d="M12 2L2 7h3v7h2V8h6v6h2V7h3l-10-5zm0 17l7-3-1.5-4.5L17 11l-5 2-5-2 1.5 4.5-1.5 4L12 19z" />
                            </svg>
                            Clubs
                        </button>
                        {showClubsMenu && (
                            <ul className="space-y-2 pl-6">
                                <li>
                                    <a
                                        href="/ClubList"
                                        className="block text-white hover:bg-blue-700 rounded-md p-2"
                                    >
                                        View All Clubs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/register-event"
                                        className="block text-white hover:bg-blue-700 rounded-md p-2"
                                    >
                                        Create New Event
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/verify-code"
                                        className="block text-white hover:bg-blue-700 rounded-md p-2"
                                    >
                                        Add Club
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/view-students"
                                        className="block text-white hover:bg-blue-700 rounded-md p-2"
                                    >
                                        View Students
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            onClick={() => navigate(`/profile/johndoe`)} // Navigate to profile with a username
                            className="block text-white hover:bg-blue-700 rounded-md p-2 flex items-center"
                        >
                            {/* Profile Icon (SVG) */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-2">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            Profile
                        </button>

                    </li>
                    <li>
                        <button
                            onClick={() => navigate(`/`)} // Navigate to profile with a username
                            className="block text-white hover:bg-blue-700 rounded-md p-2 flex items-center"
                        >
                            {/* Profile Icon (SVG) */}
                            <img style={{height:"35px",width:"35px" ,marginRight:"10px"}} src={newimage} alt='logoutbutton' />
                            LogOut
                        </button>

                    </li>
                </ul>
            </div>

            {/* Logo at the top-left corner */}
            <div className="absolute top-4 left-4 z-20">
                <img src={logo} alt="Logo" className="w-32 h-32" /> {/* Increased size of the logo */}
            </div>

            {/* Main Content */}
            <div className="flex-grow mr-48 bg-gray-100">
                {/* Hero Section */}
                <div className="bg-blue-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold">Welcome to the Extracurricular Hub</h1>
                        <p className="mt-4 text-lg">
                            Discover exciting clubs and activities to enhance your skills and connect with like-minded peers.
                        </p>
                    </div>
                </div>

                {/* Clubs Section */}
                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Clubs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dummyClubs.map((club, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-blue-600">{club.name}</h3>
                                    <p className="mt-2 text-gray-700">{club.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activities Section */}
                <div className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            Extracurricular Activities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {extracurricularActivities.map((activity, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-green-600">{activity.name}</h3>
                                    <p className="mt-2 text-gray-700">{activity.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
