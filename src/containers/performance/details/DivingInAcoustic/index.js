import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import Acoustic1 from '@I/jpeg/acoustic/acoustic1.jpeg';
import Acoustic2 from '@I/jpeg/acoustic/acoustic2.jpeg';
import Acoustic3 from '@I/jpeg/acoustic/acoustic3.jpeg';
import Acoustic4 from '@I/jpeg/acoustic/acoustic4.jpeg';
import Acoustic5 from '@I/jpeg/acoustic/acoustic5.jpeg';
import Acoustic6 from '@I/jpeg/acoustic/acoustic6.jpeg';
import Acoustic7 from '@I/jpeg/acoustic/acoustic7.jpeg';
import Acoustic8 from '@I/jpeg/acoustic/acoustic8.jpeg';
import Acoustic9 from '@I/jpeg/acoustic/acoustic9.jpeg';
import Acoustic10 from '@I/jpeg/acoustic/acoustic10.jpeg';

const items = [
  { image: Acoustic1, description: '1번 설명' },
  { image: Acoustic2, description: '2번 설명' },
  { image: Acoustic3, description: '3번 설명' },
  { image: Acoustic4, description: '4번 설명' },
  { image: Acoustic5, description: '5번 설명' },
  { image: Acoustic6, description: '6번 설명' },
  { image: Acoustic7, description: '7번 설명' },
  { image: Acoustic8, description: '8번 설명' },
  { image: Acoustic9, description: '9번 설명' },
  { image: Acoustic10, description: '10번 설명' },
];

function DivingInAcoustic() {
  return (
    <DetailTemplate
      title="따이빙 인 어쿠스틱"
      description="우당탕탕 상금 사수 대작전! 친구들과 함께하는 축제의 피날레"
      items={items}
    />
  );
}
export default DivingInAcoustic;

DivingInAcoustic.propTypes = {

};
