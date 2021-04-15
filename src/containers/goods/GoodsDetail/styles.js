import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledGoodsDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;

  max-width: 750px;
  color: ${({ theme }) => theme.palette.GRAY80};
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const BasicSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${({ theme }) => theme.palette.GRAY80};
  font-weight: bold;

  div:first-of-type {
    display: flex;
    justify-content: space-between;
    
    
    p:first-of-type {
      margin: 1.5rem 0;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.palette.PURPLE70};
    }
    p:last-of-type {
      margin: 1.5rem 0;
      font-size: 1.3rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Hr = styled.hr`
  color: ${({ theme }) => theme.palette.GRAY80};
  opacity: 0.5;
  margin: 2rem 0;
`;

export const Button = styled.div`
  position: fixed;
  bottom: 1.5rem;
  
  height: 4.5rem;
  width: calc(100% - 4rem);
  max-width: calc(750px - 4rem);
  ${FlexCenterStyle};
  
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  
  cursor: pointer; 
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;
