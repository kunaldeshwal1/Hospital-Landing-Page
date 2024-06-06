import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const ServiceCard = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  width: 200px;
`;

const Services = () => (
  <ServicesContainer>
    <h2>Our Services</h2>
    <div>
      <ServiceCard>
        <h3>Dental Care</h3>
      </ServiceCard>
      <ServiceCard>
        <h3>Pulmonary</h3>
      </ServiceCard>
      <ServiceCard>
        <h3>Neurological</h3>
      </ServiceCard>
      <ServiceCard>
        <h3>Pediatrics</h3>
      </ServiceCard>
    </div>
  </ServicesContainer>
);

export default Services;
