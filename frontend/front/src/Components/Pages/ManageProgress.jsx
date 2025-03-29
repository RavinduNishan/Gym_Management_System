import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiEdit2, FiTrash2, FiPlus, FiRefreshCw, FiCheck, FiX } from 'react-icons/fi';
import { FaChartLine } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ManageProgress() {
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [actionSuccess, setActionSuccess] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [newProgressValue, setNewProgressValue] = useState(0);

  const fetchProgressData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/progress');
      setProgressData(response.data);
      setError('');
    } catch (err) {
      console.error("Error fetching progress data:", err);
      setError('Failed to load progress data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-progress/${id}`);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/progress/${deleteId}`);
      setActionSuccess('Progress record deleted successfully!');
      setShowDeleteModal(false);
      fetchProgressData();
      setTimeout(() => setActionSuccess(''), 3000);
    } catch (err) {
      console.error("Error deleting progress:", err);
      setError('Failed to delete progress record. Please try again.');
      setShowDeleteModal(false);
    }
  };

  const confirmProgressUpdate = (id, currentProgress) => {
    setUpdateId(id);
    setNewProgressValue(currentProgress);
    setShowUpdateModal(true);
  };

  const handleProgressUpdate = async () => {
    try {
      await axios.patch(`http://localhost:3000/api/progress/${updateId}`, {
        progress: newProgressValue
      });
      setActionSuccess('Progress updated successfully!');
      setShowUpdateModal(false);
      fetchProgressData();
      setTimeout(() => setActionSuccess(''), 3000);
    } catch (err) {
      console.error("Error updating progress:", err);
      setError('Failed to update progress. Please try again.');
      setShowUpdateModal(false);
    }
  };

  const getProgressColor = (progress) => {
    if (progress < 5) return 'bg-red-500';
    if (progress < 100) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'not started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <FaChartLine className="text-blue-600 text-3xl mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Manage Progress Records</h1>
          </div>
          <button
            onClick={() => navigate('/add-progress')}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            <FiPlus className="mr-2" />
            Add New Progress
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p>{error}</p>
          </div>
        )}
        {actionSuccess && (
          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
            <p>{actionSuccess}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && progressData.length === 0 && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No progress records found</h3>
            <p className="text-gray-500 mb-4">Get started by adding a new progress record</p>
            <button
              onClick={() => navigate('/add-progress')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              Add Progress Record
            </button>
          </div>
        )}

        {/* Progress Table */}
        {!loading && progressData.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Progress
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time (min)
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {progressData.map((progress) => (
                    <tr key={progress.id || progress._id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{progress.id || progress._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {progress.userId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {progress.taskid}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(progress.status)}`}>
                          {progress.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full mr-2">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getProgressColor(progress.progress)}`}
                                style={{ width: `${progress.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 w-12 text-right">
                            {progress.progress}%
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {progress.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => confirmProgressUpdate(progress.id || progress._id, progress.progress)}
                            className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition"
                            title="Update Progress"
                          >
                            <FiRefreshCw className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(progress.id || progress._id)}
                            className="text-indigo-600 hover:text-indigo-900 p-1 rounded-md hover:bg-indigo-50 transition"
                            title="Edit"
                          >
                            <FiEdit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => confirmDelete(progress.id || progress._id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition"
                            title="Delete"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Confirm Delete</h3>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">Are you sure you want to delete this progress record? This action cannot be undone.</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Update Progress</h3>
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-4">
                <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">
                  Progress Percentage (0-100)
                </label>
                <input
                  type="number"
                  id="progress"
                  min="0"
                  max="100"
                  value={newProgressValue}
                  onChange={(e) => setNewProgressValue(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getProgressColor(newProgressValue)}`}
                    style={{ width: `${newProgressValue}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {newProgressValue}%
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-md mb-6">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Note:</span> Status will automatically change to:
                </p>
                <ul className="text-sm text-blue-700 list-disc pl-5 mt-1">
                  <li>0% = "Not Started"</li>
                  <li>1-99% = "In Progress"</li>
                  <li>100% = "Completed"</li>
                </ul>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProgressUpdate}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition flex items-center"
                >
                  <FiCheck className="mr-2" />
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ManageProgress;