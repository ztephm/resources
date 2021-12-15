# Node.js + Express.js + Nodemon + Body Parser Test
*POST & GET requests to local server created with Express*

#### Resources
* https://nodejs.org/en/
* https://expressjs.com/en/starter/installing.html
* https://www.npmjs.com/package/nodemon
* https://www.npmjs.com/package/body-parser
* Calculator example from Angela Yu's Udemy [The Complete 2022 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) course

#### Instructions

1. `mkdir node_express_server && cd node_express_server`
    * Create & enter new project folder
2. `touch server.js`
    * Creates JS file
3. `touch index.html`
    * Creates HTML file
4. `code .`
    * opens current working directory in Visual Studio Code
5. `npm init`
    * name the project if not using default
    * add description of what's being tested
    * use defaults for the rest
    * generates package.json with this info
6. `npm install express`
    * lets you create a local server for testing
    * gets added to package.json's dependency section
7. `npm install -g nodemon`
    * stops/restarts server automatically when HTML or JS code changes are saved
    * gets added to package.json's dependency section
8. `npm install body-parser`
    * lets you handle post requests
    * gets added to package.json's dependency section
9. *In server.js*

  ```javascript
  // Require needed node modules
  const express = require('express')
  const bodyParser = require('body-parser');
  // Instantiate server with express
  const app = express();
  // Define the port browser requests will connect to your server via
  const port = 8080;

  // For pulling vars etc from data that is sent to the server via POST request (request.body)
  app.use(bodyParser.urlencoded({extended: true})) 

  // GET request that responds with a file
  app.get('/', (req, res) => {
    // This index.html file contains a calculator form that users can input numbers into
    // __dirname is needed because you're accessing the file via a server
    res.sendFile(__dirname + "/index.html");
  })

  // POST request example
  app.post('/', (req, res) => {
    // Calculator form's input numbers are sent as post request when form is filled out
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`Your total is ${result}`);
  })

  // Start listening on port for browser requests to this server
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  ```

10. *In index.html*
    * `html:5` + tab
    * Code your project - in this case a calculator form is created
11. *In command line tool*
    * `nodemon server.js`
12. Navigate to **http://localhost:8080** in browser
    * Fill out calculator form and click Submit
13. Ctrl + C to stop server
