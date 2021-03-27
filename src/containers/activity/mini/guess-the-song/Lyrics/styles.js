import styled, { css } from 'styled-components';

const lyricsAnimation = css`
  @keyframes lyrics {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  &.Lyrics.active {
    animation-name: lyrics;
    animation-duration: calc(1s);
  }
`;

export const StyledLyrics = styled.div`
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  pointer-events: none;
  
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white;
  font-size: 1.5rem;
  
  opacity: 0;
  ${lyricsAnimation};
`;
