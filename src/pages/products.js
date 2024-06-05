import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Products = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('ourProducts')}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 750,
            mx: 'auto',
            mb: 4,
          }}
        >
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true}>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
              <Image src="/images/canasto1.jpg" alt={t('product1')} fill style={{ objectFit: 'cover' }} priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
              <Image src="/images/duplex2205.jpg" alt={t('product2')} fill style={{ objectFit: 'cover' }} priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
              <Image src="/images/filtro1.jpg" alt={t('product3')} fill style={{ objectFit: 'cover' }} priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
              <Image src="/images/plain.screen.2.jpg" alt={t('product4')} fill style={{ objectFit: 'cover' }} priority />
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 300, md: 400, lg: 500 } }}>
              <Image src="/images/strainer3.jpg" alt={t('product5')} fill style={{ objectFit: 'cover' }} priority />
            </Box>
          </Carousel>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              {t('productList')}
            </Typography>
            <Typography variant="body1" paragraph>
              - {t('plainScreen')}
            </Typography>
            <Typography variant="body1" paragraph>
              - {t('baskets')}
            </Typography>
            <Typography variant="body1" paragraph>
              - {t('waterScreen')}
            </Typography>
            <Typography variant="body1" paragraph>
              - {t('selfCleaningFilters')}
            </Typography>
            <Typography variant="body1" paragraph>
              - {t('customProducts')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              {t('availableMaterials')}
            </Typography>
            <Typography variant="body1" paragraph>
              - 304/304L
            </Typography>
            <Typography variant="body1" paragraph>
              - Duplex
            </Typography>
            <Typography variant="body1" paragraph>
              - Hastelloy C-276
            </Typography>
            <Typography variant="body1" paragraph>
              - Monel 400
            </Typography>
            <Typography variant="body1" paragraph>
              - 316/316L
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1" paragraph>
            {t('productsDescription')}
          </Typography>
        </Box>
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

export default Products;
