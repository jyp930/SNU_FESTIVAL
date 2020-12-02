import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import mascot1 from '@I/svg/mascot/1.svg';
import mascot2 from '@I/svg/mascot/2.svg';
import mascot3 from '@I/svg/mascot/3.svg';
import mascot4 from '@I/svg/mascot/4.svg';
import mascot5 from '@I/svg/mascot/5.svg';
import mascot10 from '@I/svg/mascot/10.svg';
import mascot11 from '@I/svg/mascot/11.svg';
import mascot12 from '@I/svg/mascot/12.svg';
import mascot13 from '@I/svg/mascot/13.svg';
import mascot14 from '@I/svg/mascot/14.svg';
import DeletePopup from '../DeletePopup';
import dayjs from 'dayjs';

function Comment({ comments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetComment, setTargetComment] = useState(null);

  const openPopup = (comment) => {
    setTargetComment(comment);
    setIsModalOpen(true);
  };

  return (
    <S.StyledComment>
      {comments.map(comment => (
        <S.CommentThread key={comment.id}>
          <S.MainBox>
            <S.ProfileImage src={mascots[comment.created_at.seconds % mascots.length]} />
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
            <S.Time>
              {dayjs
                .unix(comment.created_at.seconds)
                .format('YYYY-MM-DD HH:mm:ss')}
            </S.Time>
            <S.Delete onClick={() => openPopup(comment)}>삭제</S.Delete>
          </S.TaleBox>
        </S.CommentThread>
      ))}
      { isModalOpen && (
        <DeletePopup
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          comment={targetComment}
        />
      )}
    </S.StyledComment>
  );
}
export default Comment;

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number, // unix time
    }),
  })).isRequired,
};

const mascots = [
  mascot1, mascot2, mascot3, mascot4, mascot5, mascot10, mascot11, mascot12, mascot13, mascot14,
];
