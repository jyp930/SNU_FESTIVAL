import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const StyledWriteBox = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem;
  flex-direction: column;
`;

export const IdPassword = styled.div`
  display: flex;
`;

const InputStyle = css`
  margin: 5px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0;
    border-bottom: 3px solid lightpink;
  }
`;

export const InputBox = styled.input`
  ${InputStyle};

  width: 10rem;
  padding: 2px 7px;
  
  ${media.lessThan('medium')`
    width: 45%;
  `};
`;

export const TextArea = styled.textarea`
  ${InputStyle};

  resize: none;
  height: 5rem;
  padding: 2px 7px 0;
`;

export const Submit = styled.button`
  width: 5rem;
  height: 3rem;
  margin: 0 5px;
  border: 2px solid lightpink;
  border-radius: 8px;
  outline: 0;
  background-color: white;
  cursor: pointer;
  font-size: 1rem;
  color: lightpink;
  align-self: flex-end;
  transition: .15s;
  &:hover{
    color: white;
    background-color: lightpink;
  }
`;
