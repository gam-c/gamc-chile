import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {
  const { t } = useTranslation('common');

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
        {t('aboutTitle')}
      </Typography>
      <Typography variant="body1" paragraph sx={{ mt: 2, mb: 4 }}>
        {t('aboutText')}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default About;
