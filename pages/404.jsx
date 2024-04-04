import React from 'react';
import Link from 'next/link';
import { Button, Stack, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function NotFound() {
  return (
    <Stack spacing={2} sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3">Oops...</Typography>
      <Typography variant="h5">That page cannot be found</Typography>
      <Link href="/">
        <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon />}>Go Home </Button>
      </Link>
    </Stack>
  );
}
