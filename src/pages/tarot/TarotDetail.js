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

function TarotDetail({ resultImage, result }) {
  return (
    <>
      <Header />
      <TarotDetailContainer
        resultImage={resultImage}
        result={result}
      />
    </>
  );
}
export default withMountEvent(TarotDetail);

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export const Achieve = () => (
  <TarotDetail
    resultImage={ResultAchieve}
    result="achieve"
  />
);

export const Calm = () => (
  <TarotDetail
    resultImage={ResultCalm}
    result="calm"
  />
);

export const Delight = () => (
  <TarotDetail
    resultImage={ResultDelight}
    result="delight"
  />
);

export const Harmony = () => (
  <TarotDetail
    resultImage={ResultHarmony}
    result="harmony"
  />
);

export const Improvement = () => (
  <TarotDetail
    resultImage={ResultImprovement}
    result="improvement"
  />
);

export const Passion = () => (
  <TarotDetail
    resultImage={ResultPassion}
    result="passion"
  />
);

export const Pleasure = () => (
  <TarotDetail
    resultImage={ResultPleasure}
    result="pleasure"
  />
);

export const Precious = () => (
  <TarotDetail
    resultImage={ResultPrecious}
    result="precious"
  />
);

export const Refresh = () => (
  <TarotDetail
    resultImage={ResultRefresh}
    result="refresh"
  />
);

export const Romance = () => (
  <TarotDetail
    resultImage={ResultRomance}
    result="romance"
  />
);

export const StressFree = () => (
  <TarotDetail
    resultImage={ResultStressFree}
    result="stress-free"
  />
);

export const Sympathy = () => (
  <TarotDetail
    resultImage={ResultSympathy}
    result="sympathy"
  />
);
