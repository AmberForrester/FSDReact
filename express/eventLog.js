const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;

const {format} = require('date-fns');
const {v4:uuid} = require('uuid');

//console.log(uuid());

const eventLogs = async(myMessage) => {

    const dateTime = `${format(new Date(), 'MM/dd/yyyy HH:mm:ss')}`;

    const logItem = `${dateTime}\t ${uuid()}\t ${myMessage}\n`;

    console.log(logItem);

    try {

        if (!fs.existsSync(path.join(__dirname, 'mylogs')))

            {
                await fspromises.mkdir(path.join(__dirname, 'mylogs'));
            }

                await fspromises.appendFile(path.join(__dirname, 'mylogs', 'myEventLog.txt'), logItem);
    }

    catch(err) {

        console.log(err);
    }
}

module.exports = eventLogs;
