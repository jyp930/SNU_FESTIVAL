import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import HitTheStage1 from '@I/performance/hitTheStage/hitTheStage1.jpeg';
import HitTheStage2 from '@I/performance/hitTheStage/hitTheStage2.jpeg';
import HitTheStage3 from '@I/performance/hitTheStage/hitTheStage3.jpeg';
import HitTheStage4 from '@I/performance/hitTheStage/hitTheStage4.jpeg';
import HitTheStage5 from '@I/performance/hitTheStage/hitTheStage5.jpeg';
import HitTheStage6 from '@I/performance/hitTheStage/hitTheStage6.jpeg';
import HitTheStage7 from '@I/performance/hitTheStage/hitTheStage7.jpeg';
import HitTheStage8 from '@I/performance/hitTheStage/hitTheStage8.jpeg';
import HitTheStage9 from '@I/performance/hitTheStage/hitTheStage9.jpeg';
import HitTheStage10 from '@I/performance/hitTheStage/hitTheStage10.jpeg';

const items = [
  { image: HitTheStage7, description: '1번 설명' },
  { image: HitTheStage2, description: '2번 설명' },
  { image: HitTheStage3, description: '3번 설명' },
  { image: HitTheStage10, description: '4번 설명' },
  { image: HitTheStage5, description: '5번 설명' },
  { image: HitTheStage6, description: '6번 설명' },
  { image: HitTheStage8, description: '7번 설명' },
  { image: HitTheStage1, description: '8번 설명' },
  { image: HitTheStage9, description: '9번 설명' },
  { image: HitTheStage4, description: '10번 설명' },
];

function HitTheStage() {
  return (
    <DetailTemplate
      title="힛더스테이지"
      description="무대를 뒤집어놓으셨다! 관악 제일의 춤꾼들과 함께하는 신나는 공연타임"
      items={items}
    />
  );
}
export default HitTheStage;

HitTheStage.propTypes = {

};
