

// **anti-pattern

//** to show this code go to index.js and run App component */

import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;

  &.highlight {
    background-color: yellow;
  }
`;

const TextInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

//! dewfining a function component inside another one, is having unstable or inconsistent state
// ! in this code if you say toggle highlight, it,s highlighted toggle will be change and if you push toggle again toggle highlight will be remove

// ! If the status of the toggle is in the highlight mode and you type in the input, you will see that the status of the toggle returns with initialt value, that is, without highlight.

export default function App() {
  const [inputValue, setInputValue] = useState('');

  // Nested component to handle button state and styling
  const ToggleHighlight = () => {
    const [highlighted, setHighlighted] = useState(false);

    return (
      <Container className={highlighted ? 'highlight' : ''}>
        <ToggleButton onClick={() => setHighlighted(!highlighted)}>
          Toggle Highlight
        </ToggleButton>
      </Container>
    );
  };

  return (
    <div>
      <TextInput
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ToggleHighlight />
    </div>
  );
}
