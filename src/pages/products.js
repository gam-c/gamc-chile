import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nuestros Productos
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 750,
            height: {
              xs: 300,
              sm: 400,
              md: 500,
              lg: 600,
              xl: 700,
            },
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Añadir sombra
            mx: 'auto',
            mb: 4,
          }}
        >
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true}>
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
              <Image src="/images/canasto1.jpg" alt="Producto 1" fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
              <Image src="/images/duplex2205.jpg" alt="Producto 2" fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
              <Image src="/images/filtro1.jpg" alt="Producto 3" fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
              <Image src="/images/plain.screen.2.jpg" alt="Producto 4" fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
              <Image src="/images/strainer3.jpg" alt="Producto 5" fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </Box>
          </Carousel>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Lista de Productos
            </Typography>
            <Typography variant="body1" paragraph>
              - Producto 1
            </Typography>
            <Typography variant="body1" paragraph>
              - Producto 2
            </Typography>
            <Typography variant="body1" paragraph>
              - Producto 3
            </Typography>
            <Typography variant="body1" paragraph>
              - Producto 4
            </Typography>
            <Typography variant="body1" paragraph>
              - Producto 5
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Materiales Disponibles
            </Typography>
            <Typography variant="body1" paragraph>
              - Material 1
            </Typography>
            <Typography variant="body1" paragraph>
              - Material 2
            </Typography>
            <Typography variant="body1" paragraph>
              - Material 3
            </Typography>
            <Typography variant="body1" paragraph>
              - Material 4
            </Typography>
            <Typography variant="body1" paragraph>
              - Material 5
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1" paragraph>
            Todos nuestros productos son hechos a medida y se ajustan a los requerimientos específicos de cada cliente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
