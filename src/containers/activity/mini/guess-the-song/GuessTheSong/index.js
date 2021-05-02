import React, {
  useReducer, useEffect, useMemo, useState,
} from 'react';
import Flicker1 from '@C/activity/mini/guess-the-song/Flicker1';
import { ThemeProvider } from 'styled-components';
import { themeBasic } from '@C/activity/mini/guess-the-song/theme';
import Flicker2 from '@C/activity/mini/guess-the-song/Flicker2';
import Flicker3 from '@C/activity/mini/guess-the-song/Flicker3';
import Slide1 from '@C/activity/mini/guess-the-song/Slide1';
import Slide2 from '@C/activity/mini/guess-the-song/Slide2';
import Slide3 from '@C/activity/mini/guess-the-song/Slide3';
import BlackTriangle from '@C/activity/mini/guess-the-song/BlackTriangle';
import BlackRect from '@C/activity/mini/guess-the-song/BlackRect';
import BlackHexagon from '@C/activity/mini/guess-the-song/BlackHexagon';
import HorizontalLine1 from '@C/activity/mini/guess-the-song/HorizontalLine1';
import HorizontalLine2 from '@C/activity/mini/guess-the-song/HorizontalLine2';
import HorizontalLine3 from '@C/activity/mini/guess-the-song/HorizontalLine3';
import Explosion1 from '@C/activity/mini/guess-the-song/Explosion1';
import Explosion2 from '@C/activity/mini/guess-the-song/Explosion2';
import Explosion3 from '@C/activity/mini/guess-the-song/Explosion3';
import Lyrics from '@C/activity/mini/guess-the-song/Lyrics';
import * as S from './styles';

function GuessTheSong() {
  const [triggers, dispatch] = useReducer(reducer, null, init);
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const keypressFunction = (e) => {
      switch (e.code) {
        case 'KeyA':
        case 'KeyB':
        case 'KeyC':
        case 'KeyD':
        case 'KeyE':
        case 'KeyF':
        case 'KeyG':
        case 'KeyH':
        case 'KeyI':
        case 'KeyJ':
        case 'KeyK':
        case 'KeyL':
        case 'KeyM':
        case 'KeyN':
        case 'KeyO':
          dispatch({ type: 'toggle', key: `trigger${e.code[3]}` });
          dispatch({ type: 'toggle', key: 'triggerLyrics' });
          setLyrics(lyricsList[e.code[3]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keypress', keypressFunction);
    return () => {
      window.removeEventListener('keypress', keypressFunction);
    };
  }, []);

  const Tiles = useMemo(() => (
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'].map((key, i) => {
      const className = `Tile${key}`;
      let element = null;
      return (
        <S.Tile
          key={i}
          className={className}
          onTouchStart={() => {
            if (!element) {
              element = document.querySelector(`.${className}`);
            }
            element.style.display = 'none';
            const triggerReflow = element.offsetWidth;
            element.style.display = 'block';
            dispatch({ type: 'toggle', key: `trigger${key}` });
            dispatch({ type: 'toggle', key: 'triggerLyrics' });
            setLyrics(lyricsList[key]);
          }}
        />
      );
    })
  ), []);

  return (
    <ThemeProvider theme={themeBasic}>
      <S.Background className="SvgWrapper">
        <S.TileContainerWrapper>
          <S.TileContainer>
            {Tiles}
          </S.TileContainer>
        </S.TileContainerWrapper>

        <Lyrics
          trigger={triggers.triggerLyrics}
          dispatch={dispatch}
          lyrics={lyrics}
        />

        <Slide3 trigger={triggers.triggerF} dispatch={dispatch} />
        <Slide2 trigger={triggers.triggerE} dispatch={dispatch} />
        <Slide1 trigger={triggers.triggerD} dispatch={dispatch} />

        <Flicker1 trigger={triggers.triggerA} dispatch={dispatch} />
        <Flicker2 trigger={triggers.triggerB} dispatch={dispatch} />
        <Flicker3 trigger={triggers.triggerC} dispatch={dispatch} />

        <BlackTriangle trigger={triggers.triggerG} dispatch={dispatch} />
        <BlackRect trigger={triggers.triggerH} dispatch={dispatch} />
        <BlackHexagon trigger={triggers.triggerI} dispatch={dispatch} />

        <HorizontalLine1 trigger={triggers.triggerJ} dispatch={dispatch} />
        <HorizontalLine2 trigger={triggers.triggerK} dispatch={dispatch} />
        <HorizontalLine3 trigger={triggers.triggerL} dispatch={dispatch} />

        <Explosion1 trigger={triggers.triggerM} dispatch={dispatch} />
        <Explosion2 trigger={triggers.triggerN} dispatch={dispatch} />
        <Explosion3 trigger={triggers.triggerO} dispatch={dispatch} />
      </S.Background>
    </ThemeProvider>
  );
}
export default GuessTheSong;

GuessTheSong.propTypes = {

};

function init() {
  return {
    triggerLyrics: false,
    triggerA: false,
    triggerB: false,
    triggerC: false,
    triggerD: false,
    triggerE: false,
    triggerF: false,
    triggerG: false,
    triggerH: false,
    triggerI: false,
    triggerJ: false,
    triggerK: false,
    triggerL: false,
    triggerM: false,
    triggerN: false,
    triggerO: false,
  };
}

function reducer(state, action) {
  if (action.type === 'toggle') {
    const { key } = action;
    return { ...state, [key]: !state[key] };
  }
  throw new Error();
}

const lyricsList = {
  A: '아무',
  B: '오늘',
  C: '영원',
  D: '허공',
  E: '겨울',
  F: '보고',
  G: '영원히 되감을 순간이니까',
  H: '어느 작별이 이보다 완벽할까',
  I: '이런 결말이 어울려',
  J: 'It\'s no kids zone',
  K: 'I can\'t die I\'m all-in',
  L: '나를 알게 되어서 기뻤는지',
  M: '나를 사랑해서 좋았었는지',
  N: '우릴 위해 불렀던 지나간 노래들이',
  O: '여전히 위로가 되는지',
};
