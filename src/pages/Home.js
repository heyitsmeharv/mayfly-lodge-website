import React from 'react';
import styled from 'styled-components/macro';

// components
import { Box } from '@material-ui/core';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

export default function Home() {
  return (
    <Box>
      <Header />
      <Navbar />
    </Box>
  );
}