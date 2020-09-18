import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Card({ children, className }) {
  return (
    <S.StyledCard
      className={className}
    >
      { children }
    </S.StyledCard>
  );
}
export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};
