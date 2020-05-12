import React, { useState } from 'react';
export const HookSwitcher = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [fontSize, setFontSize] = useState(14);
  return (<div style={{ padding: '10px', backgroundColor, fontSize: fontSize + "px" }}>
    <span>React hooks: </span>
    <button onClick={() => { setBackgroundColor('black'); }}>Dark</button>
    <button onClick={() => { setBackgroundColor('white'); }}>Light</button>
    <button onClick={() => { setFontSize((fontSize) => fontSize + 2); }}>Big font</button>
    <button onClick={() => { setFontSize((fontSize) => fontSize - 2); }}>Small font</button>
  </div>);
};
