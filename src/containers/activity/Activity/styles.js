import styled from 'styled-components';

export const StyledActivity = styled.div`

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardItem = styled.div`
  width: 80vw;
  height: 10rem;
  margin: 1.5rem 0;
`;

export const Sal = styled.div`
  width: 100%;
  height: 100%;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  
  transition: all .25s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 1rem rgba(33, 33, 33, .3);
    transform: scale(1.03);
  }
`;

export const ActivityTitle = styled.p`
  margin: 0;
  color: white;
  font-size: 2rem;
`;
