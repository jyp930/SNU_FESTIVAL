import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import * as S from './styles';

function PopupModal({ isModalOpen, setIsModalOpen, children }) {
  return (
    <Popup
      modal
      open={isModalOpen}
      closeOnDocumentClick={false}
      onClose={() => setIsModalOpen(false)}
      overlayStyle={{ opacity: 0.8 }}
      contentStyle={{
        border: 'none', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent',
      }}
    >
      {children}
    </Popup>
  );
}
export default PopupModal;

PopupModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
