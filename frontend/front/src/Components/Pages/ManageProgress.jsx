import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Table, Button, Alert, Card, Modal, Spinner, ProgressBar, Form } from 'react-bootstrap';

function ManageProgress() {
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [actionSuccess, setActionSuccess] = useState('');
  // New state variables for progress update
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [newProgressValue, setNewProgressValue] = useState(0);

  // Fetch all progress records
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

  // Handle edit progress
  const handleEdit = (id) => {
    navigate(`/edit-progress/${id}`);
  };

  // Delete confirmation
  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  // Handle delete progress
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/progress/${deleteId}`);
      setActionSuccess('Progress record deleted successfully!');
      setShowDeleteModal(false);
      
      // Instead of filtering, refresh the data completely
      fetchProgressData();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setActionSuccess('');
      }, 3000);
    } catch (err) {
      console.error("Error deleting progress:", err);
      setError('Failed to delete progress record. Please try again.');
      setShowDeleteModal(false);
    }
  };

  // Progress update confirmation
  const confirmProgressUpdate = (id, currentProgress) => {
    setUpdateId(id);
    setNewProgressValue(currentProgress);
    setShowUpdateModal(true);
  };

  // Handle progress update
  const handleProgressUpdate = async () => {
    try {
      const response = await axios.patch(`http://localhost:3000/api/progress/${updateId}`, {
        progress: newProgressValue
      });
      
      setActionSuccess('Progress updated successfully!');
      setShowUpdateModal(false);
      
      // Refresh the data
      fetchProgressData();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setActionSuccess('');
      }, 3000);
    } catch (err) {
      console.error("Error updating progress:", err);
      setError('Failed to update progress. Please try again.');
      setShowUpdateModal(false);
    }
  };

  // Determine progress bar variant based on progress value
  const getProgressVariant = (progress) => {
    if (progress < 5) return 'danger';
    if (progress < 100) return 'warning';
    return 'success';
  };

  return (
    <Container className="py-5">
      <Card className="shadow">
        <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Manage Progress Records</h4>
          <Button variant="light" onClick={() => navigate('/add-progress')}>
            Add New Progress
          </Button>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {actionSuccess && <Alert variant="success">{actionSuccess}</Alert>}
          
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : progressData.length === 0 ? (
            <Alert variant="info">No progress records found.</Alert>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Task ID</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Time (min)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {progressData.map((progress) => (
                    <tr key={progress.id || progress._id}>
                      <td>{progress.id || progress._id}</td>
                      <td>{progress.userId}</td>
                      <td>{progress.taskid}</td>
                      <td>{progress.status}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <ProgressBar 
                            now={progress.progress} 
                            variant={getProgressVariant(progress.progress)} 
                            style={{ width: '100%', height: '20px' }} 
                          />
                          <span className="ms-2">{progress.progress}%</span>
                        </div>
                      </td>
                      <td>{progress.time}</td>
                      <td>
                        <Button 
                          variant="outline-success" 
                          size="sm" 
                          className="me-2"
                          onClick={() => confirmProgressUpdate(progress.id || progress._id, progress.progress)}
                        >
                          Update Progress
                        </Button>
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          className="me-2"
                          onClick={() => handleEdit(progress.id || progress._id)}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => confirmDelete(progress.id || progress._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this progress record? This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Progress Update Modal */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Progress Percentage (0-100)</Form.Label>
              <Form.Control 
                type="number" 
                min="0" 
                max="100" 
                value={newProgressValue} 
                onChange={(e) => setNewProgressValue(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
              />
            </Form.Group>
            <ProgressBar 
              now={newProgressValue} 
              variant={getProgressVariant(newProgressValue)} 
              className="mb-3"
            />
            <Alert variant="info">
              <small>
                Note: Status will automatically change to:
                <ul className="mb-0">
                  <li>0% = "Not Started"</li>
                  <li>1-99% = "In Progress"</li>
                  <li>100% = "Completed"</li>
                </ul>
              </small>
            </Alert>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleProgressUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ManageProgress;
