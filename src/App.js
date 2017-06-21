import React, { Component } from 'react';
import router from './router.js';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import router from './router';

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
