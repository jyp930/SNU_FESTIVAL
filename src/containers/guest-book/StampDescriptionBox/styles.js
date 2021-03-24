import styled from 'styled-components';
import { rgba } from 'polished';
import '@/static/font/font.css';

export const StyledStampDescriptionBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: -2px;
  
  background-color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.45)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};
  
  padding: 15px 8px 0 7px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.3);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  width: 100%;
  height: 90%;

  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${rgba('#faf8fb', 0.95)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};

  font-family: 'PFStardust', sans-serif;
  line-height: 1.2;
`;

export const MascotImage = styled.img`
  position: absolute;
  right: 5px;
  bottom: -4px;

  width: 100px;
  height: auto;
`;

export const Title = styled.p`
  margin: 0 0 5px 0;
  color: ${({ theme }) => theme.palette.PURPLE50};
  font-size: 1.1rem;
`;

export const Description = styled.div`
  margin: 0;
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 0.8rem;
`;
