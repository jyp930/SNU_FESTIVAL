import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import SubTitle from '@I/introduction/sub_title.png';
import Title from '@I/introduction/title.png';
import Period from '@I/introduction/period.png';
import MascotsInSpeechBubble1 from '@I/mascot/mascots-in-speech-bubble-1.svg';
import MascotsInSpeechBubble2 from '@I/mascot/mascots-in-speech-bubble-2.svg';
import Poster21Spring from '@I/poster/21spring.png';
import Poster21SpringCastle from '@I/poster/21springCastle.png';
import * as S from './styles';

function BasicInfoSection({ isMobile }) {
  const title = useMemo(() => (
    <S.Title widths={[450, 450, 270]}>
      <Fade left distance="40px" delay={100}>
        <S.AbsoluteImage src={SubTitle} alt="FESWORLD" widths={[240, 240, 150]} top={1} left={1} />
      </Fade>
      <Fade right distance="40px" delay={200}>
        <S.AbsoluteImage src={Title} alt="FESWORLD" widths={[230, 230, 150]} top={isMobile ? 25 : 35} right={isMobile ? -10 : -20} rotate={1} duration={0.5} />
      </Fade>
      <Fade bottom distance="20px" delay={100}>
        <S.AbsoluteImage src={Period} alt="FESWORLD" widths={[140, 140, 75]} top={isMobile ? 80 : 115} right={1} />
      </Fade>
      <Fade bottom distance="10px" delay={300}>
        <S.AbsoluteImage src={MascotsInSpeechBubble1} alt="FESWORLD" widths={[140, 140, 100]} top={isMobile ? 65 : 100} left={1} />
      </Fade>
      <Fade top distance="10px" delay={100}>
        <S.AbsoluteImage src={MascotsInSpeechBubble2} alt="FESWORLD" widths={[140, 140, 100]} top={1} right={-1} />
      </Fade>
    </S.Title>
  ), [isMobile]);

  const mainPoster = (
    <Fade left distance="30px" delay={200}>
      <S.PosterWrapper widths={[360, 340, 270]} heights={[360, 340, 270].map(num => num * 1.41)}>
        <S.AbsoluteImage src={Poster21Spring} alt="21spring" widths={[360, 340, 270]} top={0} left={1} />
        <S.AbsoluteImage src={Poster21SpringCastle} alt="21spring" widths={[360, 340, 270].map(num => num * 0.7)} top={isMobile ? 115 : 150} left={isMobile ? 40 : 50} move={1} duration={1} />
      </S.PosterWrapper>
    </Fade>
  );
  const festivalDescription = (
    <Fade right distance="30px">
      <S.FestivalDescription>
        초대장을 받고 온라인 세계로 들어와 도착한 페스월드!
        <br />
        고릴라리온과 리오와 함께 페스월드의 이곳 저곳을 돌아다녀보자!
        <br />
        페스월드에서 미션들을 수행하다보면 상품을 얻을지도 모른다고…?
        <br />
        재밌겠다! 비대면 축제는 처음이야!
      </S.FestivalDescription>
    </Fade>
  );

  return (
    <>
      {isMobile && (
        <S.MobileBasicInfo>
          {title}
          {mainPoster}
          {festivalDescription}
        </S.MobileBasicInfo>
      )}
      {!isMobile && (
        <S.BasicInfo>
          <div>
            {mainPoster}
          </div>
          <div>
            {title}
            {festivalDescription}
          </div>
        </S.BasicInfo>
      )}
    </>
  );
}
export default BasicInfoSection;

BasicInfoSection.propTypes = {
  isMobile: PropTypes.bool,
};

BasicInfoSection.defaultProps = {
  isMobile: false,
};
