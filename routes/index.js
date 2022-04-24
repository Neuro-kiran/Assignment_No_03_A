//This file holds the main routes of my app 

//setting up requests for this file
const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');
 
                            /* Routes */
//get home page
router.get('/', (req, res) => {
    //render the 'Home' page w/ locals set to data.projects 
    res.render('index', {projects});
});
    

//set up an 'about' (/about) route
router.get('/about', (req, res) => {
    //render the 'About' page
    res.render('about');
});

//export main routes file to use elsewhere 
module.exports = router;