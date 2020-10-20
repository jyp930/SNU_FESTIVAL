import React from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU1 from '@I/jpeg/IU1.jpeg';
import * as S from './styles';

const images = [IU5, IU4, IU1, IU1, IU4, IU5, IU1, IU4, IU5, IU1, IU4, IU5];

function GroupGame() {
  return (
    <DetailTemplate
      title="단체게임"
      description="4~5명의 학우가 한 팀이 되어 3가지 게임에서 살아남는 서바이벌!"
      images={images}
    />
  );
}
export default GroupGame;

GroupGame.propTypes = {

};
