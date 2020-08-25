import styled from 'styled-components';
import { zIndex } from '@S/index';

export const ImageWrapper = styled.div`
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 20vw;
  height: 20vh;
`;

export const StyledGoodsImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: ${zIndex.base};
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  &:hover {
    transition: 1s;
    width: 200%;
    height: 200%;
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
    z-index: 5;
  }
`;
