const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

// GET request that responds with a message
// Root path (https://localhost:3000/)
// app.get('/', (req, res) => {
//   res.send(`Hello world, initial GET request from browser to ${port} is being handled`)
// })

// GET request for non-root path
// /contact path
// https://localhost:3000/contact
// app.get('/contact', (req, res) => {
//   res.send(`My contact info is x@gmail.com`)
// })

// GET request that responds with a file
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

// POST request example
app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send(`Your total is ${result}`);
})

// Start listening on port for browser requests to this server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})