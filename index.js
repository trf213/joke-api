const express = require('express');
const app = express();
let jokeRoute = require('./joke');
let jokesRoute = require('./jokes');

app.use('/jokes/all', jokesRoute);
app.use('/joke', jokeRoute);

app.listen(3000, ()=>{
    console.log('Server Started')
})