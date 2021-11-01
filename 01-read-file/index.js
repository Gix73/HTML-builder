const fs = require('fs');
const path = require('path');

let currentPath = "";
currentPath = path.join("./","01-read-file/","text.txt");
const stream = fs.createReadStream(currentPath);
stream.once('data', (data) => {
    console.log(data.toString());
});
