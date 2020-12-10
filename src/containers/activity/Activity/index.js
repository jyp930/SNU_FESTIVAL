import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { palette } from '@S/index';
import FullScreen from '@F/FullScreen';
import Flip from 'react-reveal/Flip';

import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import { preloadImage } from '@U/functions/preload';
import GroupGame from '@C/activity/details/GroupGame';
import MiniGame from '@C/activity/details/MiniGame';
import Camping from '@C/activity/details/Camping';
import Market from '@C/activity/details/Market';

function Activity() {
  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    [IU1, IU2, IU3, IU4, IU5].map(preloadImage);
  }, []);

  return (
    <S.StyledActivity>
      <S.CardContainer>
        <Flip
          bottom
          cascade
          duration={1000}
        >
          <div>
            { activityItems.map(activityItem => (
              <S.Card key={activityItem.title}>
                <S.Item
                  backgroundColor={activityItem.backgroundColor}
                  onClick={() => setDetailComponent(activityItem.content)}
                >
                  <S.ItemTitle>{activityItem.title}</S.ItemTitle>
                </S.Item>
              </S.Card>
            ))}
          </div>
        </Flip>
      </S.CardContainer>
      <FullScreen
        isFullScreen={!!detailComponent}
        onCloseFullScreen={() => setDetailComponent(null)}
        backgroundColor={palette.YELLOW_PASTEL}
      >
        { detailComponent }
      </FullScreen>
    </S.StyledActivity>
  );
}
export default Activity;

Activity.propTypes = {

};

const activityItems = [
  { title: '단체게임', backgroundColor: palette.YELLOW20_PASTEL, content: <GroupGame /> },
  { title: '미니게임', backgroundColor: palette.YELLOW20_PASTEL, content: <MiniGame /> },
  { title: '캠핑/심야게임', backgroundColor: palette.YELLOW30_PASTEL, content: <Camping /> },
  { title: '공모전/장터', backgroundColor: palette.YELLOW40_PASTEL, content: <Market /> },
];
