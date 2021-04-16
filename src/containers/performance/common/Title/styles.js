import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    margin: 0;
    text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
    line-height: 1.4;
  }

  p:nth-of-type(1) {
    color: ${({ theme }) => theme.palette.GRAY60};
    font-size: 1.1rem;
    font-weight: 500;
    padding-bottom: 1rem;
  }
  
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.GRAY80};
    font-size: 1.6rem;
    font-weight: bold;
    word-break: keep-all;
  }
  
  p:nth-of-type(3) {
    color: ${({ theme }) => theme.palette.PURPLE50};
    font-size: 2.2rem;
    font-weight: bold;
  }
`;
