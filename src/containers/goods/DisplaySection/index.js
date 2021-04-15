import React from 'react';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import * as S from './styles';

function DisplaySection() {
  const Item = (url, image, name, price) => (
    <S.Item>
      <S.Window src={image} alt="창" />
      <S.Texts>
        <p>{name}</p>
        <p>{price}</p>
      </S.Texts>
    </S.Item>
  );

  return (
    <S.StyledDisplaySection>
      {Item('', Window, '축하사 후드티', 12000)}
      {Item('', Window, '축하사 후드티', 12000)}
      {Item('', Window, '축하사 후드티', 12000)}
      {Item('', Window, '축하사 후드티', 12000)}
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
