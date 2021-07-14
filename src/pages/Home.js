import React from 'react';
import styled from 'styled-components/macro';

// context
import { useViewport } from 'context/ViewportContext';

// components
import { Box } from '@material-ui/core';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

export default function Home() {
  const { width } = useViewport();
  console.log(width);
  return (
    <Box>
      <Header />
      <Navbar />
    </Box>
  );
}