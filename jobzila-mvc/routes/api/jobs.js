const express = require('express');
const router = express.Router();
const jobsController = require('../../controllers/jobController');
// Give route for ../ = come out of api, ../ = come out of routes, go into controllers folder, and get the jobController.js file 


// Create a route structure that avoids needing get, post, put, and delete as multiple routes, as done previously, instead we do this:

router.route('/') 
    .get(jobsController.getAlljobs)
    .post(jobsController.createJob)
    .put(jobsController.updateJob)
    .delete(jobsController.deleteJob);

router.route('/:id')
    .get(jobsController.getJob);



module.exports = router;
