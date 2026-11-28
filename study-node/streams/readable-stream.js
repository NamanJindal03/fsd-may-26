import fs from 'fs';



import path from 'path';
//base path + study-node/streams
const __dirname = import.meta.dirname; //current directory 
const __filename = import.meta.filename;
console.log(__dirname);

const largeFilePath = path.join(__dirname, 'large-file.txt') //better way 
//combined path
///Users/namanjindal/Documents/pw/fsd-may-26/study-node/streams + large-file.txt
//?? compatible with all OS -> \/ 
console.log(largeFilePath)

// ('./large-file.txt') // not able to find??? unknown -> 
//
// const readableStream = fs.createReadStream(largeFilePath); //we havent done anything 
// //write now here 
// ///data -> 
// readableStream.on("data", (chunk) => {
// //
//     console.log(chunk) //small file?? complete file??
//     console.log(chunk.toString()) //we can convert a chunk into a human readable format
// })

// readableStream.on("error", (err) => {
//     console.log("something went wrong", err)
// })

//chunk??
//portion of file (small portion). not in Human readable format
// bytes -> buffer object 

//by default the chunk size is pretty huge -> thats why we were able to process
// the complete together. 

//how much amount of data (bytes of data) to process during each chunk?? 
const readableStream = fs.createReadStream(largeFilePath, {
    encoding: 'utf-8', //I passed a encoder option -> 
    highWaterMark: 10 
})

//readbale stream -> events listen -> data, end, error 

readableStream.on("data", (readableChunk) => {
    console.log(readableChunk)
    console.log('---------------new chunk------------------')
})
readableStream.on("end", ()=> {
    console.log('file reading ended')
})