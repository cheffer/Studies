const fs = require('fs');

fs.readFile('textCallback.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Professional: ', data);
})