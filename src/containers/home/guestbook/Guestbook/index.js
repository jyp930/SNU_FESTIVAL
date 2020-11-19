import React, { useCallback, useEffect } from 'react';
import { firestore } from '@/utils/initializer/firebase';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import WriteBox from '@C/home/guestbook/WriteBox';
import Comment from '@C/home/guestbook/Comment';
import * as S from './styles';

function Guestbook({ offset, scrollDown }) {
  const items = [
    {
      id: 1, username: '1번', password: 'a', content: '미인을 많이 길을 그러므로 아니한 천자만홍이 칼이다. 위하여 기쁘며, 사랑의 공자는 미인을 때까지 있음으로써 창공에 있으랴? 시들어 우리의 이것이야말로 교향악이다. 구하지 물방아 공자는 피고 피고, 커다란 이것이다. 싸인 인생에 것이다.보라, 부패뿐이다. 더운지라 따뜻한 현저하게 공자는 찾아다녀도, 목숨을 낙원을 풀밭에 듣는다. 싸인 가치를 황금시대의 약동하다. 품고 많이 우리는 꽃이 인간에 더운지라 위하여서. 위하여, 길지 불어 피는 이상의 얼마나 싶이 소리다.이것은 곳으로 위하여서. 심장의 뜨거운지라, 예수는 거선의 목숨을 꽃이 피가 보배를 피가 황금시대다.', created_at: '2020.10.30',
    },
    {
      id: 2, username: '2번', password: 'a', content: '아자차카타파하', created_at: '2020.10.31',
    },
  ];

  const subscribeComments = useCallback(() => {
    return firestore.collection('guestbook').doc('comments')
      .onSnapshot(doc => {
        console.log(doc.data().comments);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  return (
    <S.StyledGuestbook>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
      >
        <S.GuestbookBox>
          <Comment items={items} />
          <WriteBox />
        </S.GuestbookBox>
      </ParallaxLayer>
    </S.StyledGuestbook>
  );
}
export default Guestbook;

Guestbook.propTypes = {

};
