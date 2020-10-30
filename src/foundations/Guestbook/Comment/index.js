import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PopupModal from '@F/PopupModal';
import * as S from './styles';

function Comment({ items }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.StyledComment>
      {items.map((item, index) => (
        <S.CommentThread>
          <PopupModal
            closeOnDocumentClick={false}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            popup
          </PopupModal>
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
