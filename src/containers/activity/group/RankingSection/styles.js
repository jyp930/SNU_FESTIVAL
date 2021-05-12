import styled from 'styled-components';
import media from 'styled-media-query';

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

export const Table = styled.table`
  width: 50%;
  ${media.lessThan('medium')`
    width: 100%;
  `};
  text-align: center;
  
  th {
    border-top: 1px solid ${({ theme }) => theme.palette.PURPLE50};
    border-bottom: 1px solid ${({ theme }) => theme.palette.PURPLE50};
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
  
  td {
    color: ${({ theme }) => theme.palette.GRAY100};
  }
`;
