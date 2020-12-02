import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledGuestbook = styled.div`
  width: 100%;
  height: 100%;
  background-color: linen;
  position: relative;
`;

export const GuestbookBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;

  box-sizing: border-box;
  padding: 0 15vw;
  ${media.lessThan('medium')`
    padding: 0 1rem;
  `};
`;

export const WaveWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  pointer-events: none;
  opacity: 0.5;
`;
