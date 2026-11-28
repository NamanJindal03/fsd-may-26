import fs from 'fs/promises'

function printAllFilesAndFolder(){

}


async function checkIfFileIsSame(pathA, pathB){
    const promiseArrays = [
        await fs.readFile(pathA, 'utf-8'),
        await fs.readFile(pathB, 'utf-8')
    ]
    const data = await Promise.all(promiseArrays)
    console.log(data[0]);
    console.log(data[1])

    if(data[0].trim() === data[1].trim()){
        console.log('file content is same')
    }
    else{
        console.log('file content is not same')
    }
    //we need to basically verify if the content on both the path is same or not
}

// streams -> chunks -> 
// 1gb 1bg -> 
//chunks read -> comparisions -> 

const pathA = 'temp.txt'; //this will change acccordingly
const pathB = 'temp2.txt'; //this will change accordingly

checkIfFileIsSame(pathA, pathB)