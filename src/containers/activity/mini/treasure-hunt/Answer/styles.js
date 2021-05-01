import styled from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledAnswer = styled.div`
  width: 90%;
  max-width: 500px;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`;

// TODO: 중복 코드
export const InputBox = styled.input`
  outline: 0;
  width: 80%;
  height: 100%;
  padding: 10px 8px;
  border-radius: 13px;
  border: solid 1px transparent;
  background-color: rgba(255, 255, 255, 0.86);

  color: ${props => props.color || props.theme.palette.GRAY80};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  &::placeholder {
    color: ${props => rgba(props.color || props.theme.palette.GRAY80, 0.4)};
  }

  margin-right: 1rem;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 20%;
  height: 100%;
  padding: 10px 0;
  border-radius: 13px;

  color: ${({ theme }) => theme.palette.GRAY90};
  background-color: white;
  font-weight: bold;

  cursor: pointer;
`;
