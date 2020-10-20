import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import * as S from './styles';

function PopupModal({ isModalOpen, setIsModalOpen, children }) {
  return (
    <Popup
      modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      contentStyle={{ border: 'none', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}
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
