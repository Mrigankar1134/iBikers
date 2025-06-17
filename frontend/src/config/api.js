// API configuration

// Determine the base URL based on the environment
const isDevelopment = import.meta.env.DEV;

// Use localhost in development, Netlify function path in production
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5002/api' 
  : '/.netlify/functions/api';

export default API_BASE_URL;