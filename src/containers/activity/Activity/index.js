import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { palette } from '@S/index';
import FullScreen from '@F/FullScreen';
import GroupGame from '@C/activity/details/GroupGame';
import Sal from '@F/Sal';
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
        { activityItems.map((activityItem, index) => (
          <S.CardItem key={activityItem.title}>
            <Sal
              threshold={0.2}
              animation={index % 2 === 0 ? 'flip-left' : 'flip-right'}
              duration={500}
              delay={index * 50}
            >
              <S.ActivityItem
                backgroundColor={activityItem.backgroundColor}
                onClick={() => setDetailComponent(activityItem.content)}
              >
                <S.ActivityTitle>{activityItem.title}</S.ActivityTitle>
              </S.ActivityItem>
            </Sal>
          </S.CardItem>
        ))}
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
