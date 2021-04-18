import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledGreeting = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  ${media.greaterThan('medium')`
    height: 200px;
  `};
`;

export const TopText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.PURPLE50};
  font-weight: bold;
  
  & > div {
    margin: 0 1rem;
    border: 1px solid ${({ theme }) => theme.palette.PURPLE50};
    height: 0;
    width: 95px;
  }
`;

export const Images = styled.div`
  & > img {
    width: 145px;
    ${media.greaterThan('medium')`
      width: 300px;
    `};
    
    height: auto;
    position: absolute;
    bottom: 0;
    
    &:last-of-type {
      width: 70px;
      bottom: 2px;
      ${media.greaterThan('medium')`
        width: 144px;
      `};
    }
  }
`;
