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

          </S.Description>
        </Slide>
      </S.Section>
    </S.StyledPeopleForSnuFestival>
  );
}
export default PeopleForSnuFestival;

PeopleForSnuFestival.propTypes = {

};
