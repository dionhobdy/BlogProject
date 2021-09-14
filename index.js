const chalk = require('chalk');
const express = require('express');
const path = require('path'); // all dependencies 

const app = new express(); // calls for new express() under a variable named "app"
app.use(express.static('public')); // access the static assets and pages in public folder

app.listen(4000, () => {
    console.log(`app listening on port ${chalk.cyan(4000)}`);
}); // port listener. it is set at 400. access it by typing in localhost:4000 in browser


// start of app.get path functions
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
}); // serves index.html upon request.

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
}); // serves about.html upon request.

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
}); // serves contact.html upon request.

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
}); // serves post.html upon request.
// end of app.get path functions



