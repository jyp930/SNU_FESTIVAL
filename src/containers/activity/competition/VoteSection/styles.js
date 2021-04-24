import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledVoteSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2px;
  
  & p {
    padding: 0 1rem;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
`;

export const TabItem = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;

  color: ${props => (props.isSelected ? props.theme.palette.PURPLE50 : props.theme.palette.GRAY60)};
  transition: color 0.2s;
`;

export const SubmitSection = styled.div`
  & p {
    text-align: center;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
`;

export const SubmitButton = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  height: 4rem;
  
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  color: white;
  cursor: pointer;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  
  ${props => props.isDisabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `};
`;
