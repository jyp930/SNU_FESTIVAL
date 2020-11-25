import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as S from './styles';
import useInput from '@U/hooks/useInput';
import PopupModal from '@F/PopupModal';

function DeletePopup({ comment, isModalOpen, setIsModalOpen }) {
  const Input = useInput('');
  const Delete = () => {
    if (Input.value !== comment?.password) {
      toast('비밀번호가 틀렸습니다');
    } else {
      toast.dismiss();
      // TODO: firestore 삭제
      toast('삭제되었습니다');
      setIsModalOpen(false);
    }
    Input.setValue('');
  };

  return (
    <S.StyledDeletePopup>
      <PopupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <S.DeletePopup>
          <div>삭제하시겠습니까?</div>
          <S.InputBox placeholder="비밀번호" maxLength="20" type="password" {...Input} />
          <S.ButtonBox>
            <S.Button onClick={Delete}>삭제</S.Button>
            <S.Button onClick={() => setIsModalOpen(false)}>닫기</S.Button>
          </S.ButtonBox>
        </S.DeletePopup>
      </PopupModal>
    </S.StyledDeletePopup>
  );
}
export default DeletePopup;

DeletePopup.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any),
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

DeletePopup.defaultProps = {
  comment: null,
};
