import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import ClubList from './components/ClubList';
import AddClub from './components/AddClub';
import CodeVerification from './components/CodeVerification';
import Homepage from './components/Homepage';
import RegisterEvent from './components/RegisterEvent';
import ViewStudents from './components/ViewStudents'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/ClubList" element={<ClubList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register-event" element={<RegisterEvent />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/verify-code" element={<CodeVerification />} />
               <Route path='/view-students' element={<ViewStudents/>}/>

                <Route path="/addclub" element={<AddClub />} />
            </Routes>
        </Router>
    );
}

export default App;
