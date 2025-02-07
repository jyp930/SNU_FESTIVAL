import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function PublisherSection() {
  return (
    <S.StyledPublisherSection>
      <p>페스월드 설립자</p>
      <div />
      <p>
        <span onClick={() => window.open('mailto:geehyun0105@snu.ac.kr')}>축장 권지현 geehyun0105@snu.ac.kr</span>
        <br />
        <span onClick={() => window.open('mailto:jyp930@snu.ac.kr')}>개발 박용주 jyp930@snu.ac.kr</span>
        <br />
        <span onClick={() => window.open('mailto:sk990120@snu.ac.kr')}>디자인 이수경 sk990120@snu.ac.kr</span>
      </p>
    </S.StyledPublisherSection>
  );
}
export default PublisherSection;

PublisherSection.propTypes = {

};
