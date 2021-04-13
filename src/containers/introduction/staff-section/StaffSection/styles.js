import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  ${FlexCenterStyle};
  position: relative;
  background-image: linear-gradient(
    white,
    ${({ theme }) => rgba(theme.palette.PURPLE50, 0.3)}
  );
`;

export const StyledStaffSection = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  
  z-index: ${({ theme }) => theme.zIndex.base};
`;
