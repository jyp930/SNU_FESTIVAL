import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from '@I/home/background.png';
import * as S from './styles';

function Background({ image }) {
  return (
    <S.Background src={image} alt="" />
  );
}
export default Background;

Background.propTypes = {
  image: PropTypes.string,
};

Background.defaultProps = {
  image: BackgroundImage,
};
