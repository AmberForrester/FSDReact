// Create a whitelist "allowed list" that is R/T calling URL's because we want to restrict where the request comes to server.
const whiteList = ["https://www.google.com",  "http://127.0.0.1:3400", "http://127.0.0.1:5500"];
// For the URL's mentioned about let the source communicate with the server. 


const corsOptions = {

   origin: (origin, callback) => {

                  // -1 allows whitelist to pick up URL and allow it 
      if (whiteList.indexOf(origin) !== -1 || !origin) {
            // *** USING THIS -> || !origin : IS ONLY FOR DEVELOPMENT NOT PRODUCTION

         // if no error, then whatever URL coming in allow to be true
         callback(null, true);
      }

      else {

         callback(new Error ("Not allowed by CORS"));
      }
   },

   optionsSuccessStatus: 200
}

module.exports = corsOptions;