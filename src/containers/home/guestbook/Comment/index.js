import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import mascot1 from '@I/svg/mascot/1.svg';
import DeletePopup from './DeletePopup';
import dayjs from 'dayjs';

function Comment({ comments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Password, setPassword] = useState('');

  const openPopup = (password) =>{
    setPassword(password);
    setIsModalOpen(true);
  };

  return (
    <S.StyledComment>
      <DeletePopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} Password={Password} />
      {comments.map((comment) => (
        <S.CommentThread key={comment.id}>
          <S.MainBox>
            <S.ProfileImage src={mascot1} />
            <S.ContentsBox>
              <S.Id>{comment.username}</S.Id>
              <S.Content>
                {comment.content.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </S.Content>
            </S.ContentsBox>
          </S.MainBox>
          <S.TaleBox>
            <S.Time>{dayjs.unix(comment.created_at.seconds).format('YYYY-MM-DD HH:mm:ss')}</S.Time>
            <S.Delete onClick={() => openPopup(comment.password)}>삭제</S.Delete>
          </S.TaleBox>
        </S.CommentThread>
      ))}
    </S.StyledComment>
  );
}
export default Comment;

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number, // unix time
    }),
  })).isRequired,
};
