import styled from 'styled-components';

export const StyledGuessTheSong = styled.div`

`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.PURPLE50},
    ${({ theme }) => theme.palette.GREEN80}
  );
`;

export const TileContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.base};
  position: absolute;
  top: 20%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 100%;
  height: 60%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const Tile = styled.div`
  @keyframes focus {
    0% { opacity: 0; }
    50% { opacity: 0.15; }
    100% { opacity: 0; }
  }

  animation-name: focus;
  animation-duration: 0.2s;
  background-color: black;
  opacity: 0;
`;
