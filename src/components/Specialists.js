import React, {useState } from 'react';
import styled from 'styled-components';

const SpecialistsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const SpecialistCard = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  width: 200px;
`;

const Specialists = () => {
  const [specialists, setSpecialists] = useState([{
    name:'Dr. Awaatif Al',
    specialty:'Dental Care'
  },{
    name:'Dr. Filipa Gaspar',
    specialty:'Cardiology'
  },
{
  name:'Dr. Siri Jakobsson',
  specialty:'Prediatrics'
}]);

  return (
    <SpecialistsContainer>
      <h2>We Have The Best Specialists</h2>
      <div>
        {specialists.map(specialist => (
          <SpecialistCard key={specialist.id}>
            <h3>{specialist.name}</h3>
            <p>{specialist.specialty}</p>
          </SpecialistCard>
        ))}
      </div>
    </SpecialistsContainer>
  );
};

export default Specialists;
