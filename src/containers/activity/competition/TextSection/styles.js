import styled from 'styled-components';

export const TextSection = styled.div`

`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.PURPLE50};
`;

export const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.GRAY60};
  word-break: keep-all;
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
  word-break: keep-all;
  
  color: ${({ theme }) => theme.palette.GRAY80};
`;

export const Notice = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.GRAY80};
  line-height: 1.67;
  word-break: keep-all;
`;

export const Evaluation = styled.p`
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.GRAY60};
  line-height: 1.5;
`;
