import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledPageLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.windowHeight}px;
  z-index: ${({ theme }) => theme.zIndex.loading};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${rgba('purple', 0.1)};
`;

export const Animation = styled.div`
  max-width: 280px;
  max-height: 280px;
  width: 50vw;
  height: 50vw;
`;

export const Message = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
