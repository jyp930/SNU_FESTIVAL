import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledGuestbook = styled.div`
  //height: 100;
  //width: 100%;
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
