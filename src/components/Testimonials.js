import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f4f4f9;
`;

const TestimonialCard = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  width: 200px;
`;

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
      .then(response => setReviews(response.data.data))
      .catch(error => console.error(error));
  }, []);

  //const trim = reviews.Reviews.substring(0, 20)
  return (
    <TestimonialsContainer>
      <h2>What Our Customers Say</h2>
      <div>
        {reviews.map(review => (
          <TestimonialCard key={review.id}>
            <p>{review.rating}☆</p>
            <p>{review.Reviews.substring(0,30)}...</p>
            <p>- {review.Name}</p>
          </TestimonialCard>
        ))}
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
