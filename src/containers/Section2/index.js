import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import * as S from './styles';

function Section2({ parallax, url }) {
  return (
    <div>
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />

      <ParallaxLayer offset={1.3} speed={-0.3}>
        <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%', pointerEvents: 'none' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.scrollTo(2)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <img src={url('bash')} style={{ width: '40%' }} />
      </ParallaxLayer>
    </div>
  );
}
export default Section2;

Section2.propTypes = {

};
