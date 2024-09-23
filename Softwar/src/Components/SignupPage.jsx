import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink, useNavigate } from 'react-router-dom';
import image from '../../public/pic1.jpg';
import jawan from '../../public/logo1 (1).png';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/'); // Redirect if user is logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = async () => {
    setError(''); // Clear any previous errors

    // Validate input fields
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Navigate to login page after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      setError(error.message); // Set error message to display
    }
  };

  return (
    <Grid container sx={{ height: "fit-content" }}>
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          backgroundColor: 'white', 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          justifyContent: 'flex-start',  
          flexDirection: 'column',
          padding: 3 
        }}
      >
        <img src={jawan} alt="Logo" style={{ width: 100 }} />
        <Typography sx={{ textAlign: "center", fontSize: 25, marginTop: 8 }} gutterBottom>
          <span style={{ color: "tomato" }}>WELCOME TO HOTEL MANAGEMENT SYSTEM</span>
        </Typography>
        <img src={image} alt="LMS" style={{ width: '80%', maxWidth: '80%', height: 'auto' }} />
      </Grid>
      <Grid 
        item 
        xs={12} 
        md={6} 
        sx={{ 
          display: 'flex',
          backgroundColor: 'whitesmoke', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column', 
          padding: 3 
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '400px', color: "tomato" }}>
          <Typography variant="h5" gutterBottom align="center">
            SIGN UP
          </Typography>

          <TextField 
            label="First Name" 
            type='text'
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={Boolean(error && !firstName)}
            helperText={error && !firstName ? 'First name is required' : ''}
          />

          <TextField 
            label="Last Name" 
            type='text'
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={Boolean(error && !lastName)}
            helperText={error && !lastName ? 'Last name is required' : ''}
          />

          <TextField 
            label="Email"
            type='email'
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error && !email)}
            helperText={error && !email ? 'Email is required' : ''}
          />

          <TextField 
            label="Password" 
            variant="outlined" 
            type={showPassword ? 'text' : 'password'} 
            fullWidth 
            margin="normal" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error && !password)}
            helperText={error && !password ? 'Password is required' : ''}
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />

          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Button 
            style={{ marginTop: 50, backgroundColor: "tomato" }}
            variant="contained" 
            fullWidth 
            onClick={handleSignup}
          >
            Sign Up
          </Button>

          <Typography align="center" sx={{ marginTop: 2, fontSize: 20, color: 'green' }}>
            <span style={{ color: "tomato" }}>Or</span> 
            <NavLink to="/login" style={{ color: 'tomato', marginLeft: 5 }}>
              <span>Already have a profile?</span>
            </NavLink>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
