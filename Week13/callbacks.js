


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

const arr = [1,23,4,5,67,88,90]

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
const arrayToBeFiltered = [1,2,3,4,5,6,7];

function customFilter(cb){
    const filteredArr = [];
    for(let i=0; i< arrayToBeFiltered.length; i++){
        const pass= cb(arrayToBeFiltered[i])
        if(pass){
            filteredArr.push(arrayToBeFiltered[i])
        }
    }
    return filteredArr

}
const ans = customFilter((val)=>{
    return val >  3.6
})
console.log(ans)
// const newArr = arrayToBeFiltered.filter((val)=>{
//     return val >  3.6
// })
// console.log(newArr)
