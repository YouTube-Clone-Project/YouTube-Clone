import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h2>YouTube Clone</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
