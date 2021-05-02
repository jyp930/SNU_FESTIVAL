import styled from 'styled-components';
import { rgba } from 'polished';
import media from 'styled-media-query';

export const StyledGameTournament = styled.div`
  position: relative;
`;

export const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  background-image: linear-gradient(
    ${rgba('#e3e5ff', 1.76)},
    white
  );
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  p {
    margin: 0;
    text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
    line-height: 1.4;
    word-break: keep-all;
  }

  p:nth-of-type(1) {
    color: ${({ theme }) => theme.palette.PURPLE50};
    font-size: 1.5rem;
    font-weight: 500;
    padding-bottom: 1rem;
    ${media.greaterThan('medium')`
      margin-top: -2rem;
    `};
  }
  
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  p:nth-of-type(3) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.PURPLE50};
`;

export const Teams = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan('medium')`
    margin: 1rem 0 3rem;
  `};
  
  div:nth-of-type(1), div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    
    p {
      margin: 0.5rem 2rem;
      text-align: center;
      font-size: 1.5rem;
      
      &:first-of-type {
        color: ${({ theme }) => theme.palette.GRAY80};
        font-weight: 500;
      }
      
      &:last-of-type {
        color: ${({ theme }) => theme.palette.PURPLE50};
        font-weight: bold;
      }
    }
  }
  
  div:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.PURPLE50};
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const Image = styled.div`
  align-self: center;
  width: 80%;
  height: 100%;
  margin: 1rem 0 1.5rem;
  
  ${media.greaterThan('medium')`
    width: 47%;
    height: auto;
    margin: 0;
  `};
`;
