import styled, { css } from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledVoteSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const SliderSection = styled.div`
  margin: 2rem 0;
`;

export const Item = styled.div`
  margin: 1rem 1rem 2rem;
  
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
  bottom: 1%;
  right: 1%;

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
