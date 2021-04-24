import styled from 'styled-components';

export const StyledArchiveSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 10vh;
`;

export const Title = styled.p`
  text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.GRAY80};
`;

export const Item = styled.div`
  margin: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    margin: 0;
    line-height: 1.75;
  }
  p:first-of-type {
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
  p:last-of-type {
    color: ${({ theme }) => theme.palette.GRAY80};
  }
`;
