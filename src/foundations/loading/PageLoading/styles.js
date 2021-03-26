import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledPageLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.loading};

  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;

  background-color: ${rgba('purple', 0.2)};
`;
