import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Card, Spinner } from 'react-bootstrap';

function EditProgress() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    userId: '',
    taskid: '',
    status: '',
    progress: '',
    time: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fetchError, setFetchError] = useState('');

  // Fetch progress data by ID
  useEffect(() => {
    const fetchProgressData = async () => {
      if (!id) {
        setFetchError('Progress ID is missing or invalid.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/progress/${id}`);
        const data = response.data;
        
        setFormData({
          userId: data.userId || '',
          taskid: data.taskid || '',
          status: data.status || '',
          progress: data.progress || '',
          time: data.time || ''
        });
        
        setFetchError('');
      } catch (error) {
        console.error("Error fetching progress data:", error);
        setFetchError('Failed to load progress data. Please try again or go back to the list.');
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [id]);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.userId.trim()) {
      tempErrors.userId = "User ID is required";
      isValid = false;
    }

    if (!formData.taskid) {
      tempErrors.taskid = "Task ID is required";
      isValid = false;
    } else if (isNaN(Number(formData.taskid))) {
      tempErrors.taskid = "Task ID must be a number";
      isValid = false;
    }

    if (!formData.status.trim()) {
      tempErrors.status = "Status is required";
      isValid = false;
    }

    if (!formData.progress) {
      tempErrors.progress = "Progress is required";
      isValid = false;
    } else if (isNaN(Number(formData.progress))) {
      tempErrors.progress = "Progress must be a number";
      isValid = false;
    } else if (Number(formData.progress) < 0) {
      tempErrors.progress = "Progress cannot be negative";
      isValid = false;
    } else if (Number(formData.progress) > 100) {
      tempErrors.progress = "Progress cannot exceed 100%";
      isValid = false;
    }

    if (!formData.time) {
      tempErrors.time = "Time is required";
      isValid = false;
    } else if (isNaN(Number(formData.time))) {
      tempErrors.time = "Time must be a number";
      isValid = false;
    } else if (Number(formData.time) < 0) {
      tempErrors.time = "Time cannot be negative";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setSubmitError('Cannot update record: Progress ID is missing or invalid.');
      return;
    }
    
    if (validateForm()) {
      setSubmitting(true);
      try {
        const progressData = {
          ...formData,
          taskid: Number(formData.taskid),
          progress: Number(formData.progress),
          time: Number(formData.time)
        };
        
        console.log('Updating data:', progressData);
        
        const response = await axios.put(`http://localhost:3000/api/progress/${id}`, progressData);
        console.log('Response:', response.data);
        
        setSubmitSuccess(true);
        setSubmitError('');
        
        // Navigate back to the list after short delay
        setTimeout(() => {
          navigate('/manage-progress');
        }, 2000);
      } catch (error) {
        console.error("API Error:", error);
        
        if (error.code === "ERR_NETWORK") {
          setSubmitError("Cannot connect to the server. Please make sure the backend service is running.");
        } else if (error.response) {
          const errorMessage = error.response.data?.message || 
                              (error.response.data && typeof error.response.data === 'string' 
                                ? error.response.data 
                                : JSON.stringify(error.response.data));
          
          setSubmitError(`Server Error (${error.response.status}): ${errorMessage}`);
        } else {
          setSubmitError(`Error: ${error.message}`);
        }
        
        setSubmitSuccess(false);
      } finally {
        setSubmitting(false);
      }
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading progress data...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow">
        <Card.Header as="h4" className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Edit Progress Record</span>
          <Button 
            variant="light" 
            size="sm"
            onClick={() => navigate('/manage-progress')}
          >
            Back to List
          </Button>
        </Card.Header>
        <Card.Body>
          {fetchError && (
            <Alert variant="danger">
              {fetchError}
            </Alert>
          )}
          
          {submitSuccess && (
            <Alert variant="success">
              Progress record updated successfully!
            </Alert>
          )}
          
          {submitError && (
            <Alert variant="danger">
              {submitError}
            </Alert>
          )}
          
          {!id && (
            <Alert variant="danger">
              Invalid progress ID. Please select a valid record to edit.
            </Alert>
          )}
          
          {/* Only show the form if we have a valid ID */}
          {id && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  isInvalid={!!errors.userId}
                />
                <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {errors.userId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Task ID</Form.Label>
                <Form.Control
                  type="number"
                  name="taskid"
                  value={formData.taskid}
                  onChange={handleChange}
                  isInvalid={!!errors.taskid}
                />
                <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {errors.taskid}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  isInvalid={!!errors.status}
                >
                  <option value="">Select status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Progress (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  isInvalid={!!errors.progress}
                />
                <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {errors.progress}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time Spent (minutes)</Form.Label>
                <Form.Control
                  type="number"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  min="0"
                  isInvalid={!!errors.time}
                />
                <Form.Control.Feedback type="invalid" style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {errors.time}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={submitting}
                >
                  {submitting ? 'Updating...' : 'Update Progress'}
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => navigate('/manage-progress')}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditProgress;
