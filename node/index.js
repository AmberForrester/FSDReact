const fs = require('fs');

fs.readFile('./files/first-file.txt', (err, data) => {

    if (err) throw err;

    console.log(data.toString());
});