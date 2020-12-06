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
            <S.BoldText>내가 바로 분위기메이커!</S.BoldText>
            <br />
            축하사는 모두가 즐길 수 있는 축제를 만들어갑니다.
            매 축제에 활기를 불어넣을 수 있는 사람을 기다립니다.
            <br />
            <br />
            <S.BoldText>아무말대잔치 환영!</S.BoldText>
            <br />
            매 축제마다 축제의 네이밍과 컨셉을 정합니다.
            이에 맞게 다양한 디자인물이나 행사 등을 기획하는데, 독특하고 신박한 아이디어를 마구 제공해줄 수 있는 여러분이 필요합니다.
            <br />
            <br />
            <S.BoldText>불도저 같은 추진력!</S.BoldText>
            <br />
            적은 인원으로 대규모의 축제를 만들어나갑니다.
            불도저 같은 추진력으로 직접 축제를 이끌어가고 싶은 사람을 원합니다.
            <br />
            <br />
            <S.BoldText>축하사는 열정있는 여러분을 기다립니다.</S.BoldText>
          </S.Description>
        </Slide>
      </S.Section>
    </S.StyledPeopleForSnuFestival>
  );
}
export default PeopleForSnuFestival;

PeopleForSnuFestival.propTypes = {

};
