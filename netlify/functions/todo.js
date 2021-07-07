import Calendar from "@ericz1803/react-google-calendar";

let API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API

console.log(API_KEY);

exports.handler = function(event, context, callback) {
   console.log(event);
   console.log(context);
   
   let { API } = event.queryStringParameters
   
   try{

      callback(null, {
          statusCode: 200,
          body: API_KEY, // this body has to be a string
       })

   }catch(error){
        console.log("i dont know");
        console.log(API);
        console.log(API_KEY);
        callback(err)
   } 
}

// https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
