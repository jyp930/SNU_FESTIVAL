import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToast = styled.div`

`;

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
