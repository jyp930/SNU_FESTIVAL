import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function BasicCard({ image, content }) {
  return (
    <S.StyledBasicCard>
      <S.Card>
        <>
          <S.Img src={image} alt="image" />
          <S.Content>{ content }</S.Content>
        </>
      </S.Card>
    </S.StyledBasicCard>
  );
}
export default BasicCard;

BasicCard.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};
