import React from 'react';
import './App.css';
import Gif1 from './Component/Gif1/Gif1';
import Gif2 from './Component/Gif2/Gif2';

function App() {

  return (
    <div className="App">
      <Gif1 />{/*Вызов компоненты Gif1 */}
      <Gif2 />
    </div>
  );
}

export default App;
