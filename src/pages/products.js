import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Products = () => {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nuestros Productos
        </Typography>
        <Typography variant="body1" paragraph>
          Aquí puedes encontrar información sobre nuestros productos.
        </Typography>
      </Box>
    </Container>
  );
};

export default Products;
