import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledTarotDetail = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const width = css`
  width: 80%;
  max-width: 500px;
`;

export const Body = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  
  padding: 2rem 0 10rem;
  box-sizing: border-box;
  
  img {
    ${width};
  }
  
  p {
    margin-top: 5rem;
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Button = styled.div`
  ${width};

  margin-top: 5rem;
  border-radius: 5px;
  padding: 1.5rem 0;
  box-sizing: border-box;
  ${HoverStyle};

  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.PURPLE75};
  box-shadow: 0 0 10px 0 #a3a9ff;
  background-color: white;
`;

export const Links = styled.div`
  display: flex;
  
  img {
    width: 5rem;
    height: 5rem;
    margin: 0.5rem;
    ${HoverStyle};
  }
`;
