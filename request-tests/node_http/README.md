# Node.js HTTP Module Test
* *GET JSON data from external API*
* *GET CSV file from local server created with Node.js native HTTP module*

#### Resources
* https://nodejs.org/en/
* https://nodejs.org/api/http.html
* https://nodejs.org/api/https.html
* API example from [Twilio post](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)
* Server example from [Digital Ocean post](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module)
* CSV from [Florida Geospatial Open Data Portal](https://geodata.floridagio.gov/datasets/myfwc::public-beach-access-locations-florida/explore?showTable=true)

#### Instructions

1. `mkdir node_http && cd node_http`
    * Create & enter new project folder
2. `touch api_app.js`
    * Creates JS file for API request example
3. `touch server_app.js`
    * Creates JS file for server CSV request example
4. `mkdir data`
    * Copy [this CSV](https://github.com/ztephm/resources/blob/main/request-tests/node_http/data/Public_Beach_Access_Locations_Florida.csv) into your `data` directory
5. `code .`
    * opens project in Visual Studio Code
    
NOTE: `npm init` step is not needed because a package.json is not needed - the http module comes with node

6. *In api_app.js* 
   * Retrieve a daily featured image from NASA's API:

  ```javascript
  // Require needed node module
  const https = require('https');

  // API request url points to external NASA server
  let _url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  // Make the GET request
  https.get(_url, (res) => {
    // External server responds with status & headers
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    // External server responds with data
    res.on('data', (d) => {
      // Convert hexadecimal data format to JSON
      const nasaData = JSON.parse(d);
      // Log the JSON data to Terminal
      console.log('nasaData:', nasaData);
    })
  }).on('error', (e) => {
    console.error(e);
  });
  ```
7. *In command line tool - test API example*
    * `node api_app.js`
    * Terminal output should look similar to:

    ```
    statusCode: 200
    headers: {
      date: 'Wed, 15 Dec 2021 17:13:15 GMT',
      'content-type': 'application/json',
      'content-length': '1257',
      connection: 'close',
      vary: 'Accept-Encoding',
      'x-ratelimit-limit': '40',
      'x-ratelimit-remaining': '38',
      'access-control-allow-origin': '*',
      'access-control-expose-headers': 'X-RateLimit-Limit, X-RateLimit-Remaining',
      age: '2',
      via: 'http/1.1 api-umbrella (ApacheTrafficServer [cMsSf ])',
      'x-cache': 'MISS',
      'strict-transport-security': 'max-age=31536000; preload'
    }
    nasaData: {
      copyright: 'Zhuoxiao WangOrigin.Space',
      date: '2021-12-15',
      explanation: "What does Comet Leonard look like from space?  Today's featured image from Origin.Space's Yangwang-1 space telescope shows not only the currently bright comet -- but several other space delights as well. Taken in optical and ultraviolet light, C/2021 A1 (Leonard) is visible with an extended tail near the image center as it appeared five days ago.  The Earth is visible on the lower right, while layers of the Earth's atmosphere glow diagonally from the lower left to the upper right. The trails of two satellites can be seen in front of a myriad of distant stars that dot the background on the upper left. The faint bands of light running diagonally from the lower right to the upper left are auroras. Finally, the image also caught a meteor streaking just below the airglow. To see Comet Leonard yourself from the Earth's surface during the next few days, look toward the western horizon just after sunset or just before sunrise.",
      hdurl: 'https://apod.nasa.gov/apod/image/2112/LeonardSpace_Yangwang1_1960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Comet Leonard from Space',
      url: 'https://apod.nasa.gov/apod/image/2112/LeonardSpace_Yangwang1_960_annotated.jpg'
    }
    ```
8. *In server_app.js* 
   * Goal = retrieve a CSV of public beach locations
   * Paste [this code](https://github.com/ztephm/resources/blob/main/request-tests/node_http/server_app.js) into server_app.js & save
9. *In command line tool - test Server CSV example*
   * `node server_app.js`
10. Navigate to **http://localhost:8080** in browser
    * **public_beaches_fl.csv** should auto-download
11. Ctrl + C to stop server
