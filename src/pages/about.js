import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <Container
      sx={{
        py: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
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
          mb: 2,
        }}
      >
        <Image
          src="/planta.png"
          alt="Sobre Nosotros"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </Box>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ mt: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 2, mb: 4 }}>
      En GAMC Chile, somos más que proveedores de soluciones para la minería y desalinización. Somos un equipo de profesionales comprometidos con la excelencia y la innovación. Con el respaldo de Federal Screen Products Inc., líder mundial en fabricación de sistemas de filtración y separación, ofrecemos productos de la más alta calidad para optimizar los procesos de desalinización del agua de mar y producción de cobre.
      <br/>
      Nuestra misión es proporcionar a nuestros clientes herramientas eficientes y duraderas que impulsen su productividad y reduzcan sus costos operativos. Desde nuestra fundación, hemos trabajado incansablemente para establecer relaciones de confianza y colaboración con cada uno de nuestros clientes, entendiendo sus necesidades específicas y ofreciendo soluciones personalizadas.

      Confía en GAMC Chile para llevar tus operaciones al siguiente nivel con productos que cumplen con los más altos estándares internacionales de calidad y rendimiento.


      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: 150, sm: 200, md: 235 }, // Ajuste de tamaño en función del ancho de la pantalla
          mt: 4,
        }}
      >
        <Link href="https://federalscreen.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/federal_screen_logo.jpg"
            alt="Federal Screen Logo"
            width={235}
            height={48}
            layout="responsive"
            objectFit="contain"
          />
        </Link>
      </Box>
    </Container>
  );
};

export default About;
