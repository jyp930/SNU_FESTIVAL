import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledIntroduction = styled.div`

`;

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

export const SliderContainer = styled.div`
  height: 70vh;
`;

export const CardItem = styled.div`
  width: calc(150vw / ${props => props.length});
  ${media.lessThan('medium')`
    width: calc(400vw / 6);
  `};
  height: 90%;

  box-sizing: border-box;
  padding: 1rem;
`;
