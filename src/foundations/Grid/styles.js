import styled from 'styled-components';

export const StyledGrid = styled.div`

`;

export const Outerstyle = styled.div`
  position: 'relative';
  width: '100%';
  height: '100%';
  overflow: ${props => props.overflow};
`;

export const Innerstyle = styled.div`
  position: 'relative';
  width: '100%';
  overflow: 'auto';
  minHeight: '100%';
`;