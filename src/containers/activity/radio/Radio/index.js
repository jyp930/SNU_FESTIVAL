import React, { useCallback, useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Title from '@I/activity/radio/title.png';
import Guests from '@I/activity/radio/guests.png';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

function Radio({ theme }) {
  const youtubeUrl = 'https://naver.com';
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const goToYoutube = useCallback(() => {
    EventBehavior('Performance', `Click Youtube Link: ${youtubeUrl}`, `go to ${youtubeUrl} by performance page`);
    window.open(youtubeUrl, '_blank');
  }, []);

  return (
    <S.StyledRadio>
      <HeaderContent>보이는 라디오</HeaderContent>
      <S.Body>
        <S.Title>
          <S.Image src={Title} alt="고릴라디오" />
        </S.Title>
        <S.Guests>
          <S.Image src={Guests} alt="고릴라디오" />
        </S.Guests>
        <S.Button onClick={goToYoutube}>보러가기</S.Button>
      </S.Body>
    </S.StyledRadio>
  );
}
export default withTheme(Radio);

Radio.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
