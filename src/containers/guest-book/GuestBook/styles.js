import styled from 'styled-components';

export const StyledGuestBook = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-height: 65px;
  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  font-size: 1.5rem;
`;

export const StampDescriptionBoxWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const WriteBoxWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.windowHeight - 165) * (1 / 3)}px; // NOTE: header 와 stamp description 의 height 합이 165px
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => (theme.windowHeight - 165) * (2 / 3)}px; // NOTE: header 와 stamp description 의 height 합이 165px
`;
