import React, { useState } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import Section1 from '@/containers/Section1';
import Section2 from '@/containers/Section2';
import Section3 from '@/containers/Section3';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Home() {
  const [parallax, setParallax] = useState();

  return (
    <Parallax ref={ref => setParallax(ref)} pages={3}>
      <Section1 parallax={parallax} url={url} />
      <Section2 parallax={parallax} url={url} />
      <Section3 parallax={parallax} url={url} />
    </Parallax>
  );
}
export default Home;

Home.propTypes = {

};
