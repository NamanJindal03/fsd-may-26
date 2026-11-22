import { add, subtract } from "./operations-m.js";
import os from 'os'
import fs from 'fs'

// const addedValues = add(100, 200)
// const diffValues  = subtract(100, 200)
// console.log(os.homedir());
// console.log(os.machine())
// console.log(os.version())
// console.log(addedValues, diffValues)

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if(err) throw err
//     console.log(data) //data is available
// })

//if the same file is already present, it will overwrite it
// fs.writeFile('log.js', 'working working', (err) => {
//     if (err) throw err
//     console.log('we have written the file successfully')
// })

// fs.appendFile('log.js', 'joker', (err) => {
//     if (err) throw err
//     console.log('we have written the file successfully')
// })

//promise based -> async await ya promises cannot -> 
// promise wala 
//reliable work -> ???
//async -1 

//promises -> path code 10 mins ()

function readCertainFile(filePath){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err
        console.log(data) //??
    })
}

const filePath = 'sendMessage.txt'
    fs.writeFile(filePath, 'sending some message ', (err) => {
    if (err) throw err
    console.log('send message file')
    readCertainFile(filePath);
    
})

//async 2
// fs.readFileSync


//listener -> 
//process is a global term in nodejs 
process.on('uncaughtException', (err) => {
    console.log('There is an error', err)
})




//Event -> micro ya macro taks -> call stack -> 
//process -> continously listen -> 
    // exceptop -> on -> trigger -> code block -> 