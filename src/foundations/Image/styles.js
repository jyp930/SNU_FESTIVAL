import styled, { css } from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${({ isLoading }) => (isLoading ? 0 : '100%')};
`;

export const Skeleton = styled.img`
  width: 100%;
  height: 100%;
  ${props => props.circle && css`
    border-radius: 50%;
  `};
`;
