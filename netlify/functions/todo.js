import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;
const API_KEYA = process.env.REACT_APP_GOOGLE_CALENDAR_A;
const API_KEYB = process.env.REACT_APP_GOOGLE_CALENDAR_B;
const API_KEYC = process.env.REACT_APP_GOOGLE_CALENDAR_C;
const API_KEYD = process.env.REACT_APP_GOOGLE_CALENDAR_D;

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
const a = <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>;
	
exports.handler = function(event, context, callback) {
   console.log(event);
   console.log(context);
   
   let { API } = event.queryStringParameters
   
   try{

      callback(null, {
          statusCode: 200,
          body: a, // this body has to be a string
		 
       })

   }catch(error){
        console.log("i dont know");
        console.log(API);
        console.log(API_KEY);
        callback(err)
   } 
}

// https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
