//1- "npm init" (or "npm init -y to default yes to all prompts")
// 2- "npm install express"

const express = require('express');
const { response } = require('express');
const app = express();

//Serve css and other static files from directory 'public'
//express.static() returns middleware that handles every request,
//and for whatever request matches a static file,
//it sends the static file
app.use(express.static('public'));

//Set route handlers for common endpoints
app.get('/about', (request,response)=> {
  // response.send('Olá mundo');
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request,response)=> {
  // response.send('Olá mundo');
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get("/*", (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});




app.listen(3000);