import styled from 'styled-components';
import { palette } from '@S/index';

export const StyledSingleCard = styled.div`

`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${palette.ORANGE_NEWTRO};
  border: 15px solid ${palette.WHITE_NEWTRO};

  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
