import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledInformation = styled.div`
  padding-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  ${media.lessThan('medium')`
     flex-direction: column;
     align-items: center;
  `};
`;

export const InfoItem = styled.div`
  width: 20rem;
  padding: 0 1rem;
  
  ${media.lessThan('medium')`
     width: 80%;
     margin-bottom: 1rem;
  `};
`;

export const InfoTitle = styled.p`
  margin: 0;
  padding: 1rem 0 ;
  border-bottom: 1px solid white;
  ${media.lessThan('medium')`
    border-top: 1px solid white;
    border-bottom: none;
  `};
  
  font-weight: bolder;
  font-size: 1.6rem;
`;

export const InfoBody = styled.div`
  
`;

export const InfoBodyItem = styled.div`
  
`;

export const InfoContentTitle = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const InfoContent = styled.p`
  word-break: keep-all;
  line-height: 1.8;
  opacity: 0.9;
`;
