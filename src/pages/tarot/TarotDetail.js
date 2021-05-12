import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import TarotDetailContainer from '@C/tarot/TarotDetail';
import ResultAchieve from '@I/tarot/result/achieve.png';
import ResultCalm from '@I/tarot/result/calm.png';
import ResultDelight from '@I/tarot/result/delight.png';
import ResultHarmony from '@I/tarot/result/harmony.png';
import ResultImprovement from '@I/tarot/result/improvement.png';
import ResultPassion from '@I/tarot/result/passion.png';
import ResultPleasure from '@I/tarot/result/pleasure.png';
import ResultPrecious from '@I/tarot/result/precious.png';
import ResultRefresh from '@I/tarot/result/refresh.png';
import ResultRomance from '@I/tarot/result/romance.png';
import ResultStressFree from '@I/tarot/result/stress-free.png';
import ResultSympathy from '@I/tarot/result/sympathy.png';

function TarotDetail({ resultImage, result, links }) {
  return (
    <>
      <Header />
      <TarotDetailContainer
        resultImage={resultImage}
        result={result}
        links={links}
      />
    </>
  );
}
export default withMountEvent(TarotDetail);

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  links: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export const Achieve = () => (
  <TarotDetail
    resultImage={ResultAchieve}
    result="achieve"
    links={{
      name: '인스타그램',
      url: 'instagram',
    }}
  />
);

export const Calm = () => (
  <TarotDetail
    resultImage={ResultCalm}
    result="calm"
    links={{
      name: '보물찾기',
      url: '/activity/mini/treasure-hunt',
    }}
  />
);

export const Delight = () => (
  <TarotDetail
    resultImage={ResultDelight}
    result="delight"
    links={{
      name: '공연',
      url: '/performance/phone-cert',
    }}
  />
);

export const Harmony = () => (
  <TarotDetail
    resultImage={ResultHarmony}
    result="harmony"
    links={{
      name: '미니게임',
      url: '/activity/mini',
    }}
  />
);

export const Improvement = () => (
  <TarotDetail
    resultImage={ResultImprovement}
    result="improvement"
    links={{
      name: '미궁게임',
      url: '/activity/mini/riddle',
    }}
  />
);

export const Passion = () => (
  <TarotDetail
    resultImage={ResultPassion}
    result="passion"
    links={{
      name: '미궁게임',
      url: '/activity/mini/riddle',
    }}
  />
);

export const Pleasure = () => (
  <TarotDetail
    resultImage={ResultPleasure}
    result="pleasure"
    links={{
      name: '인스타그램',
      url: 'instagram',
    }}
  />
);

export const Precious = () => (
  <TarotDetail
    resultImage={ResultPrecious}
    result="precious"
    links={{
      name: '공연',
      url: '/performance/phone-cert',
    }}
  />
);

export const Refresh = () => (
  <TarotDetail
    resultImage={ResultRefresh}
    result="refresh"
    links={{
      name: '방명록',
      url: '/guest-book',
    }}
  />
);

export const Romance = () => (
  <TarotDetail
    resultImage={ResultRomance}
    result="romance"
    links={{
      name: '단체게임',
      url: '/activity/group',
    }}
  />
);

export const StressFree = () => (
  <TarotDetail
    resultImage={ResultStressFree}
    result="stress-free"
    links={{
      name: '관악게임토너먼트',
      url: '/performance/game-tournament',
    }}
  />
);

export const Sympathy = () => (
  <TarotDetail
    resultImage={ResultSympathy}
    result="sympathy"
    links={{
      name: '고릴라디오',
      url: '/activity/radio',
    }}
  />
);
