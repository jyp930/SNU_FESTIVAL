import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledCarousel = styled.div`
  position: relative;
  ${FlexCenterStyle};
  width: ${props => props.fullWidth}px;
  height: ${props => props.fullHeight}px;
  overflow-x: hidden;
  
  & div  {
    position: absolute;
    width: ${props => props.itemWidth}px;
    height: ${props => props.itemWidth}px;
    ${FlexCenterStyle};
    
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.PURPLE20};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
  }
`;
