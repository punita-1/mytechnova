import Navbar from './Navbar'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = ({ src, alt }) => (
  <img className="logo" src={src} alt={alt} />
);
const Span = styled.span`
  font-family: Arial;
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.helper};
  }
`;
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" style={{ fontFamily: 'Arial', fontSize: '15px', fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>
        <Logo src="public/images/technova_logo.png" alt="Technova'24" />
        <Span>TECHNOVA'24</Span>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 60px;
    max-width: auto; 
  }
`;

export default Header;