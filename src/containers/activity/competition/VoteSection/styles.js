import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledVoteSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const ItemSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

export const Item = styled.div`
  width: 50%;
  height: 50%;
  
  ${media.lessThan('medium')`
    width: 100%;
    height: 100%;
  `};

  padding: 1rem 1rem 2rem;
  box-sizing: border-box;
  
  p {
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
    margin: 0;
    line-height: 1.75;
    word-break: keep-all;
  }
  p:nth-of-type(1), p:nth-of-type(2) {
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
  p:last-of-type {
    color: ${({ theme }) => theme.palette.GRAY80};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LikeButton = styled.div`
  position: absolute;
  bottom: 2%;
  right: 2%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  & > img {
    width: 70%;
    height: 65%;
  }
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

export const Pagination = styled.p`
  ${FlexCenterStyle};
  color: white;
  font-weight: 500;
  font-size: 1rem;
  
  span:first-of-type {
    padding-right: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
  }
  
  span:last-of-type {
    padding-left: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;
