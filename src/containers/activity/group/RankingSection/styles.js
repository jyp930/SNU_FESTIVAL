import styled from 'styled-components';

export const StyledRankingSection = styled.div`
  width: 100%;
  margin: 2rem 0;
  
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.PURPLE50};
`;
