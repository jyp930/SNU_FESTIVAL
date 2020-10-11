import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TypingTextTransition from '@F/textAnimation/TypingTextTransition';
import Sal from '@F/Sal';
import * as S from './styles';

function DetailTemplate({ title, description }) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsTitleVisible(true), 1000);
  });

  return (
    <S.StyledDetailTemplate>
      <S.TitleBox>
        {isTitleVisible && (
          <>
            <S.Title>
              <TypingTextTransition text={title} intervalTime={50} delayTime={1200} />
            </S.Title>
            <S.Description>
              <Sal delay={800} duration={500} animation="slide-up">
                <>{description}</>
              </Sal>
            </S.Description>
          </>
        )}
      </S.TitleBox>
    </S.StyledDetailTemplate>
  );
}
export default DetailTemplate;

DetailTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
