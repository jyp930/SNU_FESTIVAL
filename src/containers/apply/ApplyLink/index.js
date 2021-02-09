import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Flash from 'react-reveal/Flash';
import { EventBehavior } from '@U/initializer/googleAnalytics';

function ApplyLink() {
  const openApplyGoogleForm = useCallback(() => {
    EventBehavior('Apply', 'Click Google Form', 'click google form in apply page');
    window.open('https://bit.ly/21봄축하사모집', '_blank');
  }, []);

  return (
    <S.StyledApplyLink>
      <S.Link>
        <Flash
          forever
          duration={2500}
        >
          지금은 모집 기간이 아닙니다.
        </Flash>
      </S.Link>
      <S.PeriodText>
        5월에 새로운 모습으로 찾아뵙겠습니다.
      </S.PeriodText>
    </S.StyledApplyLink>
  );
}
export default ApplyLink;

ApplyLink.propTypes = {

};
