import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { firestore } from '@U/initializer/firebase';
import WriteBox from '@C/home/guestbook/WriteBox';
import Comment from '@C/home/guestbook/comment/Comment';
import Wave from '@F/animation/Wave';

function Guestbook() {
  const [comments, setComments] = useState([]);

  const subscribeComments = useCallback(() => firestore.collection('guestbook')
    .orderBy('created_at', 'desc')
    .limit(100)
    .onSnapshot(docs => {
      const firestoreComments = [];
      docs.forEach(doc => (
        firestoreComments.push({
          id: doc.id,
          ...doc.data(),
        })));
      setComments(firestoreComments ?? []);
    }), []);

  useEffect(() => {
    const unsubscribe = subscribeComments();
    return () => unsubscribe();
  }, [subscribeComments]);

  return (
    <S.StyledGuestbook>
      <S.WaveWrapper>
        <Wave />
      </S.WaveWrapper>

      <S.GuestbookBox>
        <WriteBox />
        <Comment comments={comments} />
      </S.GuestbookBox>
    </S.StyledGuestbook>
  );
}
export default Guestbook;

Guestbook.propTypes = {

};
