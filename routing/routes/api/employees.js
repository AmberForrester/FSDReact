const express = require('express');
const router = express.Router();
const data = {};
data.employees = require('../../data/employees.json');
// Give route for ../ = come out of api, ../ = come out of routes, go into data folder, and get the employees.json file 


// "Chaining": creating different methods for a particular route.
// Do not need next after req, res R/T chaining with routes only when using middleware.

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
// Custom logic for the get = "what we want to do" => .get 


    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
// Whatever we are passing = we are getting back => .post


    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
            // Pay close attention to your values in the .json data file "key":value
        });
    })
// Update something => .put


    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });
// Pass the id to it, make sure id is used => .delete


router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });
// Define the route, similar the the get code but using id when using URL, for example: http://localhost:3400/employees/1 



module.exports = router;




// Creating individual routes each with its own -

/*
const express = require('express');
const router = express.Router();

const data = {};
data.employees = require('../../data/employees.json');


router.route('/')
.get ((res, req)=>{
res.json(data.employees);
})
.post((res, req)=>{
res.json({

    "firstname" : req.body.firstname,
    "lastname":  req.body.lastname
}

);
})
.put((res, req)=>{
    res.json({

        "firstname" : req.body.firstname,
        "lastname":  req.body.lastname
    }
    
    );
})
.delete((res, req)=>{
res.json({
    "id" : req.body.id
});
});

//http://localhost:3400/employees
//http://localhost:3400/employees/1

router.route('/:id')
.get ((res, req)=>{
    res.json({"id": req.params.id});
    });
    

/*
router.get()
router.put()
*/






/*
module.exports = router;*/
