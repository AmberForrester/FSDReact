// Announce data as an object key: value:
const data = {
    jobs: require('../model/Jobs.json'),
    // Give route for ../ = come out of controllers, go into model folder, and get the jobs.json file
    setjobs: function (newJobs) { this.jobs = newJobs; }
};

const logger = require('../mylogs/logger');
logger.info('Application has started');



// "Chaining": creating different methods for a particular route.
// Do not need next after req, res R/T chaining with routes only when using middleware.



const getAlljobs = (req, res) => {
// Custom logic = "what we want to do" => Do not have to do anything with the data, just throw the response returning all of the data. 

    logger.info('Fetching all jobs');

        res.json(data.jobs);
    // Pick up the response, and send all data from jobs. 
    };



const updateJob = (req, res) => {
// Custom logic = use this to change the jobid, title, company, location, description, or applyLink.

    const job = data.jobs.find(job => job.jobid === req.body.jobid);
    // equate to the Job that exists, pick up the id and if it is found, update Job. 

        if (!job) {
            // If the Job does NOT exist - then return error + message 

            logger.error(`Job ID ${req.body.jobid} not found`);

            return res.status(400).json({ "message": `Job ID ${req.body.jobid} not found.` });
                // Inform user that the Job ID requested does not exist. 
        }

        // If ID does exist ...
        if (req.body.title) job.title = req.body.title;
        if (req.body.company) job.company = req.body.company;
        if (req.body.location) job.location = req.body.location;
        if (req.body.description) job.description = req.body.description;
        if (req.body.applyLink) job.applyLink = req.body.applyLink;

        // Let us map through the array -> if the value matches id = move new data into updated jobs.
        const updatedJobs = data.jobs.map(j => j.jobid === job.jobid ? job : j);

        //Update the jobs property of the data object to the newly created updatedJobs array.
        data.setjobs(updatedJobs);

        logger.info(`Job updated: ${JSON.stringify(job)}`);

        // Then passing the updated jobs to the user. 
        res.json(data.jobs);
};



const createJob = (req, res) => {
   
     const newJob = {
// Declaring an object

        // Pick up the Job data + length = getting the entire length in real time, by using +1 -> moving the results to the jobid, title, company, location, description, or applyLink. 
        jobid: data.jobs.length ? data.jobs[data.jobs.length - 1].jobid + 1 : 1,
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        description: req.body.description,
        applyLink: req.body.applyLink
    };
    
    // If NO title, company, location, description, or applyLink is given ...
    if (!newJob.title || !newJob.company || !newJob.location || !newJob.description || !newJob.applyLink) {

        logger.error('Failed to create job: All fields are required');

        // Send this response code + pass a message to the user. 
        return res.status(400).json({ 'message': 'All fields are required.' });
    }
        
    //setjobs is a variable defined at the top. 
    data.setjobs([...data.jobs, newJob]);
                // ... is using the Spread Operator to find all the current jobs -> then take the new data + add it to the Job data. 

    logger.info(`Job created: ${JSON.stringify(newJob)}`);

    res.status(201).json(data.jobs);
    // As part of the request we want to change and update the status as being successful + attaching json data to it. 
};



const deleteJob = (req, res) => {

    // Bring the ID and find out if the ID exists or not. 
    const job = data.jobs.find(job => job.jobid === req.body.jobid);
    
    if (!job) {

        logger.error(`Job ID ${req.body.jobid} not found`);

        // If it does NOT exist or null -> return status code + message
        return res.status(400).json({ "message": `Job ID ${req.body.jobid} not found` });
    }

    // *** Remember we are not deleting but we are filtering out the ID -> filter = update(filtering id out + updating new)
    const updatedJobs = data.jobs.filter(job => job.jobid !== req.body.jobid);

    data.setjobs(updatedJobs);

    logger.info(`Job deleted: ${req.body.jobid}`);

    res.json(data.jobs);
    // Throwing result out to the user, passing the updated data ID to the json data.jobs. 
};



const getJob = (req, res) => {

    logger.info(`Fetching job with ID: ${req.params.id}`);
    // See what parameters are being passed and identify any issues. 

    // Bring the ID parameter directly as string
    const jobId = req.params.id;

    // Find the job with the matching jobid 
    const job = data.jobs.find(job => job.jobid === jobId);
    // Filter out the data by using find = get the data after we filter it, and then pass it back to a singular job. 
    
    if (!job) {

        logger.error(`Job ID ${jobId} not found`);
        // If job does NOT exist then ... 
        return res.status(400).json({ "message": `Job ID ${jobId} not found` });
    }
        // Return error code + a message to the user.
    
    logger.info(`Job found: ${JSON.stringify(job)}`);
    res.json(job);
    // Pick up the response(res) + send all data to jobs but USE single job as the response.
};


module.exports = {getAlljobs, updateJob , createJob, deleteJob, getJob};

// We use {} R/T *multiple uses of module exports. 