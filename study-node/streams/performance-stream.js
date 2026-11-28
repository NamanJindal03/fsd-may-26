import fs from 'fs'

const startTime = Date.now();
const startMemory = process.memoryUsage().rss;
console.log(startTime);
console.log(startMemory);
import path from 'path';
const __dirname = import.meta.dirname;

const readFilePath = path.join(__dirname, 'large-file.txt')

// fs.readFile(readFilePath, 'utf-8', (err,data) => {

//     const endTime = Date.now();
//     const endMemory = process.memoryUsage().rss;
//     console.log(endTime);
//     console.log(endMemory)

//     console.log(((endMemory - startMemory)/1024/1024).toFixed(2), "MB")
// })


const readableStream = fs.createReadStream(readFilePath, {
    highWaterMark: 2500
})
readableStream.on("data", (chunk)=> {

})

readableStream.on("end", ()=> {
    const endTime = Date.now();
    const endMemory = process.memoryUsage().rss;
    console.log(endTime);
    console.log(endMemory)
    console.log(((endMemory - startMemory)/1024/1024).toFixed(2), "MB")

})

//gb -> 500mb 