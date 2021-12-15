/* Example credits: 
https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/
*/

import fetch from 'node-fetch';

// NASA API request
let _url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

fetch(_url)
    // Convert the response to JSON format
    .then(res => res.json())
    // Use the JSON data
    .then(json => {
        // Retrieve NASA image url from JSON data & log it to Terminal:
        console.log(json.url);
})