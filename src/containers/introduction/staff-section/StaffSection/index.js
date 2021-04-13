import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Greeting from '@C/introduction/staff-section/Greeting';
import Description from '@C/introduction/staff-section/Description';
import GroupPhoto from '@C/introduction/staff-section/GroupPhoto';
import Bubble from '@C/introduction/staff-section/Bubble';
import * as S from './styles';

function StaffSection() {
  return (
    <S.Wrapper>
      <S.StyledStaffSection>
        <Greeting />
        <Description />
        <GroupPhoto />
      </S.StyledStaffSection>
      <Bubble />
    </S.Wrapper>
  );
}
export default withTheme(StaffSection);

StaffSection.propTypes = {
};
