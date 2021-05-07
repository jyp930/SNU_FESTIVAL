import React from 'react';
import PropTypes from 'prop-types';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import TarotDetailContainer from '@C/tarot/TarotDetail';
import ResultExample from '@I/tarot/result/example.png';

function TarotDetail({ resultImage, result }) {
  return (
    <>
      <Header />
      <TarotDetailContainer
        resultImage={resultImage}
        url={`https://snu-festival-staging.web.app/tarot/${result}`}
      />
    </>
  );
}
export default withMountEvent(TarotDetail);

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export const Example = () => (
  <TarotDetail
    resultImage={ResultExample}
    result="example"
  />
);
