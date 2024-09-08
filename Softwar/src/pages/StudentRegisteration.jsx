import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    class: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "students"), data);
      navigate('/student/StudentList'); // Navigate to StudentList after saving the data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        REGISTRATION FORM
      </Typography>
      <TextField
        label="First Name"
        name="firstName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.lastName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="Class"
        name="class"
        variant="outlined"
        margin="normal"
        fullWidth
        type="number"
        required
        value={data.class}
        onChange={handleChange}
      />
      <FormControl component="fieldset" margin="normal" required>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={data.gender}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="female"
            control={<Radio color="success" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="success" />}
            label="Male"
          />
        </RadioGroup>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default StudentRegistration;