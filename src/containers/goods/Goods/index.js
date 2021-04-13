import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/goods/TextSection';
import * as S from './styles';

function Goods() {
  return (
    <S.StyledGoods>
      <HeaderContent>굿즈</HeaderContent>
      <S.Body>
        <TextSection />
      </S.Body>
    </S.StyledGoods>
  );
}
export default Goods;

Goods.propTypes = {

};
