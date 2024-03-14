import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from "react-icons/cg";
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(user.email);


  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setUser(userData);
    } else {
      setUser(null);
    }
  });

  const Nav = styled.nav`
  
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
          color: ${({ theme }) => theme.colors.black};
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
        <div className={openMenu ? "menuIcon active" : "menuIcon"}>
          <ul className="navbar-list">
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/">
                Home
              </NavLink></li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/about">
                About
              </NavLink></li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/event">
                Events
              </NavLink></li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/gallery">
                Gallery
              </NavLink></li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/contact">
                Contact
              </NavLink></li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to={user ? "/profile" : "/signup"}>
                {user ? "Profile" : "Signup"}
              </NavLink></li>

          </ul>
          {/* //nav icon */}
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
};
export default Navbar;
