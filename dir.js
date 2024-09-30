const fs = require('fs');

// Check if the directory 'new' exists in the parent directory. If not, create it.
if (!fs.existsSync('./new')){
// Create a new directory named 'new'
fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('directory create')
    });
}




if (!fs.existsSync('./new')){


// remove old directory
fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('directory remove')
    });
}