import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//custom 21/07/04
import Calendar from "@ericz1803/react-google-calendar";


import './my_haeder.css';

const abc = '/.netlify/functions/todo?API';
console.log(abc);

// const url = `/.netlify/functions/todo?id=${todoId}`;
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;
const API_KEYA = process.env.REACT_APP_GOOGLE_CALENDAR_A;
const API_KEYB = process.env.REACT_APP_GOOGLE_CALENDAR_B;
const API_KEYC = process.env.REACT_APP_GOOGLE_CALENDAR_C;
const API_KEYD = process.env.REACT_APP_GOOGLE_CALENDAR_D;

// console.log(API_KEY);
// console.log(API_KEYA);
// console.log(API_KEYB);
// console.log(API_KEYC);
// console.log(API_KEYD);

let calendars = [
  // {
  //   calendarId: "?????", //청약
  //   color: "#7CB342" //optional, specify color of calendar 2 events
  // },
  {
    calendarId: API_KEYA, //청약
    color: "#7CB342" //optional, specify color of calendar 2 events
  },
  {
    calendarId: API_KEYB, //납입
    color: "#D50000" //optional, specify color of calendar 2 events
  },
  {
    calendarId: API_KEYC, //수요예측
    color: "#D50000" //optional, specify color of calendar 2 events
  },
  {
    calendarId: API_KEYD, //상장
    color: "#D50000" //optional, specify color of calendar 2 events
  }
];

let styles = {

  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  
  tooltip: {
	  width: "500px",
  },
  //you can also use emotion's string styles
  today: {
	background: "#5df58c4d",
	color: "black",
	fontWeight: "bold",
  }
}



class Example extends React.Component {
  render() {
    return (
    	<div>
			<div className="header">
				<header className="top_header">
				  <div className="container">
					<a href="https://stock-calendar-hfxjr.run.goorm.io/">
						<img className="pig" src={ require('./1.png')}  alt="돼지"/>
					</a>
					<h1>Stock.gg</h1>
					<p>This is sub text. Content will be added later.</p>
				  </div>
				</header>	
			{/*Header ends*/}
			</div>
			
			<Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
			
      	</div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('calendar_area'));


