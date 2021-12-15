/* *****
SERVER EXAMPLE
This example sets up a local server to serve our own test data from.
Test data can be text, files, etc.
We will serve a CSV.
***** */ 

// Example credit: https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
const http = require("http");
const fs = require('fs').promises; // Use if responding with files - async can be more efficient than callback function
const host = 'localhost';
const port = 8080;
const filename = 'Public_Beach_Access_Locations_Florida.csv'

const requestListener = function (req, res) {
    // LOCAL FILE STRUCTURE:
    // CSV is stored in data folder
    // data folder is at same level as this project's server_app.js file
    // because we're using a server we need __dirname prepended to path
    fs.readFile(__dirname + `/data/${filename}`)
      // Data is returned after promise resolves (after CSV file is read)
      .then(contents => {
        // Set header for type of file you're serving
        res.setHeader("Content-Type", "text/csv");
        // Optional: specify that browser should download file with name we specify
        res.setHeader("Content-Disposition", "attachment;filename=public_beaches_fl.csv");
        // Send "OK" response to browser
        res.writeHead(200);
        // Send data (CSV) to browser
        res.end(contents);
        })  
      .catch(err => {
          // Send Internal Server Error response to browser
          res.writeHead(500); 
          // Send error message
          res.end(err);
          return;
        }); 
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

