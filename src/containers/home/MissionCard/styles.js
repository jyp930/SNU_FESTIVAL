import styled from 'styled-components';

export const StyledMissionCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Card = styled.img`
  min-width: 264px;
  max-width: 500px;

  @media (orientation: landscape) {
    width: 60%;
    height: 100%;
  }
  
  @media (orientation: portrait) {
    width: 100%;
    height: auto;
  }
`;
