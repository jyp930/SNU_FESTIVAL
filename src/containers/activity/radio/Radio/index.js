import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Title from '@I/activity/radio/title.png';
import Guests from '@I/activity/radio/guests.png';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import * as S from './styles';

function Radio({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('radio').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const goToYoutube = useCallback(() => {
    if (url !== null && url.length > 0) {
      EventBehavior('Activity', `Click Youtube Link: ${url}`, `go to ${url} by activity page`);
      window.open(url, '_blank');
    } else if (url !== null && url.length === 0) {
      toast('행사 준비 중입니다😇');
    } else {
      toast('다시 클릭해주세요!');
    }
  }, [url]);

  const texts = useCallback((name, date, textAlign) => (
    <S.Texts textAlign={isMobile ? 'center' : textAlign}>
      <div>
        <p>with</p>
        <p>{name}</p>
      </div>
      <div>
        <p>{date}</p>
        <p>20:30~22:00</p>
        <p>유튜브 라이브 중계</p>
      </div>
    </S.Texts>
  ), [isMobile]);

  return (
    <S.StyledRadio>
      <HeaderContent>보이는 라디오</HeaderContent>
      <S.Body>
        {ellipses(isMobile)}
        <S.Title>
          <S.Image src={Title} alt="고릴라디오" />
          {stars}
        </S.Title>
        { isMobile ? (
          <S.MobileGuests>
            <S.Image src={Guests} alt="게스트" />
            <div>
              {texts('오정연 아나운서', '5월 11일', 'center')}
              {texts('나상현씨밴드', '5월 13일', 'center')}
            </div>
          </S.MobileGuests>
        ) : (
          <S.Guests>
            {texts('오정연 아나운서', '5월 11일', 'right')}
            <S.Image src={Guests} alt="게스트" />
            {texts('나상현씨밴드', '5월 13일', 'left')}
          </S.Guests>
        )}
        <S.Button onClick={goToYoutube}>보러가기</S.Button>
      </S.Body>
    </S.StyledRadio>
  );
}
export default withTheme(Radio);

Radio.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};

function Star({
  r, duration, top, left, right, bottom,
}) {
  return (
    <S.Star
      r={r || 5}
      duration={duration || (1 + Math.random() * 2)}
      delay={Math.random() * 2}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    />
  );
}

const stars = (
  <>
    <Star top={-10} left={10} r={7} />
    <Star top={13} left={20} r={5} />
    <Star top={15} left={6} r={6} />
    <Star top={60} left={25} r={4} />

    <Star top={-10} right={10} r={6} />
    <Star top={13} right={25} r={7} />
    <Star top={15} right={6} r={6} />
    <Star top={45} right={20} r={4} />
  </>
);

const ellipses = (isMobile) => (
  <>
    <S.Ellipse top={isMobile ? -20 : -10} left={isMobile ? -40 : -20} rotate={isMobile ? 60 : -20} />
    <S.Ellipse top={isMobile ? -15 : 1} right={isMobile ? -40 : -25} rotate={isMobile ? 60 : -20} />
  </>
);
