import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import media from 'styled-media-query';

export const StyledWriteBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InputStyle = css`
  margin: 5px 0;
  border: 0;
  border-radius: 0;
  outline: 0;

  color: ${({ theme }) => theme.palette.PURPLE50};
  font-size: 1rem;
`;

export const InputBox = styled.input`
  ${InputStyle};
  min-height: 1.8rem;
  box-sizing: border-box;

  border-bottom: 1px solid ${({ theme }) => theme.palette.PURPLE50};
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    border-bottom: 2px solid ${({ theme }) => theme.palette.PURPLE50};
  }
  
  background-color: transparent;
  font-weight: bold;
  width: 6rem;
  padding: 2px 7px;
  
  &::placeholder {
    color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.4)};
  }
`;

export const TextArea = styled.textarea`
  ${InputStyle};

  resize: none;
  flex: 1;
  background-color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.15)};
`;

export const Submit = styled.button`
  align-self: flex-end;
  margin: 5px 0;

  width: 4.5rem;
  height: 2.25rem;
  font-size: 0.8rem;

  border: 1px solid transparent;
  border-radius: 18px;
  outline: 0;

  cursor: pointer;

  color: ${({ theme }) => theme.palette.GRAY80};
  background-color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.45)};
  transition: color, background-color, .15s;
  &:hover{
    color: ${({ theme }) => theme.palette.PURPLE50};
    background-color: ${({ theme }) => rgba(theme.palette.GRAY80, 0.45)};
  }
  
  ${media.lessThan('medium')`
    width: 5rem;
    height: 2.5rem;
    font-size: 1rem;
  `};
`;
