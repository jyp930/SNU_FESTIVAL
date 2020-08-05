import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import * as S from './styles';

function Section1({ parallax, url }) {
  return (
    <div>
      <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(1)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img src={url('server')} style={{ width: '20%' }} />
      </ParallaxLayer>
    </div>
  );
}
export default Section1;

Section1.propTypes = {

};
