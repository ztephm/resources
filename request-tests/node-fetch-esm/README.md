# Node.js + Fetch API
*GET request using node-fetch ESM module*

#### Resources
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* https://nodejs.org/en/
* https://www.npmjs.com/package/node-fetch
* Example from [Stack Abuse post](https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/) 
* NASA example from [Twilio post](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)

#### Instructions

1. `mkdir node-fetch-esm && cd node-fetch-esm`
    * Create & enter new project folder
2. `npm init -y`
    * Creates a project named **fetch-esm** and generates package.json for it
3. `npm i node-fetch`
    * we'll use for GET requests but node-fetch can also handle POST requests, example [here](https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch/)
    * gets added to package.json's dependency section
    * NOTE: Node.js has two different types of module systems: [CommonJS and ECMAScript (ESM)](https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs).
      ```
      As of version 3.0, node-fetch is an ESM-only module - you are not able to import it with require(). If you don't use ESM yourself, it's advised to stay on version 2.0 instead of the latest one, in which case you can use the standard require() syntax.
      ```
      In this project we will use the ESM module.
4. `touch index.js`
    * Creates JS file
5. `code .`
    * opens current working directory in Visual Studio Code
6. *In package.json*
    * Add this line under the opening curly bracket: `"type": "module",`. 
    * Package.json should look like this:

    ```json
    {
      "type": "module",
      "name": "fetch-esm",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "node-fetch": "^3.1.0"
      }
    }
    ```
7. *In index.js*

  ```javascript
  import fetch from 'node-fetch';

  // API request 
  let _url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  fetch(_url)
      // Convert the response to JSON format
      .then(res => res.json())
      // Use the JSON data
      .then(json => {
          // Retrieve NASA image url from JSON data & log it to Terminal:
          console.log(json.url);
  })
  ```
8. *In command line tool*
    * `node index.js`
