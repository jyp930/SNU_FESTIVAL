import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import CloudTemplar from '@I/performance/cloud-templar.png';
import CloudTemplarSmall from '@I/performance/cloud-templar-small.png';
import Guide from '@C/performance/common/Guide';
import Bubble from '@C/introduction/staff-section/Bubble';
import MascotForMission from '@C/performance/common/MascotForMission';
import * as S from '../common/styles';
import * as SS from './styles';

function GameTournament({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  const title = (
    <SS.Title>
      <p>관악게임토너먼트 결승전</p>
      <p>LOL 해설의 최강자</p>
      <p>
        <SS.PurpleText>클템</SS.PurpleText>
        과 함께 하는 관게토
        {' '}
        <SS.PurpleText>결승전</SS.PurpleText>
      </p>
    </SS.Title>
  );
  const image = (
    <SS.Image src={isMobile ? CloudTemplarSmall : CloudTemplar} />
  );
  const teams = (
    <SS.Teams>
      <div>
        <p>Team</p>
        <p>이수경최고다</p>
      </div>
      <div>vs</div>
      <div>
        <p>Team</p>
        <p>박용주최고다</p>
      </div>
    </SS.Teams>
  );
  const guide = <Guide youtubeUrl="https://naver.com" date="5월 12일" times={['15:00~']} />;

  return (
    <SS.StyledGameTournament>
      <HeaderContent>관악게임토너먼트</HeaderContent>
      <SS.Body>
        {isMobile && (
        <S.MobileBody>
          {title}
          {image}
          {teams}
          {guide}
        </S.MobileBody>
        )}
        {!isMobile && (
        <S.BodyWrapper>
          <S.Body>
            {image}
            <div>
              {title}
              {teams}
              {guide}
            </div>
          </S.Body>
        </S.BodyWrapper>
        )}
      </SS.Body>
      <Bubble theme={theme} />
      <MascotForMission
        performance="gameTournament"
      />
    </SS.StyledGameTournament>
  );
}
export default withTheme(GameTournament);

GameTournament.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
