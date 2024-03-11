import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import axios from 'axios';

const FormComp = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
  const handlePasswordVisibility = () => {
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 1000);
    // setShowPassword(!showPassword);
  };
  const validateForm = () => {
    if (formData.username.length > 32) {
      setValidationError('Username should be up to 32 characters');
      return false;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setValidationError('Phone number should contain up to 10 numbers');
      return false;
    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,12})$/.test(formData.password)) {
      setValidationError(
        'Password should be 6-12 characters and include at least one uppercase letter and one special character'
      );
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return false;
    }

    setValidationError(null);
    return true;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      // Send data to the be
      const response = await axios.post('http://localhost:3000/user/register', formData);
      console.log('Registration successful:', response.data);
      // Dispatch the user data to the Redux 
      dispatch({ type: 'SET_USER_DATA', payload: response.data });
      setShowSnackbar(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box>
      <TextField
        label="User Name"
        value={formData.username}
        onChange={handleChange('username')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange('phoneNumber')}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange('password')}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handlePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handlePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      {validationError && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          {validationError}
        </Alert>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit
      </Button>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Data saved successfully!"
      />
    </Box>
  );
};

export default FormComp;
