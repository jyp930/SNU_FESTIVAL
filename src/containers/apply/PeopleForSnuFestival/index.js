import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Slide from 'react-reveal/Slide';

function PeopleForSnuFestival() {
  return (
    <S.StyledPeopleForSnuFestival>
      <S.Section>
        <Slide bottom cascade duration={500}>
          <S.Name>축하사 인재상</S.Name>
          <S.CoreText>
            나는 축제한다
            <br />
            고로 존재한다
          </S.CoreText>
        </Slide>
      </S.Section>
      <S.Section>
        <Slide bottom duration={800}>
          <S.Description>
            내가 바로 분위기메이커!
            <br />
            매 축제에 활기를 불어넣을 수 있는 사람
            <br />
            아무말대잔치 환영!
            <br />
            독특하고 신박한 아이디어를 마구 제공해줄 수 있는 사람
            <br />
            불도저 같은 추진력!
            <br />
          </S.Description>
        </Slide>
      </S.Section>
    </S.StyledPeopleForSnuFestival>
  );
}
export default PeopleForSnuFestival;

PeopleForSnuFestival.propTypes = {

};
