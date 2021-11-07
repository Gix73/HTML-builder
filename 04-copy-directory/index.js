const fs = require("fs");
const path = require("path");

async function main(){
  srcPath = path.join(__dirname, "./files/");
  newPath = path.join(__dirname, "./files-copy/");

  await fs.promises.rm(newPath, {recursive: true, force: true});
  fs.promises.mkdir(newPath, {recursive: true});

  fs.readdir(srcPath, {withFileTypes: true}, (err, files) => {
    async function getFile(file){
    
      if (file.isFile()) {
        fs.promises.copyFile(srcPath + file.name, newPath + file.name);
      }
    }
  
    files.forEach(getFile);
  });
}

main();