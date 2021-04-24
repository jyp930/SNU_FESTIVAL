import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/competition/TextSection';
import * as S from './styles';

function Competition() {
  return (
    <S.StyledCompetition>
      <HeaderContent>공모전</HeaderContent>
      <S.Body>
        <TextSection />
      </S.Body>
    </S.StyledCompetition>
  );
}
export default Competition;

Competition.propTypes = {

};
