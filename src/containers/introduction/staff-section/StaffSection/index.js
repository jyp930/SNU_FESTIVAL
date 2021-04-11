import React from 'react';
import PropTypes from 'prop-types';
import Greeting from '@C/introduction/staff-section/Greeting';
import Description from '@C/introduction/staff-section/Description';
import * as S from './styles';

function StaffSection() {
  return (
    <S.Wrapper>
      <S.StyledStaffSection>
        <Greeting />
        <Description />
      </S.StyledStaffSection>
    </S.Wrapper>
  );
}
export default StaffSection;

StaffSection.propTypes = {
};
