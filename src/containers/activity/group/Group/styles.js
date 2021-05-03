import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';

export const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 750px;

  padding: 2rem 0 10rem;
  box-sizing: border-box;
  ${media.lessThan('medium')`
    padding: 2rem 2rem 10rem;
  `};
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: 중복 코드
export const Button = styled.div`
  position: fixed;
  bottom: 1.5rem;
  
  height: 4.5rem;
  width: calc(100% - 4rem);
  max-width: 750px;
  ${FlexCenterStyle};
  
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
