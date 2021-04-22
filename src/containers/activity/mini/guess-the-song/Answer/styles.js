import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import { rgba } from 'polished';

export const StyledAnswer = styled.div`
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.base};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Inputs = styled.div`
  ${FlexCenterStyle};
`;

export const InputBox = styled.input`
  outline: 0;
  width: 8rem;
  height: 2.5rem;
  padding: 10px 8px;
  border-radius: 13px;
  border: solid 0.5px #ffffff;
  background-color: rgba(255, 255, 255, 0.31);

  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.8rem;
  font-weight: bold;
  box-sizing: border-box;
  text-align: center;
  
  &::placeholder {
    color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.4)};
  }
  
  margin: 0 0.5rem;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 7rem;
  height: 2.5rem;
  margin: 1rem;
  background-color: white;
  border-radius: 13px;
  
  color: ${({ theme }) => theme.palette.PURPLE70};
  font-weight: bold;
  
  cursor: pointer;
`;
