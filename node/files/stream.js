/*
//Using streams to read and write
const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('./files/lorem-new.txt');

//write data
rs.on('data', (dataSubSet)=>{ ws.write(dataSubSet)});

//use pipes
rs.pipe(ws);
*/

//********************************************** */
//making and checking directories
/*
const fs = require('fs');
fs.mkdir('./sadeed',(err)=>{

if (err) throw err;

console.log('Created the dir');


});
*/


/* const fs = require('fs');

if (!fs.existsSync('./sadeed'))
    {

        fs.mkdir('./sadeed',(err)=>{

            if (err) throw err;
            
            console.log('Created the dir');
            
            
            });
        

    }
    else
    {
        console.log('Dir already exist');
    }
 */



const fs = require('fs');
const dir = './check-directory';

if (!fs.existsSync(dir)) {

    fs.mkdir(dir, (err) => {

        if (err) {

            console.error('Failed to create the directory:', err);

        } else {

            console.log('Created the directory');

        }

    });

} else {

    fs.rm(dir, { recursive: true, force: true }, (err) => {

        if (err) {

            console.error('Failed to delete the directory:', err);

        } else {

            console.log(`${dir} was already created and has been successfully deleted!`);

        }

    });
}
