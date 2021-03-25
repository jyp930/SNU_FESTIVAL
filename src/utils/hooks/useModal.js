import React, { useState } from 'react';
import PopupModal from '@F/modal/PopupModal';

const useModal = (ContentComponent) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalComponent = (
    <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <ContentComponent setIsModalOpen={setIsModalOpen} />
    </PopupModal>
  );

  return { modalComponent, isModalOpen, setIsModalOpen };
};
export default useModal;
