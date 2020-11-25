import styled from 'styled-components';
import { Parallax as SpringParallax } from 'react-spring/renderprops-addons';
import { ToastContainer } from 'react-toastify';

export const StyledHome = styled.div`

`;

export const Parallax = styled(SpringParallax)`
  top: 0;
  left: 0;
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
