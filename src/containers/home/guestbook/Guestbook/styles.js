import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledGuestbook = styled.div`

`;

export const GuestbookBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 15vw;
  ${media.lessThan('medium')`
    padding: 1rem;
  `};
`;
