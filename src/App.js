import React from 'react';
import styled from 'styled-components';
import Button from '@/temp/Button';

const Title = styled.div`
  font-size: 120px;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Title>
        Hello World!
      </Title>
      <Button />
      <iframe
        title="hi"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/M0GP1Dn42m8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default App;
