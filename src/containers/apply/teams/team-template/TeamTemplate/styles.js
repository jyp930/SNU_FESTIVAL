import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledTeamTemplate = styled.div`
  position: relative;
  width: calc(100% / 4);
  height: 45vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;

  ${media.lessThan('large')`
    width: calc(100% / 2);
    height: 50vh;
  `};
  
  ${media.lessThan('medium')`
    width: 100%;
    height: 50vh;
  `};
`;

export const Name = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1rem;
  font-weight: bold;
`;

export const Core = styled.p`
  margin: 0;
  width: 80%;

  font-size: 2rem;
  font-weight: lighter;
  text-align: center;
  word-break: keep-all;
`;
