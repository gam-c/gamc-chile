import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6} textAlign="center">
            <Link href="/" passHref legacyBehavior>
              <a>
                <Image
                  src="/logo.png"
                  alt="GAMC Chile Logo"
                  width={190}
                  height={40}
                  style={{ filter: 'invert(1)' }} // Invertir color del logo
                />
              </a>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              <IconButton color="inherit" href="https://www.linkedin.com/company/gamc-chile" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="mailto:info@gamc.cl">
                <AlternateEmailTwoToneIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
            © 2024 GAMC Chile.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
