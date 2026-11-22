import fs from 'fs/promises'
import path from 'path'

// console.log(__dirname);
// console.log(__filename)
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;


//two ways -> promises, async await 

// async function readSpecificFile(){
//     try{
//         const data = await fs.readFile('notes.txt', 'utf-8') //promise
//         console.log(data)
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }
async function readSpecificFile(){
    try{
        const data = await fs.readFile(path.join(__dirname, 'notes.txt'), 'utf-8') //promise
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
    
}
// readSpecificFile();

async function writeSpecificFile(){
    try{
        await fs.writeFile('temp.txt', 'sending some message to xyz ')
        console.log('file written successfully')
        await readSpecificFile();
    }
    catch(err){
        console.log(err)
    }
}
writeSpecificFile()

