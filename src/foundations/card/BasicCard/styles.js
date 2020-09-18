import styled from 'styled-components';
import FCard from '@F/card/Card';

export const StyledBasicCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const Card = styled(FCard)`
  
`;

export const Img = styled.img`
  width: 100%;
  height: 35%;

  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 65%;
  
  box-sizing: border-box;
  padding: 30px 35px;
`;
