import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: #f4f4f9;
  text-align: center;
  padding: 20px;
`;

const Hero = () => (
  <HeroContainer>
    <h1>Welcome to MediCare+ Clinic</h1>
    <p>We are on the leading edge of cancer care.</p>
    <button>Make an Appointment</button>
  </HeroContainer>
);

export default Hero;
