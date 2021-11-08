const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');

const currentPath = path.join(__dirname,"text.txt");
let writer = fs.createWriteStream(currentPath);
let rd = readline.createInterface(process.stdin, process.stdout);
console.log("Hello");

rd.on('line', (str)=>{
    if(str.toString() == "exit"){
        rd.close();
        writer.close();
        console.log("Bye");
        process.exit();
    }
   writer.write(str.toString() + "\n");
});

rd.on('SIGINT', ()=>{
    rd.close();
    writer.close();
    console.log("Bye");
    process.exit();
});