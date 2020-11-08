import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 17rem;
`;

export const Title = styled.div`
  width: 100%;
  height: 50%;
  margin: 0;
  user-select: none;
`;

export const Description = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;

  margin-top: 2rem;
  text-align: center;
`;

export const DescriptionText = styled.span`
  word-break: keep-all;
  font-weight: lighter;
`;
