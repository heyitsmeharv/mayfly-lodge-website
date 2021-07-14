import React from 'react';
import styled from 'styled-components/macro';

// images
import banner from 'images/banner.jpg';
import topdown from 'images/topdown.jpg';

import { Box } from '@material-ui/core';

const StyledImage = styled.img`
  opacity: 0.8;
`;

const Title = styled(Box)`
  font-family: 'norwester';
  font-size: 10rem;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const SubTitle = styled(Title)`
  font-family: 'Libre Baskerville';
  font-size: 4rem;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;


export default function Header() {
  return (
    <Box
      css={`
        position: relative;
        text-align: center;
      `}
    >
      <StyledImage src={banner} alt="banner" />
      <Box>
        <Title>Mayfly-Lodge</Title>
        <SubTitle>Cotswold Lakeside Retreat</SubTitle>
      </Box>
    </Box>
  );
}