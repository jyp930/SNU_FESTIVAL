import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { firestore } from '@U/initializer/firebase';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import WriteBox from '@C/home/guestbook/WriteBox';
import Comment from '@C/home/guestbook/Comment';

function Guestbook({ offset, scrollDown }) {
  const [comments, setComments] = useState([]);
  const [items, setItems] = useState(1);
  const lastComment = useMemo(() => comments[comments.length - 1] ?? null, [comments]);

  const subscribeComments = useCallback(() => firestore.collection('guestbook').doc('comments')
    .onSnapshot(doc => {
      setComments(doc.data().comments);
    }), []);

  const infiniteScroll = () => {
    // const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    // const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    // const clientHeight = document.documentElement;
    setItems(Math.max(document.documentElement.scrollTop, document.body.scrollTop));
    console.log(items);
    //
    // if (scrollTop + clientHeight === scrollHeight) {
    //   setItems(items + 1);
    // }
  };

  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  useEffect(() => {
    // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다
    // onScroll 함수가 실행됩니다.
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, []);

  return (
    <S.StyledGuestbook>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
      >
        <S.GuestbookBox>
          <WriteBox lastComment={lastComment} />
          <Comment comments={comments} />
        </S.GuestbookBox>
      </ParallaxLayer>
    </S.StyledGuestbook>
  );
}
export default Guestbook;

Guestbook.propTypes = {
  offset: PropTypes.number,
};
