import styled from 'styled-components';
import media from 'styled-media-query';
import { palette } from '@S/index';
import { ResponsiveFlexItemStyle } from '@S/responsive';

export const StyledFullMap = styled.div`

`;

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${palette.WHITE20_NEWTRO};

  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: center;
  `};
`;

export const ImageFlexItem = styled.div`
  ${ResponsiveFlexItemStyle};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextFlexItem = styled.div`
  ${ResponsiveFlexItemStyle};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  ${media.lessThan('medium')`
    justify-content: center;
  `};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.lessThan('medium')`
    align-items: center;
  `};
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: ${palette.BLACK_NEWTRO};
  
  margin: 0 0 30px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${palette.BROWN_NEWTRO};
  
  margin: 0 0 20px;
`;

export const Supplement = styled.p`
  font-size: 1rem;
  color: ${palette.BROWN20_NEWTRO};

  margin: 0;
`;
