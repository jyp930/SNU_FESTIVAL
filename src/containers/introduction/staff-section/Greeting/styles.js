import styled from 'styled-components';

export const StyledGreeting = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
`;

export const TopText = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.PURPLE50};
  
  & > div {
    margin: 0 1rem;
    border: 1px solid ${({ theme }) => theme.palette.PURPLE50};
    height: 0;
    width: 95px;
  }
`;

export const Images = styled.div`
  & > img {
    width: 145px;
    height: auto;
    position: absolute;
    bottom: 0;
    
    &:last-of-type {
      width: 70px;
      bottom: 2px;
    }
  }
`;
