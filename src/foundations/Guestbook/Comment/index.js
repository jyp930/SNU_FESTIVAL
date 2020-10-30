import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Comment({ items }) {
  return (
    <S.StyledComment>
      {items.map((item, index) => (
        <S.CommentThread>
          <S.MainBox>
            <S.ProfileImage src={item.img} />
            <S.ContentsBox>
              <S.Id>{item.id}</S.Id>
              <S.Content>{item.content}</S.Content>
            </S.ContentsBox>
          </S.MainBox>
          <S.TaleBox>
            <S.Time>{item.time}</S.Time>
            <S.Like>좋아요</S.Like>
            <S.Delete>삭제</S.Delete>
          </S.TaleBox>
        </S.CommentThread>
      ))}
    </S.StyledComment>
  );
}
export default Comment;

Comment.propTypes = {

};
