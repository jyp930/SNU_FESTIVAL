import styled from 'styled-components';
import Slider from '@F/slider/Slider';
import media from 'styled-media-query';

export const StyledIntroduction = styled.div`
  word-break: keep-all;
  overflow-x: hidden;
  ::-webkit-scrollbar {display: none;}
  height: 100vh;
`;

export const WordsContainer = styled.div`
  padding-top: 60px;
  display: flex;
  margin-bottom: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
`;

export const Logo = styled.img`
  width: 30%;
  object-fit: scale-down;
  margin-left: 30px;
  margin-right: 50px;
  @media (max-width: 992px) {
    margin: auto;
    width: 70%;
  }
`;

export const Words = styled.div`
  @media (max-width: 992px) {
    padding: 25px 15px;
  }
`;

export const Content = styled.p`  
  font-size: 17px;
  font-weight: 300;
    @media (max-width: 992px) {
    font-size: 14px;
  }
`;

export const StyledSlider = styled(Slider)`
  
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  @media (max-width: 992px) {
    width: 200vw;
  }
`;

export const CardItem = styled.div`
  width: calc(100%/4);
  height: 60vh;
  
  box-sizing: border-box;
  padding: 15px;
  
  ${media.lessThan('large')`
    width: calc(100% / 4);
  `};

  ${media.lessThan('medium')`
    width: 100%;
    height: 35vh;
  `};
`;
