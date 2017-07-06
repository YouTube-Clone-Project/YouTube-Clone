import React from 'react';
import { Route,Link } from 'react-router-dom';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import './HamburgerDropdown.css';
  
function MySideNav (props) {
	return(
		<div id='sideNav' style={props.style }> 
            <br></br>
            
          <div style={{ background: '#d0171f', color: '#fff'}}>
				<Nav id='home'>
                    <NavText><iconH> H </iconH><itemH>&nbsp; &nbsp; Home</itemH></NavText>
                </Nav>
          </div>
            
          <SideNav highlightColor='#fff' highlightBgColor='#444444' >
                
            <Nav id='myChannel'>
				<NavText><icon2> J </icon2><item2>&nbsp; &nbsp; My channel</item2></NavText>
            </Nav>
			<Nav id='trending'>
				<NavText><icon6>  </icon6><item1>&nbsp; &nbsp; Trending</item1></NavText>
            </Nav>
			<Nav id='subs'>
				<NavText><icon7> 4 </icon7><item2>&nbsp; &nbsp; Subscriptions</item2></NavText>
            </Nav>
			<Nav id='getYTred'>
				<NavText><icon3> 4 </icon3><item1>&nbsp; &nbsp; Get YouTube Red</item1></NavText>
            </Nav>
			<Nav id='getYTtv'>
				<NavText><icon3> ¾ </icon3><item1>&nbsp; &nbsp; Get YouTube TV</item1></NavText>
			</Nav>
			<hr></hr>
			<h4 style={{ paddingLeft: '35px', color: '#db2532', fontFamily: 'Arial Narrow', fontWeight: 'bold' }}> LIBRARY </h4>
			<br></br>	
			<Nav id='history'>
				<NavText><icon2>  </icon2><item2>&nbsp; &nbsp; History</item2></NavText>
            </Nav>
			<Nav id='later'>
				<NavText><icon8>  </icon8><item2>&nbsp; &nbsp; Watch later</item2></NavText>
            </Nav>
			<Nav id='liked'>
				<NavText><icon9>  </icon9><item2>&nbsp; &nbsp; Liked videos</item2></NavText>
			</Nav>
			<hr></hr>
			<h4 style={{paddingLeft: '35px', color:'#db2532', fontFamily:'Arial Narrow', fontWeight: 'bold'}}> SUBSCRIPTIONS </h4>
			<br></br>	
			<Nav id='alien'>
				<NavText><icon1>  </icon1><item1>&nbsp; &nbsp; Alien encounters </item1></NavText>
            </Nav>
			<Nav id='sport'>
				<NavText><icon1>  </icon1><item1>&nbsp; &nbsp; Sports highlights</item1></NavText>
            </Nav>
			<Nav id='aCup'>
				<NavText><icon1> % </icon1><item1>&nbsp; &nbsp; America&#39;s Cup</item1></NavText>
            </Nav>
			<hr></hr>
			<Nav id='browse'>
				<NavText><icon4> + </icon4><item2>&nbsp; &nbsp; Browse channels</item2></NavText>
            </Nav>
			<hr></hr>
			<Link to='./Movie'>	
				<Nav id='YTmovies'>
					<NavText><icon1> ® </icon1><item1>&nbsp; &nbsp; YouTube Movies</item1></NavText>
				</Nav>
			</Link>		
			<br></br><br></br>
        </SideNav>
    </div>
)}

export default MySideNav
