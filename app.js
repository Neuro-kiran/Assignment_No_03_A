                        /*require dependencies*/
//app.js requirements to be able to run the app

//express
const express = require('express');
//middleware 
const bodyParse = require('body-parser');
//creating a new express app
const app = express();

const logger = require('morgan');


                            /*Middleware*/
//set up 'view engine' to pug 
app.set('view engine', 'pug');

app.use(bodyParse.urlencoded({extended: false}));

//serve the static files 
app.use('/static', express.static('public'));
app.use('/static', express.static('images'));
app.use(logger('dev'));


                            /*Routes*/
//import router
const routes = require('./routes');
const indexRoute = require('./routes/index');
const projectRoute = require('./routes/project');
const errorRoute = require('./routes/error');

//use imported routes 
app.use('/', indexRoute);
app.use('/project', projectRoute);
app.use(errorRoute);


                        /*Start Server*/
//app should listen to port 3000
app.listen(3000, () => {
    //log a string to the console: which port the app is listening to
    console.log('This application is running on localhost:3000')
});