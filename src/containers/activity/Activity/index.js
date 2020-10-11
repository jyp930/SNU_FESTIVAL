import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { palette } from '@S/index';
import sal from 'sal.js';
import FullScreen from '@F/FullScreen';
import * as S from './styles';

const activityItems = [
  { title: '단체게임', backgroundColor: palette.YELLOW20_PASTEL, content: <div>1</div> },
  { title: '미니게임', backgroundColor: palette.YELLOW20_PASTEL, content: <div>2</div> },
  { title: '한밤의 어쿠스틱 캠핑', backgroundColor: palette.YELLOW30_PASTEL, content: <div>2</div> },
  { title: '별밤의 일렉트로닉 캠핑', backgroundColor: palette.YELLOW30_PASTEL, content: <div>2</div> },
  { title: '공모전', backgroundColor: palette.YELLOW40_PASTEL, content: <div>3</div> },
  { title: '장터', backgroundColor: palette.YELLOW50_PASTEL, content: <div>4</div> },
];

function Activity() {
  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    sal({
      threshold: 0.2,
    });
  }, []);

  return (
    <S.StyledActivity>
      <S.CardContainer>
        { activityItems.map((activityItem, index) => (
          <S.CardItem key={activityItem.title}>
            <S.Sal
              data-sal={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              data-sal-easing="ease"
              data-sal-duration="500"
              data-sal-delay={index * 50}
            >
              <S.ActivityItem
                backgroundColor={activityItem.backgroundColor}
                onClick={() => setDetailComponent(activityItem.content)}
              >
                <S.ActivityTitle>{activityItem.title}</S.ActivityTitle>
              </S.ActivityItem>
            </S.Sal>
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
