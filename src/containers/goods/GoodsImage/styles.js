import styled from 'styled-components';
import { zIndex } from '@S/index';
import media from 'styled-media-query';

export const ImageWrapper = styled.div`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${zIndex.base}; 
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 20vh;
  height: 20vh;
  ${media.lessThan('medium')`
    width: 20vw;
    height: 20vw;
  `};

  &:hover{
    z-index: ${zIndex.base + 1};
  }
`;

export const StyledGoodsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 1s;

  &:hover {
    width: 200%;
    height: 200%;
  }
`;
