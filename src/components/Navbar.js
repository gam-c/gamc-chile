import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { keyframes } from '@emotion/react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation('common');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const bounceAnimation = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  `;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 0 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <a>
              <Image src="/logo.png" alt="GAMC Chile Logo" width={190} height={40} />
            </a>
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Link href="/" passHref legacyBehavior>
            <Button
              sx={{
                color: 'black',
                '&:hover': {
                  animation: `${bounceAnimation} 1s ease`,
                },
              }}
            >
              {t('home')}
            </Button>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Button
              sx={{
                color: 'black',
                '&:hover': {
                  animation: `${bounceAnimation} 1s ease`,
                },
              }}
            >
              {t('about')}
            </Button>
          </Link>
          <Link href="/products" passHref legacyBehavior>
            <Button
              sx={{
                color: 'black',
                '&:hover': {
                  animation: `${bounceAnimation} 1s ease`,
                },
              }}
            >
              {t('products')}
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              sx={{
                color: 'black',
                '&:hover': {
                  animation: `${bounceAnimation} 1s ease`,
                },
              }}
            >
              {t('contactUs')}
            </Button>
          </Link>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/" passHref legacyBehavior>
              <a style={{ color: 'black', textDecoration: 'none' }}>{t('home')}</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/about" passHref legacyBehavior>
              <a style={{ color: 'black', textDecoration: 'none' }}>{t('about')}</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/products" passHref legacyBehavior>
              <a style={{ color: 'black', textDecoration: 'none' }}>{t('products')}</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/contact" passHref legacyBehavior>
              <a style={{ color: 'black', textDecoration: 'none' }}>{t('contactUs')}</a>
            </Link>
          </MenuItem>
        </Menu>
        <Box sx={{ ml: 2 }}>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
