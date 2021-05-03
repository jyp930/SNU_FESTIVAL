import styled from 'styled-components';
import { ResponsiveHeightStyle } from '@S/responsive/display';

export const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  
  & > p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  ${ResponsiveHeightStyle};
`;
