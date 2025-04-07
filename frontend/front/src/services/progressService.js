import axios from 'axios';

const API_URL = 'http://localhost:5000/api/progress';

// Create a new progress record
export const createProgress = async (progressData) => {
  try {
    const response = await axios.post(API_URL, progressData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get all progress records
export const getAllProgress = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get progress by ID
export const getProgressById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update progress
export const updateProgress = async (id, progressData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, progressData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete progress
export const deleteProgress = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
