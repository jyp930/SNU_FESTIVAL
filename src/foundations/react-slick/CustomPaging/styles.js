import styled from 'styled-components';
import { palette } from '@S/index';

export const StyledCustomPaging = styled.div`
  width: 30rem;
  height: 30rem;
  margin-left: 10rem;
  
  .slick-dots {
    display: flex !important;
    justify-content: center;
   
    li {
      margin: 0 1rem;
    }
  }
  
  .slick-arrow {
    &:before {
      color: ${palette.BLACK_NEWTRO}; 
    }
  }
`;

export const Preview = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const Item = styled.div`
  height: 30rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
