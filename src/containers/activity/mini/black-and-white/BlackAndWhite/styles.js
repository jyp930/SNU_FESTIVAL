import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledBlackAndWhite = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: linear-gradient(-80deg, white 55%, ${({ theme }) => theme.palette.GRAY100} 0%);
  ${media.lessThan('large')`
     background: linear-gradient(-80deg, white 60%, ${({ theme }) => theme.palette.GRAY100} 0%);
  `};
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  box-sizing: border-box;
`;

export const Zoom = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.base};
  
  @keyframes pulse {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
  }
  
  transform: scale(0.9);
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-duration: 1s;
`;
