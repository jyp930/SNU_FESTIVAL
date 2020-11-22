import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Fade from 'react-reveal/Fade';
import PopupModal from '@F/PopupModal';

function TeamTemplate({ name, core, backgroundColor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => setIsModalOpen(open => !open), []);

  const ModalContent = (
    <S.ModalContentWrapper>
      <S.Title>인재상</S.Title>
      <S.Content>
        인재상 1
        <br />
        인재상 2
      </S.Content>
      <S.Title>주요 업무</S.Title>
      <S.Content>
        게임 기획 및 제작
        <br />
        공모전 모집
        <br />
        장터 모집
        <br />
        캠핑 모집
      </S.Content>
      <S.Title>팀장단 한마디</S.Title>
      <S.Content>
        한마디
        <br />
        두마디
        <br />
        세마디
        <br />
        네마디
      </S.Content>
    </S.ModalContentWrapper>
  );

  return (
    <>
      <S.StyledTeamTemplate
        onClick={toggleModal}
        backgroundColor={backgroundColor}
      >
        <S.Name>
          <Fade duration={800}>
            { name }
          </Fade>
        </S.Name>
        <S.Core>
          <Fade duration={1000}>
            { core }
          </Fade>
        </S.Core>
      </S.StyledTeamTemplate>
      <PopupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <Fade duration={600}>
          <div onClick={toggleModal}>
            {ModalContent}
          </div>
        </Fade>
      </PopupModal>
    </>
  );
}
export default TeamTemplate;

TeamTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  core: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
