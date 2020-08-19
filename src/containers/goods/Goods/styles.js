import styled from 'styled-components';
import { palette, zIndex } from '@S/index';
import IU3 from '@I/jpeg/IU3.jpeg';

export const StyledGoods = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  background-image: url(${IU3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  filter: blur(4px);
`;

export const GoodsMainImage = styled.img`
  width: 30vw;
  height: 30vh; 
  z-index: ${zIndex.base};
`;

export const GoodsImage = styled.img`
  
`;
