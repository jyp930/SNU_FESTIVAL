import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { centerStore } from '@/mobX/center';
import TypingTextTransition from '@F/textAnimation/TypingTextTransition';
import Sal from '@F/Sal';

import IU1 from '@I/jpeg/IU1.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import * as S from './styles';

const images = [IU5, IU4, IU1, IU1, IU4, IU5, IU1, IU4, IU5, IU1, IU4, IU5];

function DetailTemplate({ title, description }) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const setCenterComponent = useCallback((text) => {
    centerStore.setCenterComponent(<S.CenterText>{text}</S.CenterText>);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsTitleVisible(true), 1000);
  }, []);

  return (
    <S.StyledDetailTemplate>
      {isTitleVisible && (
        <>
          <S.TitleBox>
            <S.Title>
              <TypingTextTransition text={title} intervalTime={50} delayTime={1200} />
            </S.Title>
            <S.Description>
              <Sal animation="slide-up" delay={800} duration={500}>
                <S.DescriptionText>{description}</S.DescriptionText>
              </Sal>
            </S.Description>
          </S.TitleBox>
          <S.Pictures>
            { images.map((image, index) => (
              <S.Picture
                onMouseEnter={() => setCenterComponent(`2020 가을${index} 단체게임`)}
                onMouseLeave={() => setCenterComponent(null)}
                key={index}
              >
                <Sal
                  animation={index % 2 === 0 ? 'flip-up' : 'flip-down'}
                  duration={1000}
                  delay={index * 20}
                >
                  <S.Image src={image} alt="IMAGE" />
                </Sal>
              </S.Picture>
            ))}
          </S.Pictures>
        </>
      )}
    </S.StyledDetailTemplate>
  );
}
export default DetailTemplate;

DetailTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
