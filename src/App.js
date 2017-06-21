import React, { Component } from 'react';
import router from './router.js';

import './reset.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className = 'header_placeholder'></header>
        
        { router }

        <footer className='footer_placeholder'></footer>

      </div>
    );
  }
}

export default App;
