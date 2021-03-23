import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledDeletePopup = styled.div`
`;

export const DeletePopup = styled.div`
  ${media.lessThan('medium')`
    padding: 1rem;
  `};
  width: 12rem;
  height: 7rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  border-radius: 8px;
  background-color: white;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const InputBox = styled.input`
  width: 10rem;
  padding: 2px 7px;
  border: 0;
  border-bottom: 1px solid #757575;
  border-radius: 0;
  outline: 0;
  font-size: 0.9rem;
  transition: border .15s ease-in-out, padding .15s ease-in-out;
  &:focus{
    padding: 2px 7px 0;
    border-bottom: 3px solid lightpink;
  }
`;

export const Button = styled.button`
  height: 2rem;
  width: 4rem;

  cursor: pointer;
  font-size: 0.9rem;
  transition: .15s;

  border: 2px solid lightpink;
  border-radius: 8px;
  outline: 0;
    
  color: lightpink;
  background-color: white;
  &:hover{
    color: white;
    background-color: lightpink;
  }
`;
