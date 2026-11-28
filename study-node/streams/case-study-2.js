import fs, { read } from 'fs'
import readline from 'readline'; //node official package -> 

import path from 'path';
const __dirname = import.meta.dirname;
console.log(__dirname);
const logFile = path.join(__dirname, 'error-log.txt')

// const readableStream = fs.createReadStream(logFile, {
//     encoding: 'utf-8',
//     highWaterMark: 20
// });

// readableStream.on("data", (chunk) => {
//     const lines = chunk.split("\n");
//     console.log(lines)

//     lines.forEach((line) => {
//         if(line.includes("ERROR")){
//             console.log(line)
//         }
//     })
// })

const readableStream = fs.createReadStream(logFile);
const rl = readline.createInterface({
    input: readableStream,
    crlfDelay: Infinity,
})
rl.on("line", (line) => {
    // console.log(line)
    if(line.includes("ERROR")){
        console.log(line)
    }
})

//native >>>> external -> 


// writing -> 
// pipes -> 

//performance -> 