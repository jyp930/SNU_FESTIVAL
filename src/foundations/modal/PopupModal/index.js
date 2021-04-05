import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { rgba } from 'polished';

function PopupModal({
  isModalOpen, setIsModalOpen, children, closeOnDocumentClick, width,
}) {
  return (
    <Popup
      modal
      open={isModalOpen}
      closeOnDocumentClick={closeOnDocumentClick}
      onClose={() => setIsModalOpen(false)}
      overlayStyle={{ background: rgba(0, 0, 0, 0.7) }}
      contentStyle={{
        width,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
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
  closeOnDocumentClick: PropTypes.bool,
  width: PropTypes.string,
};

PopupModal.defaultProps = {
  closeOnDocumentClick: false,
  width: undefined,
};
