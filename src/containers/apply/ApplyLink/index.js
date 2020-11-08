import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function ApplyLink() {
  const openApplyGoogleForm = useCallback(() => {
    window.open('https://naver.com', '_blank');
  }, []);

  return (
    <S.StyledApplyLink>
      <S.Link
        onClick={openApplyGoogleForm}
      >
        지원 링크!
      </S.Link>
    </S.StyledApplyLink>
  );
}
export default ApplyLink;

ApplyLink.propTypes = {

};
