import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const registerUser = (userData) => API.post('/register', userData);
export const loginUser = (userData) => API.post('/login', userData);
export const getProfile = (username) => API.get(`/getprofile/${username}`);
export const uploadProfilePicture = (username, formData) =>
    API.post(`/getprofile/${username}/upload-picture`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const removeProfilePicture = (username) =>
    API.delete(`/getprofile/${username}/remove-picture`);
export const addClub = (clubData) => API.post('/addclub', clubData);
export const getClubs = () => API.get('/getclubs');
export const joinClub = (id, clubname) => API.post(`/joinclub/${id}/${clubname}`);
