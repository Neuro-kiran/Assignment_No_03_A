const express = require('express');
const router = express.Router();

//help with logging out errors

const createError = require('http-errors');

                         /* 404 */
//If no routes match, catch 404 error and forward it to Error Handler from http-errors
router.use('*', (req, res, next) => {
    next(createError(404));
});    

                        /* Error Handler */                        
router.use( (err, req, res, next) => { 
    //set message to err.message
    res.locals.message = err.message;
    //set status to err.status
    res.locals.status = err.status || 500;
    //set stack to err.stack
    res.locals.stack = err.stack;
    //set the response status to err status or 500
    res.status(err.status || 500); 
    //logs the error details in the console 
    console.error(`Something went wrong! 
        Status: ${err.status}. 
        Message: ${err.message}.
        Stack: ${err.stack}`);
    //render the error page
    res.render('error');
});

//export error handlers in order to use elsewhere  
module.exports = router;