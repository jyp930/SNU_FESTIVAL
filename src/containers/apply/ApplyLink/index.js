import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Flash from 'react-reveal/Flash';

function ApplyLink() {
  const openApplyGoogleForm = useCallback(() => {
    window.open('https://naver.com', '_blank');
  }, []);

  return (
    <S.StyledApplyLink>
      <S.Link
        onClick={openApplyGoogleForm}
      >
        <Flash
          forever
          duration={2500}
        >
          지원 링크!
        </Flash>
      </S.Link>
    </S.StyledApplyLink>
  );
}
export default ApplyLink;

ApplyLink.propTypes = {

};
