import styled from 'styled-components';

export const StyledTextSection = styled.div`

`;

export const PurpleText = styled.span`
  color: ${({ theme }) => theme.palette.PURPLE50};
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.p`
  line-height: 1.67;
  font-weight: 500;
  word-break: keep-all;
`;
