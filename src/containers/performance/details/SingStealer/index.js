import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import SingStealer1 from '@I/performance/singStealer/singStealer1.jpeg';
import SingStealer2 from '@I/performance/singStealer/singStealer2.jpeg';
import SingStealer3 from '@I/performance/singStealer/singStealer3.png';
import SingStealer4 from '@I/performance/singStealer/singStealer4.jpeg';
import SingStealer5 from '@I/performance/singStealer/singStealer5.png';
import SingStealer6 from '@I/performance/singStealer/singStealer6.jpeg';

const items = [
  { image: SingStealer1, description: '1번 설명' },
  { image: SingStealer2, description: '2번 설명' },
  { image: SingStealer3, description: '3번 설명' },
  { image: SingStealer4, description: '4번 설명' },
  { image: SingStealer5, description: '5번 설명' },
  { image: SingStealer6, description: '6번 설명' },
];

function SingStealer() {
  return (
    <DetailTemplate
      title="씽스틸러"
      description="힙합부터 발라드까지! 지나가던 나의 발길을 이끄는 장르불문 귀호강 사운드"
      items={items}
    />
  );
}
export default SingStealer;

SingStealer.propTypes = {

};
