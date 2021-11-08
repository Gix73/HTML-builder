const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, "./text.txt");
const stream = fs.createReadStream(currentPath);

stream.once('data', (data) => {
    console.log(data.toString());
});
