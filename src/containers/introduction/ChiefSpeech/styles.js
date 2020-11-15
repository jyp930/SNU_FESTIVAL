import styled from 'styled-components';
import media from 'styled-media-query';

export const WordsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem auto 2rem;
  width: 70%;
  
  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
  `};
`;

export const Logo = styled.img`
  width: 30%;
  ${media.lessThan('medium')`
    width: 60%;
    margin-bottom: 2rem;
  `};
`;

export const Words = styled.div`
  width: 65%;
  
  ${media.lessThan('medium')`
    width: 80%;
  `};
`;

export const Content = styled.p`  
  font-size: 1.1rem;
  font-weight: lighter;
  word-break: keep-all;
`;
