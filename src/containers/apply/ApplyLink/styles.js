import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledApplyLink = styled.div`
  width: 100%;
  height: 35vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  background-image: linear-gradient(
    41deg,
    ${({ theme }) => theme.palette.BLUE_PASTEL} 0%,
    ${({ theme }) => theme.palette.GREEN_PASTEL} 25%,
    ${({ theme }) => theme.palette.PINK_PASTEL} 50%,
    ${({ theme }) => theme.palette.YELLOW20_PASTEL} 75%,
    mediumpurple 100%
  );
`;

export const Link = styled.div`
  margin: 0;
  font-size: 4rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.BLACK_NEWTRO};
  cursor: pointer;
  
  ${media.lessThan('medium')`
    font-size: 2rem;
  `};
`;

export const PeriodText = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
`;
