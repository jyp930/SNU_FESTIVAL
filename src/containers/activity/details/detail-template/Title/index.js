import React from 'react';
import PropTypes from 'prop-types';
import TypingTextTransition from '@F/text-animation/TypingTextTransition';
import Flip from 'react-reveal/Flip';
import * as S from './styles';

function Title({ title, description }) {
  return (
    <S.StyledTitle>
      <S.Title>
        <TypingTextTransition text={title} intervalTime={50} delayTime={1200} />
      </S.Title>
      <S.Description>
        <Flip left delay={800} duration={500}>
          <S.DescriptionText>{description}</S.DescriptionText>
        </Flip>
      </S.Description>
    </S.StyledTitle>
  );
}
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
