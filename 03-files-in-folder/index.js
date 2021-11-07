const fs = require("fs");
const path = require("path");


const currentPath = path.join(__dirname, "./secret-folder/");

fs.readdir(currentPath, {withFileTypes: true}, (err, files) => {
  
    async function showFile(file){
    if (file.isFile()) {
      const fileName = file.name;
      const extension = path.extname(file.name).slice(1);
      const fileSize = (await fs.promises.stat(currentPath + fileName)).size;
      console.log(`${fileName} - ${extension} - ${fileSize} bytes`);
    }
  }
  
  files.forEach(showFile);
});