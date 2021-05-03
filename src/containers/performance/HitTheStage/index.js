import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Title from '@C/performance/common/Title';
import Window from '@I/goods/window.png';
import Guide from '@C/performance/common/Guide';
import { withTheme } from 'styled-components';
import MascotForMission from '@C/performance/common/MascotForMission';
import Image from '@F/Image';
import * as S from '../common/styles';

function HitTheStage({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const title = <Title decorationOne="무대를 가득 채우는 설렘!" decorationTwo="심장을 뛰게 하는 관악 최고의 댄스 무대" title="힛더스테이지" />;
  const image = <S.Image><Image src={Window} alt="" objectFit="scale-down" /></S.Image>;
  const guide = <Guide youtubeUrl="https://naver.com" date="5월 11일" times={['18:00~20:00']} />;

  return (
    <S.Wrapper>
      <HeaderContent>힛더스테이지</HeaderContent>
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
        performance="hitTheStage"
      />
    </S.Wrapper>
  );
}
export default withTheme(HitTheStage);

HitTheStage.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
