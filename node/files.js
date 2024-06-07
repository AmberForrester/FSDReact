const fsPromises =  require('fs').promises;
const path = require('path');


const fileOps = async () => {

try {

    //const data = await fsPromises.readFile(path.join(__dirname,'files', 'first-file.txt'), 'utf8');
    const data = await fsPromises.readFile(path.join(__dirname,'files', 'first-file.txt'), 'utf8');
    //console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'files', 'file-created-promise.txt'), data);
    await fsPromises.appendFile(path.join(__dirname,'files', 'file-created-promise.txt'), '\nWe are learning MERN');
    await fsPromises.rename(path.join(__dirname,'files', 'file-created-promise.txt'), path.join(__dirname,'files', 'rename-created-promise.txt'));

    const newData = await fsPromises.readFile(path.join(__dirname,'files', 'rename-created-promise.txt'), 'utf8')

    console.log(newData);

    


}
catch (err)
{
    console.log(err);

}

}

fileOps();