import styled from 'styled-components';
import { rgba } from 'polished';

export const LoginGuideBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 264px;
  height: 220px;
  
  background-color: ${({ theme }) => rgba(theme.palette.PURPLE50, 0.45)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};
  
  padding: 5px 8px 6px 7px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.3);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 188px;

  background-color: ${rgba('#faf8fb', 0.95)};
  border: 1px solid ${({ theme }) => theme.palette.PURPLE80};
`;

export const Image = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-end;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const MainSpan = styled.span`
  margin-top: 15px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.43;
  color: ${({ theme }) => theme.palette.GRAY80};
`;

export const SubSpan = styled.span`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => rgba(theme.palette.GRAY80, 0.55)};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  
  width: 164px;
  height: 36px;
  border-radius: 18px;
  background-color: ${rgba('#aeb0cc', 0.4)};
  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 1rem;
  cursor: pointer;
`;
