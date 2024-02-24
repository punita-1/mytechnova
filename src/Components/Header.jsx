import React from "react";
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeaader>
      <NavLink to="/" style={{ fontFamily: 'Arial', fontSize: '28px', fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Technova'24</NavLink>
      <Navbar />
    </MainHeaader>

  )
}

const MainHeaader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
 display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: auto;
  max-width: 30%;
}
`;
export default Header
