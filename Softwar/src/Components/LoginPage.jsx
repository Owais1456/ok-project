import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink, useNavigate } from 'react-router-dom';
import image from '../../public/pic1.jpg';
import jawan from '../../public/logo1 (1).png';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css'; // Import your CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (rememberMe) {
          localStorage.setItem('rememberMe', true);
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('email');
        }
        alert('Login successful');
        navigate('/');
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleVisitClick = () => {
    window.open('https://www.tripadvisor.com/HotelsList-Karachi-Cheap-Hotels-zfp1862550.html', '_blank');
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
        <img src={jawan} alt="" style={{ width: 100 }} />
        <Typography sx={{ textAlign: "center", fontSize: 25, marginTop: 8, marginRight: 10, marginLeft: 10 }} gutterBottom>
          <span style={{ color: "tomato" }}>WELCOME TO HOTEL MANAGEMENT SYSTEM</span>
        </Typography>
        
        {/* Image container for hover effect */}
        <div 
          className="image-container"
          onMouseEnter={() => setIsHovered(true)} // Set hover state
          onMouseLeave={() => setIsHovered(false)} // Reset hover state
          style={{ position: 'relative', width: '100%', maxWidth: '90%' }} // Ensure the container is styled
        >
          <img src={image} alt="LMS" className="hover-image" style={{ width: "100%" }} />
          {isHovered && (
            <button 
              className="visit-button" 
              onClick={handleVisitClick} 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                backgroundColor: 'tomato', 
                color: 'white', 
                border: '2px solid white', 
                borderRadius: '5px', 
                padding: '10px 20px', 
                cursor: 'pointer' 
              }}
            >
              Visit
            </button>
          )}
        </div>
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
            LOGIN
          </Typography>
          
          <TextField 
            label="Email" 
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

          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
            label="Remember me"
          />

          <Button 
            style={{ backgroundColor: 'tomato' }}
            variant="contained" 
            fullWidth 
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>

          <Typography align="center" sx={{ marginTop: 2, fontSize: 20, color: 'tomato' }}>
            Or <NavLink to="/signup" style={{ color: 'tomato' }}>Sign up</NavLink>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
