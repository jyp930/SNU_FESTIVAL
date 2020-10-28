import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  background-color: white;
  border-radius: 50%;

  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 5px 2px;
  transition: box-shadow 0.1s ease-in-out 0s;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 1px 1px 10px 10px;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;
