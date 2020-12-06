import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Flash from 'react-reveal/Flash';

function ApplyLink() {
  const openApplyGoogleForm = useCallback(() => {
    window.open('https://bit.ly/21봄축하사모집', '_blank');
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
          https://bit.ly/21봄축하사모집
        </Flash>
      </S.Link>
    </S.StyledApplyLink>
  );
}
export default ApplyLink;

ApplyLink.propTypes = {

};
