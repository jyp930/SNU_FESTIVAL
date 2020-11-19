import React, { useState } from 'react';
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

  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      // console.log(e.target.value);
      setValue(e.target.value);
    };
    return { value, onChange, setValue };
  };

  const Input = useInput('');
  const Delete = () => {
    if (Input.value !== Password) toast('비밀번호가 틀렸습니다');
    else {
      toast.dismiss();
      toast('삭제되었습니다');
      setIsModalOpen(false);
    }
    Input.setValue('');
  };

  return (
    <S.StyledDeletePopup>
      <Popup {...SimpleModal}>
        <S.DeletePopup>
          <div>삭제하시겠습니까?</div>
          <S.InputBox placeholder="비밀번호" maxLength="20" {...Input} />
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
