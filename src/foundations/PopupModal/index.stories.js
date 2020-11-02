import React from 'react';
import PopupModal from './index';

export default {
  title: 'foundations/PopupModal',
};

export const Default = () => (
  <PopupModal
    isModalOpen
    setIsModalOpen={() => {}}
  >
    <div>TEST</div>
  </PopupModal>
);
