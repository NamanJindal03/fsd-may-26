// let n = 4;
// for (let i = n; i >= 1; i--){
//   console.log('*'.repeat(i));
// }

// let n = 4;
// for(let i=1; i<=n; i++){
//     // console.log(4)
//     let toBePrinted = '';

//     for(let j=1; j<=4; j++){
//         toBePrinted += "* ";
//     }
//     console.log(toBePrinted)
// }

//dry run 
// for (let count = 1; count <= 5; count++) {
//     let str1 = "";

//     for (let k = 0; k < (5 - count); k++) {
//         str1 += " " 
//     }

//     for (let j = 0; j < count; j++) {
//         str1 += '*'
//     }
//     console.log(str1);
// }

/* 
    *****
    *   *
    *   *
    *   *
    *****
*/


//first attempt
// let n= 20;
// for(let i=1; i<=n; i++){ //row
//     let lineToBePrinted = "";
//     for(let j=1; j<=n; j++){ //column
//         if(i===1 || i===n){
//             lineToBePrinted = lineToBePrinted + "* "
//         }
//         else {
//             if(j===1 || j===n){
//                 lineToBePrinted = lineToBePrinted + "* "
//             }
//             else{
//                 lineToBePrinted = lineToBePrinted + "  "
//             }
//         }
//     }
//     console.log(lineToBePrinted)
// }


//second attemp
// let n= 20;
// for(let i=1; i<=n; i++){ //row
//     let lineToBePrinted = "";
//     for(let j=1; j<=n; j++){ //column
//         // if(i===1 || i===n){
//         //     lineToBePrinted = lineToBePrinted + "* "
//         // }
//         // else {
//         if(j===1 || j===n){
//             lineToBePrinted = lineToBePrinted + "* "
//         }
//         else{
//             if(i === 1 || i === n){
//                 lineToBePrinted = lineToBePrinted + "* "
//             }
//             else{
//                 lineToBePrinted = lineToBePrinted + "  "
//             }
            
//         }
//         // }
//     }
//     console.log(lineToBePrinted)
// }

// row === number of columns 

let n = 5;
let counter = 1;
for (let i=0; i<n ; i++){
    let str = "";
    for(let j =0; j<n; j++){
        if(counter%2 !== 0){
            str += (counter) + " "
        }
        else{
            str += "  "
        }
        counter++;
    }
    console.log(str)
}