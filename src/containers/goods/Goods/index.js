import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import * as S from './styles';

function Goods() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <div
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="2300"
      data-sal-easing="ease-out-back"
    >
      event
    </div>
  );
}
export default Goods;

Goods.propTypes = {

};
