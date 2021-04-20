import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { FlexCenterStyle } from '@S/responsive/display';
import { HoverStyle } from '@S/responsive/mouse';
import media from 'styled-media-query';

export const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px);
  overflow-y: hidden;
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
  
  ${media.lessThan('large')`
    max-width: 600px;
    width: 100%;
  `};
`;

export const Star = styled.div`
  position: absolute;
  
  width: ${props => props.r}px;
  height: ${props => props.r}px;
  border-radius: 50%;
  background-color: white;
  
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  
  @keyframes flicker {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  opacity: 0;
  transform: scale(0.5);

  animation-name: flicker;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 930px;
  height: 100%;
`;

export const Guests = styled.div`
  ${FlexCenterStyle};
  margin-top: -4rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const MobileGuests = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  margin-top: -2rem;
  margin-bottom: 2rem;
  width: 100%;
  
  & > div {
    display: flex;
    width: 85%;
    justify-content: space-around;
  }
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 85%;
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

export const Texts = styled.div`
  text-align: ${props => props.textAlign || 'center'};

  div:first-child {
    margin-bottom: 2rem;
    p {
      margin: 0 0 0.5rem;
      color: ${({ theme }) => theme.palette.PURPLE70};
      text-shadow: 0 0 6px rgba(147, 151, 214, 0.45);
      font-weight: bold;
      
      &:first-of-type {
        font-size: 1rem;
      }
      &:last-of-type {
        font-size: 1.8rem;
        ${media.lessThan('small')`
          font-size: 1.5rem;
        `};
      }
    }
  }
  
  div:last-child {
    p {
      margin: 0;
      line-height: 1.6;
      color: ${({ theme }) => theme.palette.GRAY80};
      text-shadow: 0 0 6px rgba(147, 151, 214, 0.45);
      font-weight: 500;
      font-size: 1rem;

      &:last-of-type {
        color: ${({ theme }) => theme.palette.PURPLE50};
      }
    }
  }
`;
