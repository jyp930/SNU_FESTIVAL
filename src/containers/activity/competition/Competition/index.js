import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/competition/TextSection';
import VoteSection from '@C/activity/competition/VoteSection';
import ArchiveSection from '@C/activity/competition/ArchiveSection';
import * as S from './styles';

function Competition() {
  return (
    <S.StyledCompetition>
      <HeaderContent>공모전</HeaderContent>
      <S.Body>
        <TextSection />
        <VoteSection />
        <ArchiveSection />
      </S.Body>
    </S.StyledCompetition>
  );
}
export default Competition;

Competition.propTypes = {

};
