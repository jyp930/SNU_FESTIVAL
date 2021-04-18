import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Title({ title, decorationOne, decorationTwo }) {
  return (
    <S.StyledTitle>
      <p>{decorationOne}</p>
      <p>{decorationTwo}</p>
      <p>{title}</p>
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  decorationOne: PropTypes.string.isRequired,
  decorationTwo: PropTypes.string.isRequired,
};
