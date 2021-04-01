import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function HauntedHouseTheme() {
  const [state, setState] = useState(1);

  return (
    <S.StyledHauntedHouseTheme>
      HauntedHouseTheme
      {state}
    </S.StyledHauntedHouseTheme>
  );
}
export default HauntedHouseTheme;

HauntedHouseTheme.propTypes = {

};
