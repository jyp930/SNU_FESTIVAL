import styled from 'styled-components';
import media from 'styled-media-query';

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
