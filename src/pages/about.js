import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ flex: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sobre Nosotros
        </Typography>
        <Typography variant="body1" paragraph>
          GAMC Chile es una empresa dedicada a la venta de filtros y materiales para la minería. Con años de experiencia en el sector, nos hemos consolidado como un socio confiable para nuestros clientes, ofreciendo productos de alta calidad y soluciones innovadoras.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Nuestra Historia
        </Typography>
        <Typography variant="body1" paragraph>
          Fundada en [Año de Fundación], GAMC Chile ha crecido y evolucionado para convertirse en uno de los principales proveedores de insumos para la minería en Chile y Sudamérica. Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido expandirnos y fortalecer nuestras relaciones comerciales.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Misión
        </Typography>
        <Typography variant="body1" paragraph>
          Proveer a nuestros clientes con productos y servicios de la más alta calidad, garantizando soluciones eficientes y sostenibles para la industria minera.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Visión
        </Typography>
        <Typography variant="body1" paragraph>
          Ser reconocidos como el proveedor líder de insumos para la minería en Chile y Sudamérica, destacándonos por nuestra innovación, calidad y compromiso con el medio ambiente.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Valores
        </Typography>
        <Typography variant="body1" paragraph>
          En GAMC Chile, nos guiamos por los siguientes valores:
        </Typography>
        <Box component="ul" sx={{ pl: 4 }}>
          <Typography component="li" variant="body1">
            Integridad
          </Typography>
          <Typography component="li" variant="body1">
            Innovación
          </Typography>
          <Typography component="li" variant="body1">
            Calidad
          </Typography>
          <Typography component="li" variant="body1">
            Sostenibilidad
          </Typography>
          <Typography component="li" variant="body1">
            Servicio al Cliente
          </Typography>
        </Box>
      </Container>
      <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: '#333', color: 'white' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
            © 2024 GAMC Chile.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
