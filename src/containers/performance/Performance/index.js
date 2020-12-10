import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

// NOTE: 기획 변경에 대비해 행사팀 스타일을 그대로 사용
import * as AS from '../../activity/Activity/styles';
import { palette } from '@S/index';
import { preloadImage } from '@U/functions/preload';
import Flip from 'react-reveal/Flip';
import FullScreen from '@F/FullScreen';
import HitTheStage from '@C/performance/details/HitTheStage';
import SingStealer from '@C/performance/details/SingStealer';
import DivingInAcoustic from '@C/performance/details/DivingInAcoustic';
import Closing from '@C/performance/details/Closing';

function Performance() {
  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    // TODO: preload
    [].map(preloadImage);
  }, []);

  return (
    <S.StyledPerformance>
      <AS.CardContainer>
        <Flip
          bottom
          cascade
          duration={1000}
        >
          <div>
            { performanceItems.map(performanceItem => (
              <AS.Card key={performanceItem.title}>
                <AS.Item
                  backgroundColor={performanceItem.backgroundColor}
                  onClick={() => setDetailComponent(performanceItem.content)}
                >
                  <AS.ItemTitle>{performanceItem.title}</AS.ItemTitle>
                </AS.Item>
              </AS.Card>
            ))}
          </div>
        </Flip>
      </AS.CardContainer>
      <FullScreen
        isFullScreen={!!detailComponent}
        onCloseFullScreen={() => setDetailComponent(null)}
        backgroundColor={palette.BLUE_PASTEL}
      >
        { detailComponent }
      </FullScreen>
    </S.StyledPerformance>
  );
}
export default Performance;

Performance.propTypes = {

};

const performanceItems = [
  { title: '힛더스테이지', backgroundColor: palette.BLUE20_PASTEL, content: <HitTheStage /> },
  { title: '씽스틸러', backgroundColor: palette.BLUE30_PASTEL, content: <SingStealer /> },
  { title: '따이빙 인 어쿠스틱', backgroundColor: palette.BLUE40_PASTEL, content: <DivingInAcoustic /> },
  { title: '폐막제', backgroundColor: palette.BLUE50_PASTEL, content: <Closing /> },
];
