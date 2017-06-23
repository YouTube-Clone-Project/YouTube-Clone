
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.js';
import VideoPage from './components/VideoPage/VideoPage.js';
import SearchResults from './components/SearchResults/SearchResults.js';

export default (
    <Switch>
        <Route component={ LandingPage } path='/' exact />
        <Route component={ VideoPage } path='/video/:videoId' />
        <Route component={ SearchResults } path='/search' />
    </Switch>
)
