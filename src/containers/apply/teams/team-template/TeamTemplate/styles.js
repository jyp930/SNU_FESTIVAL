import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledTeamTemplate = styled.div`
  position: relative;
  width: calc(100% / 4);
  height: ${({ theme }) => theme.windowHeight * (45 / 100)}px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;

  ${media.lessThan('large')`
    width: calc(100% / 2);
    height: ${({ theme }) => theme.windowHeight * (50 / 100)}px;
  `};
  
  ${media.lessThan('medium')`
    width: 100%;
    height: ${({ theme }) => theme.windowHeight * (50 / 100)}px;
  `};
`;

export const Name = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1rem;
  font-weight: bold;
`;

export const Core = styled.div`
  width: 80%;

  font-size: 2rem;
  font-weight: lighter;
  text-align: center;
  word-break: keep-all;
`;

// Modal
export const ModalContentWrapper = styled.div`
  width: 50vw;
  height: ${({ theme }) => theme.windowHeight * (70 / 100)}px;
  overflow-y: scroll;
  
  color: white;
  text-align: center;
  
  ${media.lessThan('medium')`
    width: 80vw;
  `}; 
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Content = styled.p`
  line-height: 1.6; 
`;
