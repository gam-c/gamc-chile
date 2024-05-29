import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GAMC Chile
        </Typography>
        <Box>
          <Link href="/" passHref>
            <Button color="inherit">Inicio</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit">Nosotros</Button>
          </Link>
          <Link href="/products" passHref>
            <Button color="inherit">Productos</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contacto</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
