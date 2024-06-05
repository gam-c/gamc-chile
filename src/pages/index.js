import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

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
            alt={t('mining')}
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
          sx={{ mt: 4, fontSize: { xs: '1.5rem', md: '2rem' }}}
        >
          {t('welcome')}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.25rem' }}}
        >
          {t('homepageDescription')}
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
              fontSize: { xs: '0.75rem', md: '1rem' },
              padding: { xs: '8px 16px', md: '12px 24px' },
            }}
          >
            {t('contactUs')}
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
