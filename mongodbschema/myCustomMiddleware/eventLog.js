const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const {format} = require('date-fns')
const {v4:uuid}= require('uuid');

//console.log(uuid());



const eventLogs = async (myMessage, logName) => {

const dateTime = `${format(new Date(),'MM/dd/yyyy HH:mm:ss')}`;    


const logItem =  `${dateTime}\t ${uuid()} \t${myMessage}\n` ;//`${dateTime}\t${uuid()}\t${myMessage}`;

console.log(logItem);

try 
{

    if (!fs.existsSync(path.join(__dirname,'..', 'mylogs' )))
        {

            await fsPromises.mkdir(path.join(__dirname,'..', 'mylogs' ));

        }
        await fsPromises.appendFile(path.join(__dirname,'..',  'mylogs', logName),logItem );

}
catch (err)
{
    console.log(err);
}

}


const logger = (req, res, next)=>{

    eventLogs(`${req.method}\t${req.headers.origin}\t${req.url}`, 'myreqLog.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
    
    }

module.exports = {logger, eventLogs};
