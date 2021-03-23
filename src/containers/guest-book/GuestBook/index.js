import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Comment from '@C/guest-book/comment/Comment';

function GuestBook() {
  return (
    <S.StyledGuestBook>
      <S.Header>방명록</S.Header>
      <Comment />
    </S.StyledGuestBook>
  );
}
export default GuestBook;

GuestBook.propTypes = {

};
