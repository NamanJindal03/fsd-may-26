
// console.log(sum)
// var no= sum(4,5)
// console.log(no);// what will be the value of this?????????

// console.log(num1); //value???
// var num1 = 200;
// var sum = function (a,b){
//     var c = 200;
//     return a+b+c;
// }

// var num2 = 300;

// var num3 = num1+ num2;

// var sum1 = sum(num1, num2);
// var sum2 = sum(num1, num3);
// var diff = sum2 - sum1;

// console.log(diff)

// var x = 1;
// function func(){
//     console.log(x); 
//     var x =2;
//     console.log(x); 
// }
// func();

// var x = 10;
// function test()
// {
//     if (x > 20) {
//         var x = 50;
//     }
 
//     console.log(x);
// }
// test();

// IIFE -> immediately invoked function expression

// (function(){
//     console.log(10)
// })();

// (()=>{
//     console.log('random')
// })();

// var x = 10;
// console.log(x);
 
// if (true) {
//     (function() {
//         var x = 20;
//         console.log(x);
//     })();
// }
 
// console.log(x);


// console.log(num1); //value???
// let num1 = 200;
// function sum(a,b){
//     let c = 200;
//     return a+b+c;
// }

// let num2 = 300;

// let num3 = num1+ num2;

// let sum1 = sum(num1, num2);
// let sum2 = sum(num1, num3);
// let diff = sum2 - sum1;

// console.log(diff)


// function test() {
//     {
//         let letVariable = 10;
//         const constVariable = 30;
//         console.log(ab) ///??   ->>>>>>>>> undefined
//     }
//     var ab = 20;
//     // console.log(letVariable); 
//     // console.log(constVariable);
//     console.log(ab);
//     // console.log(letVariable);
//     // console.log(constVariable);s
// }

// test();
// // console.log(ab);
// console.log(letVariable);
// console.log(constVariable);


var abcd2 = 10;

function test(){
    // let abcd2 = 10;
    var abcd2 = 10;
    console.log(abcd2);//
    {
        var abcd2 = 40;
        console.log(abcd2);//
    }
    {
        let abcd2 = 50;
        console.log(abcd2);//
    }
    {
        abcd2 = 500;
        console.log(abcd2);//
    }
    {
        let abcd2 = 100;
        console.log(abcd2);//
    }
    let abcd3 = 20;
    console.log(abcd2);//
}
test();