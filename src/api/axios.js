import axios from 'axios';

// Centralized Axios instance configured for StudyFlow REST APIs
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000,
  withCredentials: true,
});

// Response interceptor for clean payload unwrapping and error normalization
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const normalizedError = {
      message: error.response?.data?.message || error.message || 'A network error occurred while communicating with StudyFlow servers.',
      status: error.response?.status,
      data: error.response?.data,
    };
    return Promise.reject(normalizedError);
  }
);

export default api;
