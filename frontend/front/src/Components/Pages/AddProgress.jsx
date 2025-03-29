import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

function AddProgress() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    taskid: '',
    status: '',
    progress: '',
    time: ''
  });
  
  // Track which fields have been touched/edited
  const [touched, setTouched] = useState({
    userId: false,
    taskid: false,
    status: false,
    progress: false,
    time: false
  });
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validate a single field
  const validateField = (name, value) => {
    switch (name) {
      case 'userId':
        return !value.trim() ? "User ID is required" : "";
        
      case 'taskid':
        if (!value) return "Task ID is required";
        if (isNaN(Number(value))) return "Task ID must be a number";
        return "";
        
      case 'status':
        return !value.trim() ? "Status is required" : "";
        
      case 'progress':
        if (!value) return "Progress is required";
        if (isNaN(Number(value))) return "Progress must be a number";
        if (Number(value) < 0) return "Progress cannot be negative";
        if (Number(value) > 100) return "Progress cannot exceed 100%";
        return "";
        
      case 'time':
        if (!value) return "Time is required";
        if (isNaN(Number(value))) return "Time must be a number";
        if (Number(value) < 0) return "Time cannot be negative";
        return "";
        
      default:
        return "";
    }
  };

  // Validate the entire form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Validate each field and add errors if any
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        tempErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true
      });
    }
    
    // Validate field as user types
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validate field on blur
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(touched).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);
    
    if (validateForm()) {
      setSubmitting(true);
      try {
        const progressData = {
          ...formData,
          taskid: Number(formData.taskid),
          progress: Number(formData.progress),
          time: Number(formData.time)
        };
        
        console.log('Sending data:', progressData);
        
        const response = await axios.post('http://localhost:3000/api/progress', progressData);
        console.log('Response:', response.data);
        
        setSubmitSuccess(true);
        setSubmitError('');
        
        // Reset form after successful submission
        setFormData({
          userId: '',
          taskid: '',
          status: '',
          progress: '',
          time: ''
        });
        
        // Reset touched state
        setTouched({
          userId: false,
          taskid: false,
          status: false,
          progress: false,
          time: false
        });
        
        // Navigate to progress list or home after short delay
        setTimeout(() => {
          navigate('/manage-progress');
        }, 2000);
      } catch (error) {
        // ...existing error handling code...
      } finally {
        setSubmitting(false);
      }
    }
  };

  // Helper to determine if field should show error
  const shouldShowError = (field) => {
    return touched[field] && errors[field];
  };

  return (
    <Container className="py-5">
      <Card className="shadow">
        <Card.Header as="h4" className="bg-primary text-white">
          Add Progress Record
        </Card.Header>
        <Card.Body>
          {submitSuccess && (
            <Alert variant="success">
              Progress record added successfully!
            </Alert>
          )}
          {submitError && (
            <Alert variant="danger">
              {submitError}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={shouldShowError('userId')}
              />
              {shouldShowError('userId') && (
                <div className="text-danger mt-1" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {errors.userId}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Task ID</Form.Label>
              <Form.Control
                type="number"
                name="taskid"
                value={formData.taskid}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={shouldShowError('taskid')}
              />
              {shouldShowError('taskid') && (
                <div className="text-danger mt-1" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {errors.taskid}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={shouldShowError('status')}
              >
                <option value="">Select status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
              {shouldShowError('status') && (
                <div className="text-danger mt-1" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {errors.status}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Progress (%)</Form.Label>
              <Form.Control
                type="number"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                onBlur={handleBlur}
                min="0"
                max="100"
                isInvalid={shouldShowError('progress')}
              />
              {shouldShowError('progress') && (
                <div className="text-danger mt-1" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {errors.progress}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time Spent (minutes)</Form.Label>
              <Form.Control
                type="number"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
                min="0"
                isInvalid={shouldShowError('time')}
              />
              {shouldShowError('time') && (
                <div className="text-danger mt-1" style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {errors.time}
                </div>
              )}
            </Form.Group>

            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                type="submit" 
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Add Progress'}
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddProgress;
