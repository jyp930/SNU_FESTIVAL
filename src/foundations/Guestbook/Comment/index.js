import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeletePopup from '@F/Guestbook/Comment/DeletePopup';
import * as S from './styles';

function Comment({ items }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      // console.log(e.target.value);
      setValue(e.target.value);
    };
    return { value, onChange };
  };

  const Password = useInput('');

  return (
    <S.StyledComment>
      <DeletePopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} Password={Password} />
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
            <S.Delete onClick={() => setIsModalOpen(true)}>삭제</S.Delete>
          </S.TaleBox>
        </S.CommentThread>
      ))}
    </S.StyledComment>
  );
}
export default Comment;

Comment.propTypes = {

};
