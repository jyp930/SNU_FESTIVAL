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
`;

export const TextSection = styled.div`
  padding: 3rem 2rem;
`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.PURPLE50};
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
  
  color: ${({ theme }) => theme.palette.GRAY80};
`;

export const Notice = styled.p`
  margin-top: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.GRAY80};
  line-height: 1.67;
`;

export const Evaluation = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.GRAY60};
`;
