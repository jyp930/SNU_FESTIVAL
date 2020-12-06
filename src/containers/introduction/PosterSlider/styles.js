import styled from 'styled-components';
import media from 'styled-media-query';

export const SliderContainer = styled.div`
  height: 60vh;
  
  ${media.lessThan('medium')`
    height: 50vh;
  `};
`;

export const CardItem = styled.div`
  width: calc(150vw / ${props => props.length});
  ${media.lessThan('medium')`
    width: calc(400vw / ${props => props.length});
  `};

  box-sizing: border-box;
  padding: 0 1rem;
`;
