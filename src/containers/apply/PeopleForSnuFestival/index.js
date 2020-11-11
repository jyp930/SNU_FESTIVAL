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
          <S.CoreText>여정 자체가 보상이 되는 문화를 만듭니다.</S.CoreText>
        </Slide>
      </S.Section>
      <S.Section>
        <Slide bottom duration={800}>
          <S.Description>
            힘차게 더운지라 굳세게 대고, 무엇이 끝까지 것이다.
            온갖 산야에 뛰노는 창공에 청춘 소금이라 열락의 시들어 위하여서.
            가장 그들의 반짝이는 설레는 있는가? 원질이 생의 할지니, 것이다.
            실로 우리 같은 천고에 없으면 보이는 것이다.
            그들의 무엇이 이상을 커다란 이것이다. 설레는 들어 수 말이다.
          </S.Description>
        </Slide>
      </S.Section>
    </S.StyledPeopleForSnuFestival>
  );
}
export default PeopleForSnuFestival;

PeopleForSnuFestival.propTypes = {

};
