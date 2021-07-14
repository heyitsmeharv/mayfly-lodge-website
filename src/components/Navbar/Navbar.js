import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { Box } from '@material-ui/core';

const NavButton = styled.button`
  font-family: 'norwester';
  color: white;
  font-size: 2rem;
  margin: 0 5%;
  background: none;
  outline: none!important;
  border: none;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin: 0 2%;
    font-size: 1.6rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  :hover {
    color: #E3FDFD;
  }
`;


const Navbar = () => {
  return (
    <Box
      css={`
        display: flex;
        place-content: center;
        width: 100%;
        height: 52px;
        background: #393E46;
      `}
    >
      <NavButton>
        <StyledNavLink exact to="/">Home</StyledNavLink>
      </NavButton>
      <NavButton>
        <StyledNavLink exact to="/gallery">Gallery</StyledNavLink>
      </NavButton>
      <NavButton>
        <StyledNavLink exact to="/enquire">Enquire</StyledNavLink>
      </NavButton>
      <NavButton>
        <StyledNavLink exact to="/priceandavailability">Prices & Availability</StyledNavLink>
      </NavButton>
      <NavButton>
        <StyledNavLink exact to="/seeanddo">See & Do</StyledNavLink>
      </NavButton>
    </Box>
  );
}

export default Navbar