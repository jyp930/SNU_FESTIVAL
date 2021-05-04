import React from 'react';
import PropTypes from 'prop-types';
import Polaroid from '@I/activity/home/polaroid.png';
import { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function PolaroidGuide() {
  const { user, isAuthorized } = useUser();

  return (
    <S.StyledPolaroidGuide>
      <S.Polaroid>
        <img src={Polaroid} alt="폴라로이드" />
        <div>
          <span>{isAuthorized ? user.email : '로그인이 필요합니다 :)'}</span>
          <span>갬성 문구</span>
        </div>
      </S.Polaroid>
      <p>
        위 화면을 캡쳐 후
        <br />
        @snufestival 을 태그하고 스토리에
        <br />
        전체공개로 올리면 이벤트 참여 완료!
      </p>
    </S.StyledPolaroidGuide>
  );
}
export default PolaroidGuide;

PolaroidGuide.propTypes = {

};
