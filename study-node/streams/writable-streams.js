import fs, { read } from 'fs'
import path from 'path';
const __dirname = import.meta.dirname;
console.log(__dirname);

const writeOutput = path.join(__dirname, 'write-stream-output.txt')

//write demonstration

// const writeableSteam = fs.createWriteStream(writeOutput);
// writeableSteam.write("Hello I am naman");
// writeableSteam.write("where are you from?");
// writeableSteam.write("\n do you want to hangout for a coffee?")

// writeableSteam.end();

// writeableSteam.on("finish", () => {
//     console.log("all writes are finished")
// })


const readInputFile = path.join(__dirname, 'large-file.txt')

// function getFileSizeInBytes() {
//   const stats = fs.statSync(writeOutput);
//   ; // Returns size in bytes
//   console.log(stats.size)

//     //read and write demonstration
//     const readableStream = fs.createReadStream(readInputFile, {
//         highWaterMark: 10
//     });
//     const writeableSteam = fs.createWriteStream(writeOutput, {
//         start: stats.size
//     });

//     readableStream.on("data", (chunk) => {
//         console.log(chunk.toString())

//         writeableSteam.write(chunk)
//     })
// }

// getFileSizeInBytes()


const readableStream = fs.createReadStream(readInputFile);
const writeableSteam = fs.createWriteStream(writeOutput);

// readableStream.on("data", (chunk) => {
//     console.log(chunk.toString())

//     writeableSteam.write(chunk)
// })

// readableStream.pipe(writeableSteam); //this manages the backpressure autoamtically

//pipe | pipeline (error)->    devops ()

//pipeline -> 
import { pipeline } from 'stream/promises'; //cleanup mechanism
// import { promisify } from 'util';
// const pipelineAsync = promisify(pipeline);

async function copyFile(){
    try{
        await pipeline( //sometimes this gives a false alarm 
            fs.createReadStream(readInputFile),
            fs.createWriteStream(writeOutput)
        )
        console.log('files copied successfully')
    }
    catch(errr){
        console.log(errr)
    }
    
}
copyFile();