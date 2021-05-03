import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/group/TextSection';
import Celebration from '@I/activity/group/celebration.png';
import LiveSection from '@C/activity/group/LiveSection';
import * as S from './styles';

function Group() {
  return (
    <S.StyledGroup>
      <HeaderContent>단체게임</HeaderContent>
      <S.Body>
        <TextSection />
        <S.Image src={Celebration} alt="물렁팥죽 축전" />
        <LiveSection />
      </S.Body>
      <S.Button>줌 링크 바로가기</S.Button>
    </S.StyledGroup>
  );
}
export default Group;

Group.propTypes = {

};
