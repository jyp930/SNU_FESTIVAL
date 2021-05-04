import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledPolaroidGuide = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  min-width: 264px;
  max-width: 500px;
  height: 100%;
  
  p {
    margin-top: 1.5rem;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.6;
  }
`;

export const Polaroid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
  }
  
  div {
    position: absolute;
    bottom: 5%;
    ${media.greaterThan('large')`
      bottom: 6%;
    `};
    
    left: 10%;
    font-size: 0.8rem;
    word-break: keep-all;
    
    width: 15rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    span:first-of-type {
      color: #e671de;
    }
    span:last-of-type {
      color: ${({ theme }) => theme.palette.GRAY80};
    }
  }
`;
