import fs from 'fs'

fs.readFile('large-file.txt', (err, data) => { //ram me -> 
    if(err) throw err;

    fs.writeFile("copied-file.txt", (err) => {
        if(err) throw err;
        console.log('file copied successfully')

    })
})

//2gb file : 4gb ram : 2TB HD -> will we be able to copy the file successfully or not?
// Yes we will be able to do it. But?? problem?? unnecesarry resources consume -> 
// ram??? 100mb space -> 100mb -> overwrite and then keep on doing???

//2gb -> 100mb -> 1.9gb -> important chizo -> 

//code blocking????? bilkul nhi hogi 

//system pr load aya -> 
//due to high traffic -> 2gb ram -> 50% -> 