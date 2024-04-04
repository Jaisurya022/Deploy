import React from 'react';
import { Container, Stack } from '@mui/material';
import Nav from './Nav';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (

    <Stack sx={{ height: '100vh' }}>
      <Nav />
      <Container maxWidth="xl" sx={{ pt: 10, pb: 2, flex: 1 }}>
        {children}
      </Container>
    </Stack>
  );
}
