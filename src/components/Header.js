import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div>MediCare+</div>
    <Nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
