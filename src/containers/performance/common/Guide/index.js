import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

function Guide({ date, times, youtubeUrl }) {
  const goToYoutube = useCallback(() => {
    EventBehavior('Performance', `Click Youtube Link: ${youtubeUrl}`, `go to ${youtubeUrl} by performance page`);
    window.open(youtubeUrl, '_blank');
  }, [youtubeUrl]);

  return (
    <S.StyledGuide>
      <S.Texts>
        <p>{date}</p>
        {times.map(time => <p key={time}>{time}</p>)}
        <p>유튜브 라이브 중계 </p>
      </S.Texts>
      <S.Button onClick={goToYoutube}>보러가기</S.Button>
    </S.StyledGuide>
  );
}
export default Guide;

Guide.propTypes = {
  date: PropTypes.string.isRequired,
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  youtubeUrl: PropTypes.string.isRequired,
};
