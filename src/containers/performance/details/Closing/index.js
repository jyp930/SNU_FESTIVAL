import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import Closing1 from '@I/performance/closing/closing1.jpeg';
import Closing2 from '@I/performance/closing/closing2.jpeg';
import Closing3 from '@I/performance/closing/closing3.jpeg';
import Closing4 from '@I/performance/closing/closing4.jpeg';
import Closing5 from '@I/performance/closing/closing5.jpeg';
import Closing6 from '@I/performance/closing/closing6.jpeg';
import Closing7 from '@I/performance/closing/closing7.jpeg';
import Closing8 from '@I/performance/closing/closing8.jpeg';
import Closing9 from '@I/performance/closing/closing9.jpeg';
import Closing10 from '@I/performance/closing/closing10.jpeg';

const items = [
  { image: Closing1, description: '1번 설명' },
  { image: Closing2, description: '2번 설명' },
  { image: Closing3, description: '3번 설명' },
  { image: Closing6, description: '6번 설명' },
  { image: Closing5, description: '5번 설명' },
  { image: Closing4, description: '4번 설명' },
  { image: Closing7, description: '7번 설명' },
  { image: Closing8, description: '8번 설명' },
  { image: Closing9, description: '9번 설명' },
  { image: Closing10, description: '10번 설명' },
];

function Closing() {
  return (
    <DetailTemplate
      title="폐막제"
      description="우당탕탕 상금 사수 대작전! 친구들과 함께하는 축제의 피날레"
      items={items}
    />
  );
}
export default Closing;

Closing.propTypes = {

};
