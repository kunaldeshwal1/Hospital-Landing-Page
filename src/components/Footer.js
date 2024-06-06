import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #f4f4f9;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 MediCare+</p>
  </FooterContainer>
);

export default Footer;
