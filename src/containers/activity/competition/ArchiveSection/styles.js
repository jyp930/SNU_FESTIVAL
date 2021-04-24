import styled from 'styled-components';

export const StyledArchiveSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Title = styled.p`
  text-shadow: 0 3px 6px rgba(147, 151, 214, 0.16);
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.GRAY80};
`;
