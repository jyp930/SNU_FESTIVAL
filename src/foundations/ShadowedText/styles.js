import styled from 'styled-components';

export const StyledShadowedText = styled.div`

`;

export const Text = styled.p`
  margin: 0;  
  color: ${props => props.color};

  font-size: ${props => props.fontRem}rem; 
  text-shadow: ${props => props.backgroundColor};

  &::after {
    content: attr(data-shadow);

    position: absolute;
    top: .06em;
    left: .06em;
    
    text-shadow: none;
    background-image:
      linear-gradient(
        45deg,
        transparent 45%,
        ${props => props.color} 45%,
        ${props => props.color} 55%,
        transparent 0
      );
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    animation: shad-anim 15s linear infinite;
    
    @keyframes shad-anim {
      0% {background-position: 0 0}
      0% {background-position: 100% -100%}
    }
  }
`;
