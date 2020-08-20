import styled from 'styled-components';
import { zIndex } from '@S/index';

export const StyledGoodsImage = styled.img`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 10vw;
  z-index: ${zIndex.base};
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  &:hover {
  transition: 1s;
    width: 30vw;
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
`;
