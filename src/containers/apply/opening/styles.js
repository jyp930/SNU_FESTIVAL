import styled from 'styled-components';
import media from 'styled-media-query';
import { palette } from '@S/index';

export const StyledMain = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  
  ${media.lessThan('medium')`
    height: 100vh;
  `};
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

export const ApplyLinkBox = styled.div`
  position: absolute;
  color: white;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
   
  padding-bottom: 3rem;
  padding-left: 8rem;
 
  ${media.lessThan('medium')`
    padding-bottom: 2rem;
    padding-left: 2rem;
  `};
`;

export const EnglishText = styled.p`
  color: ${palette.WHITE20_NEWTRO};
  font-size: 1rem;
  margin-bottom: 0;
`;

export const KoreanText = styled.p`
  color: ${palette.WHITE_NEWTRO};
  font-size: 2rem;
  font-weight: lighter;
  margin-top: 10px;
  width: 30rem;
  word-break: keep-all;
  
  ${media.lessThan('medium')`
    font-size: 1.5rem;
    width: 20rem;
  `};
`;
