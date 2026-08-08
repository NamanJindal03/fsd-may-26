/* block of code which can be used multiple times - creates a reusibility factor 
    for an atomic logic 
*/
function isEven(n){
    if(n % 2 === 0){
        return true
    }
    return false
}

function logEverySituation(){
    //this function is made to create logs which can be reviewed later 
}

const answrer = isEven(11);
const answrer2 = isEven(12);
const answrer3 = isEven(13);
const answrer4 = isEven(14);

if(answrer || answrer2 || answrer3 || answrer4){
    //user is allowed to clear the stage -> some meaningfuls step
}


// function printTo10(){
//     for(let i=0; i<10; i++){
//         // console.log(i+1)
//         return i+2
//     }
// }

// const output = printTo10();
// console.log(output);

//function expression 

// const printTo10 = function nowKnown(){
//     for(let i=0; i<10; i++){
//         console.log(i+1)
//     }
// }
// // printTo10();
// console.log(printTo10);


// const name = 'Tushar';

// console.log(name);


//3rd way of dealing with function -> called as arrow function -> this was introduced as part of ES6 
//revolutionary update -> 

// function printTo10(){
//     for(let i=0; i<10; i++){
//         console.log(i+1)
//     }
// }

// const printTo10 = function(){
//     for(let i=0; i<10; i++){
//         console.log(i+1)
//     }
// }

//now we need to convert the above into an arrow function
//expression use 

// const printTo10 = (a,b,c) => {
//     for(let i=0; i<10; i++){
//         console.log(i+1)
//     }
//     console.log(a,b,c)
// }
// printTo10(10, 20, 30);


// if(true){

// }
// else{

// }

// function temp(){

// }
// for(){

// }
// switch(){}

// {
//     console.log('I can write this way as well')
// }

// function help(){
//     //this will be the scope of function
// }   

// amongst block scope and function scope which is a superset?

// subset | superset 

// block scope is a superset of function scope | function scope is a subset of block scope



// const someVariable = 100;

// function temp(){
//     const someVariable = 200; //a variable defined within a scope cannot be accessed outisde the scope
//     console.log(someVariable)
// }
// temp();
// console.log(someVariable);


// let randomVariable; //value nnhi pta
// function functionScope(){
//     let randomVariable = 10;
//     console.log(randomVariable)
// }
// functionScope();
// console.log(randomVariable); //undefined



// let randomVariable = 200;
// function functionScope(){
//     randomVariable = 10;
//     console.log(randomVariable)
// }
// functionScope();



// let randomVariable = 200;
// function functionScope(){
//     let randomVariable;
//     randomVariable = 10;
//     console.log(randomVariable)
// }
// functionScope();
// console.log(randomVariable);


// let count = 0;
// function sum(a,b){ 
//     count++; //it is changing my external environemnt -> side effect 
//     return a+b + count
// }

// const answer = sum(4,4);
// const answer2 = sum(4,4);
// const answer3 = sum(4,4);
// const answer4 = sum(4,4);
// console.log(answer, answer2, answer3, answer4)

// const a = 120.50

// console.log(Math.round(a));

Math.random(); //it gives a random value between 0 to 1 (0 included, 1 not included)
// console.log((Math.floor(Math.random()*100)) + 1)

// function giveRandom(){
//     return (Math.floor(Math.random()*100)) + 1
// }

// if(giveRandom() > 50){
//     console.log(giveRandom())
// }
// else{
//     console.log(giveRandom())
// }

// console.log(Date.now()) //epoch time -> milliseconds that has been elapsed from 
// //jan 1st 1970 

// console.log(new Date().toLocaleTimeString())

// console.log(new Date().getHours())


// function generateOtp(){
//     return (Math.floor(Math.random()* 1000000))
// }

// console.log(generateOtp());



// function random(){
//     const a = 100; //it alters on the basis of scope
//     console.log(a);
// }

// let a = 200
// {
//     let a = 100;
//     console.log(a)
// }
// console.log(a)


// var b = 200
// {
//     var b = 100;
//     console.log(b)
// }
// console.log(b)


// if(true){ //block scope -> var does not follow block scope it can only be contained by function scope
//     let a = 200;
//     var b = 1000;
// }
// console.log(b)
// console.log(a);

// const and let are block scoped ( superset of function scope )
// var is function scoped


// let a = 100;
// {
//     var a = 200;
// }
// console.log(a)



const student = {
    name: 'nj',
    age: 5,
    class: '12th',
    address: {
        city: 'delhi',
        state: 'delhi',
        country: 'India'
    }
}

console.log(student)