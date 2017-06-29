
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage.js';
import VideoPage from './components/VideoPage/VideoPage.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import LoginPage from './components/LoginPage/LoginPage.js'
import PressPage from './components/Footer/Press/Press.js'
import CopyrightPage from './components/Footer/Press/Copyright.js'
import CreatorPage from './components/Footer/Press/Creator.js'
import AdsPage from './components/Footer/Press/Ads.js'
import DevelopersPage from './components/Footer/Press/Developers.js'
import plusYTPage from './components/Footer/Press/+YouTube.js'
import AboutPage from './components/Footer/Press/About.js'

export default (
    <Switch>
        <Route component={ LandingPage } path='/' exact />


        <Route component={ LoginPage } path ='/login'/>

        <Route component={ VideoPage } path='/video/:videoId' />
        <Route component={SearchResults} path='/search/:userInput' />
        <Route component={PressPage} path='/Press' />
        <Route component={CopyrightPage} path='/Copyright' />
        <Route component={CreatorPage} path='/Creator' />
        <Route component={AdsPage} path='/Ads' />
        <Route component={DevelopersPage} path='/Developers' />
        <Route component={plusYTPage} path='/+YouTube' />
        <Route component={ AboutPage } path='/About' />


    </Switch>
)
