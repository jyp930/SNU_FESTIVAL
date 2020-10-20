import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from '@C/activity/details/detail-template/Title';
import PictureGrid from '@C/activity/details/detail-template/PictureGrid';
import CustomPaging from '@F/react-slick/CustomPaging';
import Popup from 'reactjs-popup';
import * as S from './styles';
import Fade from 'react-reveal/Fade';

function DetailTemplate({ title, description, images }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openCarouselModal = useCallback((index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return (
    <S.StyledDetailTemplate>
      {isVisible && (
        <>
          <Popup
            modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            contentStyle={{ border: 'none', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}
          >
            <Fade duration={600}>
              <CustomPaging items={images} initialIndex={modalImageIndex} />
            </Fade>
          </Popup>
          <Title title={title} description={description} />
          <PictureGrid
            images={images}
            onClickImage={openCarouselModal}
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
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
