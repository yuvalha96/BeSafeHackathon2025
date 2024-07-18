import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL | '/api',  // Assuming your backend API base URL
  timeout: 5000,  // Timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any headers you need globally here
  },
});

export default instance;
