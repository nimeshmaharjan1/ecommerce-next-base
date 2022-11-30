import { Box, Button, Container, Typography } from '@mui/material';
import MainLayout from '@shared/layouts/main';
import React from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box sx={{ my: 9 }} style={{ minHeight: '100vh' }}>
        <Typography variant="h1" fontSize={24} fontWeight="bold" component="h2">
          Featured Products
        </Typography>
      </Box>
      <Box sx={{ my: 9 }} style={{ minHeight: '100vh' }}>
        <Typography variant="h1" fontSize={24} fontWeight="bold" component="h2">
          Featured Products
        </Typography>
      </Box>
    </>
  );
};

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
