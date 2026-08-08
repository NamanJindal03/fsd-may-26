
const userData = {
    name: 'naman',
    age: 10,
    dob: '02-07-2016',
    fingerprint: 'random-data',
    addresss: '511',
}

const electionType = 'countr' //other possible values -> 'country' 'district' 'state' municipal


// if(userData.age >= 18 ){
//     console.log('user is eligible to vote')
// }
// else{
//     console.log('sorry try in next election')
// }


// if( 
//     ((electionType === 'state' || electionType === 'district') && userData.age >= 16)
//     || (electionType === 'country' && userData.age >= 18)

// ){
//     console.log('user is eligible to vote')
// }
// else{
//     console.log('user is ineligible')
// }


// if( 
//     ((electionType === 'state' || electionType === 'district' || electionType === 'municipal') && userData.age >= 16)
// ){
//     if(electionType === 'state'){
//         console.log('welcome to state election')
//     }else if(electionType === 'district'){
//         console.log('welcome to district election')
//     }
//     console.log('user is eligible to vote')
// }
// else if((electionType === 'country' && userData.age >= 18)){
//     console.log('user is eligible to vote')
// }
// else{
//     console.log('user is ineligible')
// }

// switch (electionType){
//     case 'state': {
//         console.log('state election')
//         break;
//     }
//     case 'district': {
//         console.log('district election')
//         break;
//     }
//     case 'municipal': {
//         console.log('municipal election')
//         break;
//     }
//     case 'country': {
//         console.log('country election')
//         break;
//     }
//     default: {
//         console.log('wrong election')
//     }
// }

//wrong -better choice 
// let score =90;
// if (score>=90){
//     console.log('Grade A')
// }
// else if (score>=80){
//     console.log('Grade B')
// }
// else if (score>=70){
//     console.log('Grade C')
// }
// else {
//     console.log('Fail')
// }

//still working
// let marks = 70;
// if (marks >= 90) {
//     console.log('A');
// }
// else if (marks >= 80 && marks <= 89.5) {
//     console.log('B');
// }
// else if (marks >= 70 && marks <= 79) {
//     console.log('C');
// }
// else console.log('Fail');

// if (marks < 0 || marks > 100) {
//   console.log("Invalid Marks");
// } 

// let marks = 90;


//unnecesarrily complica
// switch(Math.floor(marks/10)){
//     case 10: 
//         console.log('Grade A')
//         break;
//     case 9: 
//         console.log('Grade A');
//         break
//     case 8: 
//         console.log('Grade B');
//     case 
    
// }

//prefer 
// const totalValue = 98
// switch (true) {
//     case totalValue >= 90:
//         console.log("Grade 'A'");
//         // break;
//     case totalValue >= 80:
//         console.log("Grade 'B'");
//         // break;
//     case totalValue >= 70:
//         console.log("Grade 'C'");
//         // break;
//     default:
//         console.log("Fail!");
//         break;
// }

let number = 5
while(number < 10){
    console.log(number);
    number++;
}
console.log('program ended')

// for(let someNumber = 5; someNumber < 10; ++someNumber ){
//     console.log(someNumber);
// }
// console.log('program ended')

// for( let count = 5; count > 0; --count){
//     // console.log(count)// what next??
//     let stringToBePrinted = "next line: ";
//     for(let timesPrinted=1; timesPrinted <= count; ++timesPrinted){ //no change 
//         // console.log(1)
//         stringToBePrinted = stringToBePrinted + timesPrinted + " "; //change
//     }
//     console.log(stringToBePrinted)
// }

// 1
// 1 1
// 1 1 1
// 1 1
// 1

const breakPoint = 50 //making the program robust and easy to alter

for(let i=1; i<=breakPoint; i++){
    let stringToBePrinted = "";
    for(let timesToBePrinted = 0 ; timesToBePrinted <i; timesToBePrinted++){
        stringToBePrinted = stringToBePrinted + 1 + " ";
    }
    console.log(stringToBePrinted)
}
for(let i=breakPoint-1; i>0; i--){
    // console.log(i)
    let stringToBePrinted = "";
    for(let timesToBePrinted = 0 ; timesToBePrinted <i; timesToBePrinted++){
        stringToBePrinted = stringToBePrinted + 1 + " ";
    }
    console.log(stringToBePrinted)

}


