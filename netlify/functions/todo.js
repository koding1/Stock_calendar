const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;
const API_KEYA = process.env.REACT_APP_GOOGLE_CALENDAR_A;
const API_KEYB = process.env.REACT_APP_GOOGLE_CALENDAR_B;
const API_KEYC = process.env.REACT_APP_GOOGLE_CALENDAR_C;
const API_KEYD = process.env.REACT_APP_GOOGLE_CALENDAR_D;
	
exports.handler = function(event, context, callback) {
   console.log(event);
   console.log(context);
   
   let { API } = event.queryStringParameters
   
   try{

      callback(null, {
          statusCode: 200,
          body: API_KEY, API_KEYA, API_KEYB, API_KEYC, API_KEYD
		  // this body has to be a string
		 
       })

   }catch(error){
        callback(err)
   } 
}

// https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
