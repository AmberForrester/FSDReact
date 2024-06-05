const fs = require('fs');
const path = require('path');

// fs.readFile('./files/first-file.txt', (err, data) => {

//     if (err) throw err;

//     console.log(data.toString());
// });

//with Path
fs.readFile(path.join(__dirname,'files','first-file.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

//Create a file
fs.writeFile(path.join(__dirname,'files','second-file.txt'),'We are learning Node.', (err,data) => {
    if(err) throw err;
    console.log('Writing Text.');
});

//Append a file
fs.appendFile(path.join(__dirname,'files','third-file.txt'),'Look at me Appending a file', (err,data) => {
    if(err) throw err;
    console.log('Created a file using append.');
});

//Add another line to file using Append a File 
fs.appendFile(path.join(__dirname,'files','third-file.txt'), '\n\n and I am enjoying learning node FS', (err, data)=>{

    if(err) throw err;

    console.log('Creating file using append.');
});

console.log("Checking the Async.....");

process.on('uncaughtException', err => {
    console.error(`An uncaught error: ${err}`);
    process.exit(1);
});