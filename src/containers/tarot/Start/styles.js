import styled from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';
import media from 'styled-media-query';

export const Bottoms = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * (3 / 10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
    
  ${media.between('medium', 'large')`
    padding-top: 1rem;
    box-sizing: border-box;
  `};

  p {
    color: white;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }
`;

export const Button = styled.div`
  width: 80%;
  max-width: 500px;
  margin-top: 2rem;
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
