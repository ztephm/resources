/* *****
API EXAMPLE
This example is a request to external server 
so we don't need to initiate our own to serve test data from
***** */ 
const https = require('https');

// NASA API Example credit: https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
let _url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

https.get(_url, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    const nasaData = JSON.parse(d);
    console.log('nasaData:', nasaData);
  })
}).on('error', (e) => {
  console.error(e);
});