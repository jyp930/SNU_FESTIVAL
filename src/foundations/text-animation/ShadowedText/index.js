import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function ShadowedText({ text, color, backgroundColor, fontRem }) {
  return (
    <S.StyledShadowedText>
      <S.Text
        data-shadow={text}
        color={color}
        backgroundColor={backgroundColor}
        fontRem={fontRem}
      >
        {text}
      </S.Text>
    </S.StyledShadowedText>
  );
}
export default ShadowedText;

ShadowedText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontRem: PropTypes.number,
};

ShadowedText.defaultProps = {
  color: 'darkviolet',
  backgroundColor: 'white',
  fontRem: 10,
};
