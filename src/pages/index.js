import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: {
              xs: 300, // 300px height on extra small screens
              sm: 400, // 400px height on small screens
              md: 500, // 500px height on medium screens
              lg: 600, // 600px height on large screens
              xl: 700, // 700px height on extra large screens
            },
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Añadir sombra
          }}
        >
          <Image
            src="/desalinizadora.jpg" // Asegúrate de que la imagen esté en el directorio public
            alt="Minería"
            fill
            style={{ objectFit: 'cover' }} // Actualización para Next.js 13
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Agregar la propiedad sizes
            fetchpriority="high" // Corregir el atributo fetchPriority
          />
        </Box>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ mt: 4, fontSize: { xs: '1.5rem', md: '2rem' } }} // Font size adjusts with screen size
        >
          Líderes en Soluciones para Desalinización y Minería
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }} // Font size adjusts with screen size
        >
          Maximiza tu producción con nuestros canastos y filtros autolimpiantes de alta eficiencia, descubre cómo nuestros productos pueden transformar tus operaciones. ¡Contáctanos hoy mismo para obtener más información y una cotización personalizada!

        </Typography>
        <Link href="/contact" passHref>
          <Button
            variant="contained"
            sx={{
              mt: 6,
              backgroundColor: 'grey',
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
              fontSize: { xs: '0.75rem', md: '1rem' }, // Font size adjusts with screen size
              padding: { xs: '8px 16px', md: '12px 24px' }, // Padding adjusts with screen size
            }}
          >
            Contáctanos
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
