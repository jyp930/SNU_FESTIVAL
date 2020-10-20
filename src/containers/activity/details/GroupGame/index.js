import React from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import * as S from './styles';

const items = [
  { image: IU1, description: '1번 설명' },
  { image: IU2, description: '2번 설명' },
  { image: IU3, description: '3번 설명' },
  { image: IU4, description: '4번 설명' },
  { image: IU5, description: '5번 설명' },
  { image: IU1, description: '6번 설명' },
  { image: IU2, description: '7번 설명' },
  { image: IU3, description: '8번 설명' },
  { image: IU4, description: '9번 설명' },
  { image: IU5, description: '10번 설명' },
  { image: IU3, description: '11번 설명' },
];

function GroupGame() {
  return (
    <DetailTemplate
      title="단체게임"
      description="4~5명의 학우가 한 팀이 되어 3가지 게임에서 살아남는 서바이벌!"
      items={items}
    />
  );
}
export default GroupGame;

GroupGame.propTypes = {

};
