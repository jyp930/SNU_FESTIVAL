import styled from 'styled-components';

export const OuterStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${props => props.overflow};
`;

export const InnerStyle = styled.div`
  display: flex;
  align-content: center;

  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: auto;
`;
