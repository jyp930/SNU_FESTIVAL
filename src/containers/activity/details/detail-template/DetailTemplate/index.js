import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from '@C/activity/details/detail-template/Title';
import PictureGrid from '@C/activity/details/detail-template/PictureGrid';
import CustomPaging from '@F/react-slick/CustomPaging';
import PopupModal from '@F/PopupModal';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function DetailTemplate({ title, description, items }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

  const openCarouselModal = useCallback((index) => {
    setModalInitialIndex(index);
    // NOTE: 클릭 삭제
    // setIsModalOpen(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return (
    <S.StyledDetailTemplate>
      {isVisible && (
        <>
          <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <Fade duration={600}>
              <CustomPaging items={items} initialIndex={modalInitialIndex} />
            </Fade>
          </PopupModal>
          <Title title={title} description={description} />
          <PictureGrid
            items={items}
            onClickItem={openCarouselModal}
          />
        </>
      )}
    </S.StyledDetailTemplate>
  );
}
export default DetailTemplate;

DetailTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
