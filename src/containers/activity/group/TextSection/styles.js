import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledTextSection = styled.div`
  width: 100%;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Texts = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  p {
    margin: 0;
    word-break: keep-all;
  }
  p:nth-of-type(1) {
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
  p:nth-of-type(2) {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6;
    color: ${({ theme }) => theme.palette.GRAY80};
  }
`;
