import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { rgba } from 'polished';

export const StyledTreasureGuide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  width: 65%;
  min-width: 264px;
  max-width: 300px;
  height: 100%;
  
  ${FlexCenterStyle};
  
  img {
    width: 100%;
    height: 100%;
    transform: translate(-5%, 0);
  }
  
  p {
    position: absolute;
    transform: translate(0, -30%);
    font-weight: bold;
    font-size: 4rem;
    color: ${({ theme }) => theme.palette.PURPLE80};
  }
`;

// TODO: 코드 중복
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 164px;
  height: 36px;
  border-radius: 18px;
  background-color: ${rgba('#aeb0cc', 0.4)};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;
