import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`

`;

export const MobileBody = styled.div`
  width: 100%;
  
  padding: 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.windowHeight / 1.1}px;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1200px;
  max-height: 600px;
  height: 100%;
  margin: auto;
  
  padding: 2rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  
  & > div {
    width: 47%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 1rem 0 1.5rem;
  
  ${media.greaterThan('medium')`
    width: 47%;
    margin: 0;
  `};
  
  ${media.between('medium', 'large')`
    object-fit: scale-down;
  `};
`;
