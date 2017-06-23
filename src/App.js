import React, { Component } from 'react';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import router from './router.js';

import './reset.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />
          { router }
        <Footer />

      </div>
    );
  }
}

export default App;
