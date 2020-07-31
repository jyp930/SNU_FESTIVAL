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
        Hello World!!!
      </Title>
      <Button />
    </div>
  );
}

export default App;
