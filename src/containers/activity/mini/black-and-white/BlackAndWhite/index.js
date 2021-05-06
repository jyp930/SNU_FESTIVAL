import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Rule from '@C/activity/mini/black-and-white/Rule';
import Swirl from '@I/activity/black-and-white/swirl.svg';
import Answer from '@C/activity/mini/black-and-white/Answer';
import CardConfetti from '@C/activity/mini/black-and-white/CardConfetti';
import { linkCollectionRef } from '@U/initializer/firebase';
import { toast } from 'react-toastify';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

function BlackAndWhite() {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    linkCollectionRef.doc('black-and-white').get()
      .then((doc) => {
        setUrl(doc.data().url);
      })
      .catch(() => (
        toast('인터넷이 불안정합니다. 다시 시도해주세요.')));
  }, []);

  const goToZoom = useCallback(() => {
    if (url !== null && url.length > 0) {
      EventBehavior('Activity', `Click Youtube Link: ${url}`, `go to ${url} by activity page`);
      window.open(url, '_blank');
    } else if (url !== null && url.length === 0) {
      toast('행사 준비 중입니다😇');
    } else {
      toast('다시 클릭해주세요!');
    }
  }, [url]);

  return (
    <S.StyledBlackAndWhite>
      <HeaderContent backgroundColor="transparent" color="white" style={{ mixBlendMode: 'difference' }}>흑과백</HeaderContent>
      <S.Body>
        <Rule />
        <S.Zoom src={Swirl} alt="줌" onClick={goToZoom} />
        <Answer />
      </S.Body>
      <CardConfetti />
    </S.StyledBlackAndWhite>
  );
}
export default BlackAndWhite;

BlackAndWhite.propTypes = {
};
