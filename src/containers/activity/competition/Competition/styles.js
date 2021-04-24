import styled from 'styled-components';

export const StyledCompetition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  padding: 2rem;
  box-sizing: border-box;
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
