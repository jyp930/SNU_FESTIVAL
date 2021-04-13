import React from 'react';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import * as S from './styles';

function DisplaySection() {
  return (
    <S.StyledDisplaySection>
      <S.Item>
        <S.Window src={Window} alt="창" />
        <S.Texts>
          <p>축하사 후드티</p>
          <p>12000</p>
        </S.Texts>
      </S.Item>
      <S.Item>
        <S.Window src={Window} alt="창" />
        <S.Texts>
          <p>축하사 후드티</p>
          <p>12000</p>
        </S.Texts>
      </S.Item>
      <S.Item>
        <S.Window src={Window} alt="창" />
        <S.Texts>
          <p>축하사 후드티</p>
          <p>12000</p>
        </S.Texts>
      </S.Item>
      <S.Item>
        <S.Window src={Window} alt="창" />
        <S.Texts>
          <p>축하사 후드티</p>
          <p>12000</p>
        </S.Texts>
      </S.Item>
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
