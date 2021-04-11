import React from 'react';
import { VoteSection } from './index';

export default {
  title: 'containers/vote/VoteSection',
};

export const Default = () => (
  <VoteSection
    isMobile={false}
    theme={{ windowWidth: 1000 }}
    user={{ uid: 'test', isLoading: false }}
    isAuthorized={false}
    haveVotedForPhoneCert
    haveVotedForSingStealer={false}
    phoneCertListIHaveVoted={[]}
    singStealerListIHaveVoted={[]}
    isPhoneCertLoaded
    isSingStealerLoaded
  />
);
