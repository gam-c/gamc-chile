import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact = () => {
  const { t } = useTranslation('common');

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
        alert(t('messageSent'));
      } else {
        alert(t('messageError'));
      }
    } catch (error) {
      alert(t('messageError'));
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
        {t('contactUs')}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6, width: '100%', maxWidth: 600 }}>
        <TextField
          label={t('name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label={t('company')}
          name="company"
          value={formData.company}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label={t('email')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label={t('message')}
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
          {t('send')}
        </Button>
      </Box>
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Contact;
