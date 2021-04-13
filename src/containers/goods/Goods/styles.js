import styled from 'styled-components';

export const StyledGoods = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  
  max-width: 1000px;
  color: ${({ theme }) => theme.palette.GRAY80};
  padding: 1rem 2rem;
  box-sizing: border-box;
`;
