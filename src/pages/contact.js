import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Mensaje enviado con éxito');
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error al enviar el mensaje');
    }
  };

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
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 2 }}>
        Contáctanos
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6, width: '100%', maxWidth: 600 }}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Empresa"
          name="company"
          value={formData.company}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Correo"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
