import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Card({ children }) {
  return (
    <S.StyledCard>
      { children }
    </S.StyledCard>
  );
}
export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
