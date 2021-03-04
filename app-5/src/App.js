import React from 'react';
import Image from './Image.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Image  source={require(this.props.cat)}/>
      <div>get it?</div>
    </div>
  );
}

export default App;
