import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { firestore } from '@U/initializer/firebase';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import WriteBox from '@C/home/guestbook/WriteBox';
import Comment from '@C/home/guestbook/Comment';
import Wave from '@F/animation/Wave';

function Guestbook({ offset, scrollDown }) {
  const [comments, setComments] = useState([]);
  const lastComment = useMemo(() => comments[comments.length - 1] ?? null, [comments]);

  const subscribeComments = useCallback(() => {
    return firestore.collection('guestbook').doc('comments')
      .onSnapshot(doc => {
        setComments(doc.data().comments);
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
        <S.WaveWrapper>
          <Wave />
        </S.WaveWrapper>

        <S.GuestbookBox>
          <Comment comments={comments} />
          <WriteBox lastComment={lastComment} />
        </S.GuestbookBox>
      </ParallaxLayer>
    </S.StyledGuestbook>
  );
}
export default Guestbook;

Guestbook.propTypes = {
  offset: PropTypes.number,
};
