import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PopupModal from '@F/PopupModal';
import Popup from 'reactjs-popup';
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
      <Popup
        modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnDocumentClick={false}
        contentStyle={{
          display: 'flex', justifyContent: 'center'
        }}
      >
        <S.DeletePopup>
          <div>삭제하시겠습니까?</div>
          <S.InputBox placeholder="비밀번호" maxLength="20" {...Password} />
          <S.ButtonBox>
            <button onClick={() => {}}>
              삭제
            </button>
            <button onClick={() => setIsModalOpen(false)}>
              닫기
            </button>
          </S.ButtonBox>
        </S.DeletePopup>
      </Popup>
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
