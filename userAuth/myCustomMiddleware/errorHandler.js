const {eventLogs} = require('./eventLog');

const errorHandler = (err, req, res, next) => {

    eventLogs(`${err.name} \t ${err.message}`, 'pagelog.txt');
    console.log(err.stack);
    res.status(500).send(err.message)
}

module.exports = errorHandler;
