const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });

const ws = fs.createWriteStream('./files/new-lorem.txt');

/* 
rs.on('data', (datachunk) => {
    ws.write(datachunk);
}) 
*/

//pipe method to connect two streams
rs.pipe(ws);
