import React from 'react';
import TeamTemplate from './index';

export default {
  title: 'containers/apply/teams/team-template/TeamTemplate',
};

export const Default = () => (
  <TeamTemplate
    name="테스트"
    core="테스트입니다."
    backgroundColor="lightblue"
  />
);
