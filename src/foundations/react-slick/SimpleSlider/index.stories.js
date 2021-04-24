import React from 'react';
import SimpleSlider from './index';

export default {
  title: 'foundations/react-slick/SimpleSlider',
};

export const Default = () => (
  <SimpleSlider items={[
    <div style={{ backgroundColor: 'red' }}>1</div>,
    <div style={{ backgroundColor: 'black' }}>2</div>,
    <div style={{ backgroundColor: 'blue' }}>3</div>,
  ]}
  />
);
