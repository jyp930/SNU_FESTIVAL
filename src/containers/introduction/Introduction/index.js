import React from 'react';
import { config } from 'react-spring/renderprops';
import Grid from '@/foundations/Grid';
import ContentsContainer from '@/containers/introduction/ContentsContainer';
import cancel from '@I/png/cancel.png';
import mascot from '@I/jpg/mascot.jpg';
import * as S from './styles';

const styleOfGrid = [
  {
    name: 'Cancel',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    height: 500,
    image: cancel,
  },
  {
    name: 'New Mascot',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 500,
    image: mascot,
  },
];

function Introduction() {
  return (
    <S.StyledGrid
      data={styleOfGrid}
      keys={d => d.name}
      heights={d => d.height}
      columns={2}
      margin={30}
      lockScroll={false}
      closeDelay={0}
      config={config.slow}
    >
      {(styleOfGrid, active, toggle) => (
        <ContentsContainer {...styleOfGrid} active={active} toggle={toggle} />
      )}
    </S.StyledGrid>
  );
}
export default Introduction;

Introduction.propTypes = {

};
