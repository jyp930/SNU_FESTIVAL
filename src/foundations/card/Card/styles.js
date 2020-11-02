import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  
  border-radius: 10px;
  padding: 0; 
  
  background-color: white;
  box-shadow: 0 39px 67px 3px hsla(0, 0%, 67.5%, .3);
  transition: all .25s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.03);
  }
`;
