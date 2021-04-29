import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledRiddle = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const OpeningWrapper = styled.div`
  ${FlexCenterStyle};
  ${media.lessThan('large')`
    flex-direction: column;
  `};
`;

export const Opening = styled.div`
  position: relative;
  margin: 1rem 2rem;
  ${HoverStyle};

  width: 526px;
  height: 526px;
  ${media.lessThan('large')`
    width: ${({ theme }) => theme.windowHeight * (3.5 / 10)}px;
    height: ${({ theme }) => theme.windowHeight * (3.5 / 10)}px;
  `};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  word-break: keep-all;
  text-align: center;
  ${media.lessThan('large')`
    font-size: 1.8rem;
  `};
`;

export const Texts = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.PURPLE50};
`;
