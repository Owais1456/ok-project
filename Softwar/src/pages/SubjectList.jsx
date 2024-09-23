import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../RoomCard';

const SubjectList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const productList = await response.json();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products: ', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = () => {
    navigate('/user-registration'); // Adjust the path for user registration
  };

  const handleAddClick = () => {
    navigate('/booking-form'); // Navigate to booking form
  };

  return (
    <Box className="p-4">
      <Box className="flex flex-col items-center bg-gray-700 p-4 mb-4 rounded-lg">
        <Typography variant="h4" component="h1" className="text-white" style={{ textAlign: "center" }}>
          Room List
        </Typography>
        {/* Uncomment if needed
        <Button
          onClick={handleAddClick}
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          className="mt-2"
        >
          Add
        </Button>
        */}
      </Box>

      {loading ? ( // Show loading indicator while fetching
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <RoomCard
                imageUrl={product.images[0]}
                title={product.title}
                price={product.price}
                onClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SubjectList;
