import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { palette } from '@S/index';
import FullScreen from '@F/FullScreen';
import GroupGame from '@C/activity/details/GroupGame';
import Flip from 'react-reveal/Flip';
import * as S from './styles';

const activityItems = [
  { title: '단체게임', backgroundColor: palette.YELLOW20_PASTEL, content: <GroupGame /> },
  { title: '미니게임', backgroundColor: palette.YELLOW20_PASTEL, content: <div>2</div> },
  { title: '한밤의 어쿠스틱 캠핑', backgroundColor: palette.YELLOW30_PASTEL, content: <div>2</div> },
  { title: '별밤의 일렉트로닉 캠핑', backgroundColor: palette.YELLOW30_PASTEL, content: <div>2</div> },
  { title: '공모전', backgroundColor: palette.YELLOW40_PASTEL, content: <div>3</div> },
  { title: '장터', backgroundColor: palette.YELLOW50_PASTEL, content: <div>4</div> },
];

function Activity() {
  const [detailComponent, setDetailComponent] = useState(null);

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
              <S.CardItem key={activityItem.title}>
                <S.ActivityItem
                  backgroundColor={activityItem.backgroundColor}
                  onClick={() => setDetailComponent(activityItem.content)}
                >
                  <S.ActivityTitle>{activityItem.title}</S.ActivityTitle>
                </S.ActivityItem>
              </S.CardItem>
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
