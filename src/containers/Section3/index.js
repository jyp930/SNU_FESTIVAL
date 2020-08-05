import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import * as S from './styles';

function Section3({ parallax, url }) {
  return (
    <div>
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
        }}
      >
        <img src={url('earth')} style={{ width: '60%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundImage: url('clients', true),
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={() => parallax.scrollTo(0)}
      >
        <img src={url('clients-main')} style={{ width: '40%' }} />
      </ParallaxLayer>
    </div>
  );
}
export default Section3;

Section3.propTypes = {

};
