const fs = require("fs");
const path = require("path");

const currentPath = path.join(__dirname, "./styles/");
const destPath = path.join(__dirname, "./project-dist/", "bundle.css");


 fs.access(destPath, function(error){
        if (error) {
            rWD();
        } else {
           let timer = setInterval(() =>  fs.promises.rm(destPath, { force: true}), 2000);
            clearInterval(timer)
            rWD();
        }
    });

function rWD(){
    let content;
    let arr = [];
    let counter = 0;
    let writer = fs.createWriteStream(destPath);

    fs.readdir(currentPath, {withFileTypes: true}, (err, files) => {

        async function showFile(file){
        if (file.isFile()) {
            if(path.extname(file.name) == ".css"){
                const readPath = currentPath + `${file.name}`
                const stream = fs.createReadStream(readPath);
               
                stream.on('data', (data) => {
                    content = data.toString();
                    arr.push(content);
                    writer.write(arr[counter]);
                    counter++;
                });
            }
        }
      }
      
      files.forEach(showFile);
      
    });
}
