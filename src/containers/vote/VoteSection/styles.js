import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledVoteSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  transition: color, scale, 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CarouselSection = styled.div`
  align-self: center;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
    border-radius: 10px;
  }
`;

export const TeamInfoSection = styled.div`
  height: 4rem;
`;

export const SubmitSection = styled.div`
  & div {
    ${FlexCenterStyle};
    width: 100%;
    height: 4rem;

    font-size: 1.5rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.PURPLE50};
    color: white;
    cursor: pointer;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  & p {
    text-align: center;
    color: ${({ theme }) => theme.palette.PURPLE50};
  }
`;
