import React from 'react';
import { config } from 'react-spring/renderprops';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
import ContentsContainer from '@C/introduction/ContentsContainer';
import Grid from './index';

export default {
  title: 'foundations/spring/Grid',
};

const styleOfGrid = [
  {
    name: '축제 아카이빙',
    description: '축제 사진, 영상 모아두는 곳',
    background: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    image: IU5,
  },
  {
    name: '역대 축팀장단',
    description: '역대 축장, 팀장단 모아두는 곳',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    image: IU6,
  },
  {
    name: '역대 게스트',
    description: '역대 게스트 명단',
    background: 'linear-gradient(135deg, #c3cfe2 0%, #a8edea 100%)',
    image: IU7,
  },
];

export const Default = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Grid
      data={styleOfGrid}
      keys={d => d.name}
      columns={styleOfGrid.length}
      margin={30}
      heights={600}
      config={config.slow}
    >
      {(style, active, toggle) => (
        <ContentsContainer {...style} active={active} toggle={toggle} />
      )}
    </Grid>
  </div>
);
