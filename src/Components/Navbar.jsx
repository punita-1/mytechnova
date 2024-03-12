import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from 'react-icons/cg';

// Define styled components outside of the functional component
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;

  .navbar-list {
    display: flex;
    gap: 1.8rem;
    margin: 0;
    list-style: none;

    li {

      .navbar-link {
        text-align: center;
        width: 70px;
        padding: 2.2rem 0px 1.8rem;
        display: inline-block;
        text-decoration: none;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s linear;

        &.active {
          color: #9EC8B9; 
          border-bottom: 6px solid #9EC8B9; 
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;

    .close-outline {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }

    /* hide the original nav menu  */
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link {
          &:link,
          &:visited {
            
            font-size: 2rem;
          }
          color: ${({theme}) => theme.colors.black};
          &:active {
            color: ${({ theme }) => theme.colors.helper} !important;
          }
        }

      }
    }
     .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }

  /* Add your media query styles here */
`;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <Nav>
      <div className={openMenu ? 'menuIcon active' : 'menuIcon'}>
        <ul className="navbar-list">
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/event">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active" // Apply this class when the link is active
              className="navbar-link"
              onClick={handleNavLinkClick}
              to="/signup">
              Signup
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={handleMenuToggle}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
