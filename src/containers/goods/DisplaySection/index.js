import React from 'react';
import Glass from '@I/goods/glass.jpg';
import StickerOne from '@I/goods/sticker-1.png';
import StickerTwo from '@I/goods/seal-sticker.png';
import Calendar from '@I/goods/calendar.png';
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
      {Item('glass', Glass, '축제이즈백 소주잔', 7000)}
      {Item('seal-sticker', StickerTwo, '씰스티커', 1500)}
      {Item('calendar', Calendar, '사계절 엽서 세트', 2000)}
      {Item('stickerOne', StickerOne, '씰스티커', 1500)}
    </S.StyledDisplaySection>
  );
}
export default DisplaySection;

DisplaySection.propTypes = {

};
