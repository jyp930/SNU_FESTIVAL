import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledHome = styled.div`

`;

export const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

// TODO: toast 라이브러리 변경
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
