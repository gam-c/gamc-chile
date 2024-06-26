// src/pages/_app.js

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Box>
      <Footer />
    </Box>
  );
}

export default appWithTranslation(MyApp);
