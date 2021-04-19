import styled from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  background-image: linear-gradient(
    ${({ theme }) => rgba(theme.palette.PURPLE50, 0.65)},
    white
  );
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  position: relative;
  width: 600px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Guests = styled.div`
  margin-top: -50px;
  width: 100%;
  max-width: 1000px;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  max-width: 400px;
  height: 4rem;
  margin: 0 auto;

  color: white;
  background-color: ${({ theme }) => theme.palette.PURPLE50};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;

  ${HoverStyle};
`;
