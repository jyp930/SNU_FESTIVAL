import styled from 'styled-components';

export const StyledRandomTextShuffle = styled.div`
  box-sizing:border-box;
  width:100%;
  height:100%;
  margin:0;
  overflow:hidden;
  background:#222;
  font-family: monospace;
`;

export const HeadLine = styled.h1`
  margin-top:0;
`;

export const Shuffler = styled.button`
  font-family: monospace;
  border:2px solid tomato;
  background:transparent;
  width:250px;
  font-size:1.2em;
  padding : 10px 0;
  border-radius:5px;
  display:block;
  cursor:pointer;
  margin:1em auto;
`;

export const Article = styled.p`
  width:80%;
  margin:auto;
  font-size:2em;
  top:50%;
  position:relative;
  transform:translateY(-50%);
`;
