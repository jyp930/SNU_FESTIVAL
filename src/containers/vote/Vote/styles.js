import styled from 'styled-components';

export const StyledVote = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 0;
  box-sizing: border-box;
`;

export const VoteWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
`;
