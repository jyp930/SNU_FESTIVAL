import styled from 'styled-components';

export const StyledComment = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  box-sizing: border-box;
`;

export const CommentThread = styled.div`
  margin-bottom: 0.5rem;
`;

export const MainBox = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 5px;
  align-self: flex-start;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaleBox = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.BLACK_NEWTRO};
  opacity: 0.6;
  
  font-size: 0.7rem;
  padding-top: 0.7rem;
`;

export const Id = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.BLACK_NEWTRO};
  opacity: 0.6;
`;

export const Content = styled.div`
  font-size: 1rem;
  font-weight: lighter;
`;

export const Time = styled.div`
  margin-right: 1rem;
`;

export const Delete = styled.div`
  cursor: pointer;
`;
