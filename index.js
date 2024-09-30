
//fs module for file operations
const fs = require('fs');


//for path
//const path = require('path');
//fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'uf8', (err, data) => {

//read the 
fs.readFile('./files/starter.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})

console.log('hello...');
/*
//write the files
fs.writeFile('./files/reply.txt', 'nice to meet you', (err) => {
    if(err) throw err;
    console.log('write completed successfully');


})

//append the files
fs.appendFile('./files/test.txt', 'testing text', (err) => {
    if(err) throw err;
    console.log('append completed successfully');
})

 */

fs.writeFile('./files/reply.txt', 'nice to meet you', (err) => {
    if(err) throw err;
    console.log('write completed successfully');

    fs.appendFile('./files/reply.txt', '\n\nYes it is ', (err) => {
        if(err) throw err;
        console.log('append completed successfully');

        //rename the file
        fs.rename('./files/reply.txt', './files/newreply.txt', (err) => {
            if(err) throw err;
            console.log('rename  completed successfully');
        })
    })


})






/*
//exit on uncaught errors
process.on('uncaughtException', (err) => {
    console.error('An uncaught error occurred:', err);
    process.exit(1);
}); 
*/
