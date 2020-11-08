import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Opening from '@C/apply/opening';
import ApplyLink from '@C/apply/ApplyLink';

function Apply() {
  return (
    <S.StyledApply>
      <Opening />
      <ApplyLink />
    </S.StyledApply>
  );
}
export default Apply;

Apply.propTypes = {

};
