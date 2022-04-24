//This file holds the project routes of my app 

//setting requests for this file
const express = require('express');
const router = express.Router();

//projects is an array of objects 
const { projects } = require('../data.json');


//A dynamic 'project' route: If you go to a project without an id, it will send you back to the portfolio page with all projects 
router.get('/', (req, res) => {
    //redirect the 'project' page without an id 
    res.redirect('/');
}); 

//A dynamic 'project/id' using the json file to render ids for each page 
//& checks if the requested id is greater than the project array length
 router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    const project = projects[id];
    //if the id is greater than the project array length..
    if(id >= projects.length) {
        //the middleware sub-stack shows the error page and logs info in the terminal for that type of HTTP request to the /user/:id path
        next();
    // if the id is NOT greater than the project array length.. 
    } else {
        //the project page is rendered 
        res.render('project', {project});  
    }
    
});

//This allows us to export and use in app.js 
module.exports = router;