import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Title from '@C/performance/common/Title';
import Window from '@I/goods/window.png';
import Guide from '@C/performance/common/Guide';
import { HeaderContent } from '@F/layout/Header';
import { withTheme } from 'styled-components';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@F/Image';
import * as S from '../common/styles';

function SingStealer({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  const title = <Title decorationOne="RnB, 힙합, 발라드 장르 불문!" decorationTwo="매력적인 목소리들로 채워가는" title="씽스틸러" />;
  const image = <S.Image><Image src={Window} alt="" /></S.Image>;
  const guide = <Guide youtubeUrl="https://naver.com" date="5월 11일" times={['14:00~16:00']} />;

  return (
    <S.Wrapper>
      <HeaderContent>씽스틸러</HeaderContent>
      {isMobile && (
        <S.MobileBody>
          {title}
          {image}
          {guide}
        </S.MobileBody>
      )}
      {!isMobile && (
        <S.BodyWrapper>
          <S.Body>
            {image}
            <div>
              {title}
              {guide}
            </div>
          </S.Body>
        </S.BodyWrapper>
      )}
      <MascotForMission
        performance="singStealer"
      />
    </S.Wrapper>
  );
}
export default withTheme(SingStealer);

SingStealer.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
