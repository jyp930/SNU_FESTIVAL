import styled from 'styled-components';

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Reverse = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
  transform-origin: center;
`;
