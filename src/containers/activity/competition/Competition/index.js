import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/competition/TextSection';
import VoteSection from '@C/activity/competition/VoteSection';
import * as S from './styles';

const CARTOON = 0;
const LITERATURE = 1;
const VIDEO = 2;
const FIELDS = { 만화: CARTOON, 문학: LITERATURE, 영상: VIDEO };
const REVERSED_FIELDS = { [CARTOON]: '만화', [LITERATURE]: '문학', [VIDEO]: '영상' };

function Competition() {
  const [currentField, setCurrentField] = useState(CARTOON);

  return (
    <S.StyledCompetition>
      <HeaderContent>공모전</HeaderContent>
      <S.Body>
        <TextSection />
        <S.Tab>
          {Object.keys(FIELDS).map(fieldName => (
            <React.Fragment key={fieldName}>
              <S.TabItem
                onClick={() => setCurrentField(FIELDS[fieldName])}
                isSelected={currentField === FIELDS[fieldName]}
              >
                {fieldName}
              </S.TabItem>
              {FIELDS[fieldName] !== 2 && <p>|</p>}
            </React.Fragment>
          ))}
        </S.Tab>

        <VoteSection field={currentField} />
      </S.Body>
    </S.StyledCompetition>
  );
}
export default Competition;

Competition.propTypes = {

};
