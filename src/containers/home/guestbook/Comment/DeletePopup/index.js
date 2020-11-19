import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from './styles';

function DeletePopup({ Password, isModalOpen, setIsModalOpen }) {
  const SimpleModal = {
    modal: false,
    open: isModalOpen,
    onClose: () => setIsModalOpen(false),
    closeOnDocumentClick: false,
    contentStyle: {
      border: 'none', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent',
    },
  };

  const Delete = () => {
    if (Password.value === '') toast('비밀번호가 틀렸습니다');
    else {
      toast.dismiss();
      toast('삭제되었습니다');
      setIsModalOpen(false);
    }
  };

  return (
    <S.StyledDeletePopup>
      <Popup {...SimpleModal}>
        <S.DeletePopup>
          <div>삭제하시겠습니까?</div>
          <S.InputBox placeholder="비밀번호" maxLength="20" {...Password} />
          <S.ButtonBox>
            <button onClick={Delete}>
              삭제
            </button>
            <button onClick={() => setIsModalOpen(false)}>
              닫기
            </button>
          </S.ButtonBox>
        </S.DeletePopup>
      </Popup>
    </S.StyledDeletePopup>
  );
}
export default DeletePopup;

DeletePopup.propTypes = {

};
