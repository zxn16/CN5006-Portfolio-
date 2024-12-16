import React from 'react';
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent' 

function App() {
  return (
    <div className="App">
      <h1>Emoji Counter App</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}></div>
      <FacebookEmojiCounter type="Like" />
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="happy" />
      <ToggleMode/>
    </div>
  );
}

export default App;
