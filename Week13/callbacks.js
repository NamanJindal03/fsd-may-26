


// function higher(lower, doSomething){
//     console.log('second')
//     // console.log(lower())
//     // lower()
//     // lower()
//     // lower()
//     // lower()
//     // lower()
//     const output = lower(100, 400, doSomething)
//     const sum = doSomething() + output();
//     return sum
// }

// function lower(a,b, cb){
//     console.log(a+b) // 500?
//     return cb;
// }

// function randomGenerator(){
//     return Math.random();
    
// }

// const oupput = higher(lower, randomGenerator)
// console.log(oupput); //answer???????




// array uses a lot of methods which are of the nature higher order functions -> 
// one of them is find

/* 
    map 
    filter
    find
    every
    reduce
*/


// const arr = [1,2,3,4,100, 5];

// function doSomething(val){
//     return val > 4
// }

// // const a = arr.find((val)=>{
// //     return val >4
// // })

// const a = arr.find(doSomething)
// console.log(a)

// const TempArr = [1,2,3,4,100, 5]
// function forEach(cb){
//     for(let i=0; i<TempArr.length; i++){
//         cb(TempArr[i])
//     }
// }

// forEach(function(val){
//     console.log(val - 10)
// })


// arr.forEach(function(val){
//     console.log(val - 10)
// })


//truthy and falsy?
// 5 falsy -> 0 "" false null undefined

// const arr = [1,2,3,4,100, 5];

// function customFind(cb){
//     //can you write? 

//     for( let i=0; i<arr.length; i++){
//         const answer = cb(arr[i]);
//         if(answer){
//             return arr[i]
//         }
//     }
// }
// const answer = customFind(doSomething)
// console.log(answer)

// function doSomething(val){
//     return val > 100000
// }

// const a = arr.find(doSomething)
// console.log(a)



//map -> 
/* 
    All details needed for map -> 
        1. It returns us a new array 
*/

// const arr = [1,23,4,5,67,88,90]

// function customMap(cb){
//     const newArr =[];
//     for(let i=0; i<arr.length; i++){
//         const returnedValue = cb(arr[i])
//         newArr.push(returnedValue);
//     }
//     return newArr;
// }
// customMap((val)=>{
//     if( val % 2 === 0 ){
//         return val + 10
//     }
// })
// function customMap2(cb){
//     const newArr =[];
//     for(let i=0; i<arr.length; i++){
//         const returnedValue = cb(arr[i])
//         // newArr.push(returnedValue);
//         arr[i] = returnedValue
//     }
//     return newArr;
// }
// customMap2((val)=>{
//     if( val % 2 === 0 ){
//         return val + 10
//     }
// })
// console.log(arr)

// const newArr = arr.map((val)=>{
//     if( val % 2 === 0 ){
//         return 10
//     }
    
// })
// console.log(newArr)



//FIlter
/* 
    1. It also returns an array
    2. It returns a filtered array in which the user given conditions are met or not
*/
// const arrayToBeFiltered = [1,2,3,4,5,6,7];

// function customFilter(cb){
//     const filteredArr = [];
//     for(let i=0; i< arrayToBeFiltered.length; i++){
//         const pass= cb(arrayToBeFiltered[i])
//         if(pass){
//             filteredArr.push(arrayToBeFiltered[i])
//         }
//     }
//     return filteredArr

// }
// const ans = customFilter((val)=>{
//     return val >  3.6
// })
// console.log(ans)
// const newArr = arrayToBeFiltered.filter((val)=>{
//     return val >  3.6
// })
// console.log(newArr)


//every -> ??? boolean

// const arr = [1,23,4,5,67,88,90]


// const returned = arr.every((elem)=>{
//     return elem >= 0
// })
// console.log(returned)


// const strArr = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"]

// //filter 
// const filteredNames = strArr.filter((name)=>{
//     return name.length === 3 || name.length === 4
// })
// console.log(filteredNames)


//includes -> very very helpful
// const strArr = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"]

// // this basically checks whether an exact element is present in the array or not
// const result = strArr.includes('naan')
// console.log(result)

//some -> 
// const arr = [1,23,4,5,67,88,90]

// const result = arr.some((num)=>{
//     return num > 88
// })
// console.log(result)

//findIndex => index return, -1 
// const arr = [1,23,4,5,67,88,90]

// const result = arr.findIndex((num)=>{
//     return num > 66
// })
// console.log(result)


//write a polyfill for includes -> 

// const strArr = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"]
// const result = strArr.includes('naan')
// console.log(result)


// function customIncludes(comparingFigure){
//     let output = false;
//     for(let i=0; i<strArr.length; i++){
//         if(strArr[i] === comparingFigure){
//             output = true;
//             return output;
//         }
//     }
//     return output
// }

// Array.prototype.customIncludes = function(comparingFigure){
//     let output = false;
//     for(let i=0; i<this.length; i++){
//         if(this[i] === comparingFigure){
//             output = true;
//             return output;
//         }
//     }
//     return output
// }

// const result2 = customIncludes('naan')

//objective is 
// const result3 = strArr.customIncludes('Charlie') //???
//str.customIncludes 

// console.log(result3)



//reduce 
//4 cases -> 

//1 case -> sum
//objective: we need to calculate the total of these numbers utilsiing a method called as reduce
// const numbers = [10, 30, 60, 120];

// const total = numbers.reduce((sum, num)=>{
//     console.log(sum)
//     return sum + num;

// },0)

// console.log(total)

//2nd case -> find maximum
// const numbers = [42, 7, 89, 14, 55, 3, 76, 21, 98, 30];

// const maxValue = numbers.reduce((maxNum, currentNumber)=>{
//     //if and else

//     return Math.max(maxNum, currentNumber)
// }, -Infinity)
// console.log(maxValue)

//3rd case -> count occurances
// const numberArr = [1,2,1,1,0,5,1,1,2,3,4,1];

/* 
    reduce
    desiredOutput = {
        1: 6,
        2: 2,
        3: 1, 
        4:1,
        5: 1
    }
*/
// const ans = numberArr.reduce((output, number)=>{
//     if(output[number]){
//         output[number]++;
//     }
//     else{
//         output[number] = 1;    
//     }
//     return output
// }, {})
// console.log(ans)

//sort is a very simple function if using on string

// const strArr = ["klicedd", "rob", "jharliex", "aiana", "bthan", "gionakmk"]

// strArr.sort((a, b)=>{
//     return b.length - a.length
// })
// console.log(strArr)

// const num = [1,2,3,4,5,334,5324];
// num.sort((a,b)=> {
//     return b-a
// });
// console.log(num)

