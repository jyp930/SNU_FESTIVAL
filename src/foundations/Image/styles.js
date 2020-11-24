import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${({ isLoading }) => (isLoading ? 0 : 100)}%;
  object-fit: cover;
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
