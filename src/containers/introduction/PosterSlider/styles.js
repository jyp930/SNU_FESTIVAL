import styled from 'styled-components';
import media from 'styled-media-query';

export const SliderContainer = styled.div`
  height: 50vh;
`;

export const CardItem = styled.div`
  width: calc(150vw / ${props => props.length});
  ${media.lessThan('medium')`
    width: calc(400vw / ${props => props.length});
  `};

  box-sizing: border-box;
  padding: 0 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
