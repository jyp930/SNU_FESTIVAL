import React from 'react';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import { useHistory } from 'react-router';
import * as S from './styles';

function DisplaySection() {
  const history = useHistory();

  const Item = (url, image, name, price) => (
    <S.Item onClick={() => history.push(`/goods/${url}`)}>
      <S.Window src={image} alt="창" />
      <S.Texts>
        <p>{name}</p>
        <p>{price}</p>
      </S.Texts>
    </S.Item>
  );

  return (
    <S.StyledDisplaySection>
      {Item('hood', Window, '축하사 후드티', 12000)}
      {Item('hood', Window, '축하사 후드티', 12000)}
      {Item('hood', Window, '축하사 후드티', 12000)}
      {Item('hood', Window, '축하사 후드티', 12000)}
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
