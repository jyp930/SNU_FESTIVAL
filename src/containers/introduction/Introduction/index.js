import React from 'react';
import { config } from 'react-spring/renderprops';
import ContentsContainer from '@/containers/introduction/ContentsContainer';
import cancel from '@I/png/cancel.png';
import mascot from '@I/jpg/mascot.jpg';
import * as S from './styles';

const styleOfGrid = [
  {
    name: '축제 아카이빙',
    description: '축제 사진, 영상 모아두는 곳',
    background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    image: cancel,
  },
  {
    name: '역대 축팀장단',
    description: '역대 축장, 팀장단 모아두는 곳',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    image: mascot,
  },
];

function Introduction() {
  return (
    <S.StyledIntroduction>
      <S.StyledGrid
        data={styleOfGrid}
        keys={d => d.name}
        columns={2}
        margin={50}
        heights={500}
        lockScroll={false}
        closeDelay={0}
        config={config.slow}
      >
        {(style, active, toggle) => (
          <ContentsContainer {...style} active={active} toggle={toggle} />
        )}
      </S.StyledGrid>
    </S.StyledIntroduction>
  );
}
export default Introduction;

Introduction.propTypes = {

};
