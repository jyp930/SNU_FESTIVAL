import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { firestore } from '@U/initializer/firebase';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import WriteBox from '@C/home/guestbook/WriteBox';
import Comment from '@C/home/guestbook/comment/Comment';
import Wave from '@F/animation/Wave';

function Guestbook({ offset }) {
  const [comments, setComments] = useState([]);
  const lastComment = useMemo(() => comments[comments.length - 1] ?? null, [comments]);

  // TODO: 중요: firestore field 형식 바꾸기
  const subscribeComments = useCallback(() => firestore.collection('guestbook').doc('comments')
    .onSnapshot(doc => {
      setComments(doc.data().comments);
    }), []);

  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  return (
    <ParallaxLayer
      offset={offset}
    >
      {/* TODO: 배경색 */}
      <S.WaveWrapper>
        <Wave />
      </S.WaveWrapper>

      <S.GuestbookBox>
        <WriteBox lastComment={lastComment} />
        <Comment comments={comments} />
      </S.GuestbookBox>
    </ParallaxLayer>
  );
}
export default Guestbook;

Guestbook.propTypes = {
  offset: PropTypes.number.isRequired,
};
