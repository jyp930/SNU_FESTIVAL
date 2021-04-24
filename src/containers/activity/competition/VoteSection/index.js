import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const CARTOON = 0;
const LITERATURE = 1;
const VIDEO = 2;
const FIELDS = { 만화: CARTOON, 문학: LITERATURE, 영상: VIDEO };

function VoteSection() {
  const [currentField, setCurrentField] = useState(CARTOON);

  return (
    <S.StyledVoteSection>
      <S.Tab>
        {Object.keys(FIELDS).map(field => (
          <React.Fragment key={field}>
            <S.TabItem
              onClick={() => setCurrentField(FIELDS[field])}
              isSelected={currentField === FIELDS[field]}
            >
              {field}
            </S.TabItem>
            {FIELDS[field] !== 2 && <p>|</p>}
          </React.Fragment>
        ))}
      </S.Tab>

      <div style={{ height: 300 }} />

      <S.SubmitSection>
        <S.SubmitButton>제출하기</S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>
    </S.StyledVoteSection>
  );
}
export default VoteSection;

VoteSection.propTypes = {

};
