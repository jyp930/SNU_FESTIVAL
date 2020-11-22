import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

// NOTE: 기획 변경에 대비해 행사팀 스타일을 그대로 사용
import * as AS from '../../activity/Activity/styles';
import { palette } from '@S/index';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import { preloadImage } from '@U/functions/preload';
import Flip from 'react-reveal/Flip';
import FullScreen from '@F/FullScreen';

function Performance() {
  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    [IU1, IU2, IU3, IU4, IU5].map(preloadImage);
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
  { title: '힛더스테이지', backgroundColor: palette.BLUE20_PASTEL, content: <div>3</div> },
  { title: '씽스틸러', backgroundColor: palette.BLUE30_PASTEL, content: <div>2</div> },
  { title: '따이빙 인 어쿠스틱', backgroundColor: palette.BLUE40_PASTEL, content: <div>1</div> },
  { title: '폐막제', backgroundColor: palette.BLUE50_PASTEL, content: <div>4</div> },
];