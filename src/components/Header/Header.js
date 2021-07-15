import React from 'react';
import styled from 'styled-components/macro';

// images
import banner from 'images/banner.jpg';
import topdown from 'images/topdown.jpg';

import { Box } from '@material-ui/core';

const StyledImage = styled.img`
  opacity: 0.8;
  width: 100%;
`;

const Title = styled(Box)`
  font-family: 'norwester';
  font-size: 10rem;
  width: 100%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  @media only screen and (max-width: 1280px) {
    top: 20%;
    font-size: 8.5rem;
  }
  @media only screen and (max-width: 960px) {
    top: 20%;
    font-size: 8rem;
  }
  @media only screen and (max-width: 600px) {
    top: 25%;
    font-size: 6rem;
  }
  @media only screen and (max-width: 500px) {
    top: 20%;
    font-size: 3rem;
  }
`;

const SubTitle = styled(Title)`
  font-family: 'Libre Baskerville';
  font-size: 4rem;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  @media only screen and (max-width: 1280px) {
    top: 40%;
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 960px) {
    top: 50%;
    font-size: 3rem;
  }
  @media only screen and (max-width: 600px) {
    top: 60%;
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 500px) {
    top: 70%;
    font-size: 2rem;
  }
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