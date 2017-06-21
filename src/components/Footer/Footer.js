import React from 'react';
import { Route,Link } from 'react-router-dom';

import './Footer.css'
import logo from '../Header/img/logo.png';
import dropdown from '../Header/img/drop_down_arrow.png';
import copyright from '../Header/img/copyright.ico';

export default function footer(props){
    return(
        <section className="main_footer_section">
            <section id="first_row">
                <div className="logo">
                    <img src={ logo }/>
                </div>
                <div className="language_select">
                    <div id="language_img"></div>
                    <p>Language: English </p>
                    <img src={ dropdown }/>
                </div>
                <div className="location_select">
                    <p>Content location: United States </p>
                    <img src={ dropdown }/>
                </div>
                <div className="restricted_settings">
                    <p>Restricted Mode: On </p>
                    <img src= { dropdown }/>
                </div>
                <div className="history_bttn">
                    <div id="hourglass"></div>
                    <p>History </p>
                </div>
                <div className="help_bttn">
                    <div id="help_icon"></div>
                    <p>Help </p>
                </div>
            </section>
            <section id="second_row">
                <ul>
                    <li>About</li>
                    <li>Press</li>
                    <li>Copy Right</li>
                    <li>Creators</li>
                    <li>Advertise</li>
                    <li>Developers</li>
                    <li>+YouTube</li>
                </ul>
            </section>
            <section id="third_row">
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Policy & Safety</li>
                    <li>Send Feedback</li>
                    <li>Test New Features</li>
                    <li id="copyright">
                    &copy; 2017 YouTube, LLC
                    </li>
                </ul>
            </section>
            
        </section>
    )
}