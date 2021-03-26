import React from 'react';
import PropTypes from 'prop-types';
import Comments from '@C/guest-book/Comment';
import StampDescriptionBox from '@C/guest-book/StampDescriptionBox';
import WriteBox from '@C/guest-book/WriteBox';
import useAuth, { useUser } from '@U/hooks/useAuth';
import * as S from './styles';

function GuestBook() {
  useAuth(); // NOTE: 유저가 바뀔 때를 useEffect 로 감지하기 위함. HOC 이 더 어울릴 듯.
  const { user } = useUser();

  return (
    <S.StyledGuestBook>
      <S.Header>방명록</S.Header>
      <S.Body>
        <S.StampDescriptionBoxWrapper>
          <StampDescriptionBox />
        </S.StampDescriptionBoxWrapper>
        <S.WriteBoxWrapper>
          <WriteBox user={user} />
        </S.WriteBoxWrapper>
        <S.CommentsWrapper>
          <Comments user={user} />
        </S.CommentsWrapper>
      </S.Body>
    </S.StyledGuestBook>
  );
}
export default GuestBook;

GuestBook.propTypes = {

};
