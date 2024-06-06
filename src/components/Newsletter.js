import React from 'react';
import styled from 'styled-components';

const NewsletterContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: #007BFF;
  color: white;
`;

const Newsletter = () => (
  <NewsletterContainer>
    <h2>Subscribe to Newsletter</h2>
    <input type="email" placeholder="Enter your email address" />
    <button>Send Now</button>
  </NewsletterContainer>
);

export default Newsletter;
