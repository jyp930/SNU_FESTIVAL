import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import PopupModal from '@F/modal/PopupModal';
import * as S from './styles';

function TeamTemplate({
  name, core, backgroundColor, peopleTexts, workTexts, wordTexts,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => setIsModalOpen(open => !open), []);

  const ContentPart = (title, texts) => (
    <>
      <S.Title>{title}</S.Title>
      <S.Content>
        {texts.map(text => (
          <React.Fragment key={text}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </S.Content>
    </>
  );

  const ModalContent = (
    <S.ModalContentWrapper>
      {ContentPart('팀소개', peopleTexts)}
      {ContentPart('주요업무', workTexts)}
      {ContentPart('팀장단한마디', wordTexts)}
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
  peopleTexts: PropTypes.arrayOf(PropTypes.string),
  workTexts: PropTypes.arrayOf(PropTypes.string),
  wordTexts: PropTypes.arrayOf(PropTypes.string),
};

TeamTemplate.defaultProps = {
  peopleTexts: [],
  workTexts: [],
  wordTexts: [],
};
