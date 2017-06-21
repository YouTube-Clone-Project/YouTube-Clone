import React, { Component } from 'react';
import router from './router.js';

import './reset.css';
import './App.css';
import './components/VideoPage/VideoPage.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className = 'header_placeholder'></header>
        
        { router }

        {/*<section className='videopage_main_container'>

          <div className='more_videos_placeholder'></div>

          <div className='iframe_placeholder'>
            <div className='iframe'></div>
          </div>

          <div className='video_title_wrapper'>
            <div className='video_title_container'>
              <h2>Video Title</h2>
            </div>
          </div>
        

        </section>*/}

        <footer className='footer_placeholder'></footer>

      </div>
    );
  }
}

export default App;
