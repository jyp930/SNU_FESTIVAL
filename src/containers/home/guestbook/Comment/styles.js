import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

export const Parallax = styled(InfiniteScroll)`
  max-height: 100vh;
`;

export const StyledComment = styled.div`
  height: 60vh;
  overflow: auto;
  width: 100%;
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
  font-size: 0.7rem;
  padding-top: 0.7rem;
`;

export const Id = styled.div`
  font-weight: lighter;
  font-size: 1rem;
`;

export const Time = styled.div`
  margin-right: 1rem;
`;

export const Delete = styled.div`
  cursor: pointer;
`;

export const Content = styled.div`
  font-size: 0.9rem;
  font-weight: lighter;
  word-break: keep-all;
`;
