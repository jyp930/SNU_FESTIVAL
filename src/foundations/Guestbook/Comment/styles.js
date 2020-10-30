import styled from 'styled-components';

export const StyledComment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`;

export const CommentThread = styled.div`
  margin-bottom: 0.5rem;
`;

export const MainBox = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 2rem;
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
  color: #999999;
  font-size: 0.9rem;
`;

export const Id = styled.div`
  font-size: 0.9rem;
`;

export const Like = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

export const Time = styled.div`
  margin-right: 1rem;
`;

export const Delete = styled.div`
  cursor: pointer;
`;

export const Content = styled.div`
  font-size: 1rem;
  word-break: keep-all;
`;
