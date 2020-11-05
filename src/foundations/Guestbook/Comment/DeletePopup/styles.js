import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .toast {
    color: black;
    text-align: center;
  }
`;

export const StyledDeletePopup = styled.div`
`;

export const DeletePopup = styled.div`
  background-color: ghostwhite;
  width: 12rem;
  height: 7rem;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  border: 1px solid;
`;

export const InputBox = styled.input`
  margin: 0.5rem;
  padding: 2px 7px;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  background-color: transparent;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0;
    border-bottom: 3px solid #fddde6;
  }
`;

export const ButtonBox = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
