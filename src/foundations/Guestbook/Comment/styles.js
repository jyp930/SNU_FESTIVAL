import styled from 'styled-components';
import { Popup } from 'reactjs-popup';

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

export const DeletePopup = styled.div`
  width: 12rem;
  height: 7rem;
  magin: auto;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
`;

export const InputBox = styled.input`
  margin: 0.5rem;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0px;
    border-bottom: 3px solid #fddde6;
  }
`;

export const ButtonBox = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
