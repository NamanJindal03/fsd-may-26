// const a = 100;
// a = 200;
// console.log(a)


// const arr = [10, 20, 40, 50, 70];
// arr.push(100);
// console.log(arr); //10, 20, 40, 50, 70, 100

// arr = [20,40, 60]
// console.log(arr) //output???


// const arr = [10, 20, 40, 50, 70];

// // const arr3 = []; 
// // const arr4 = new Array();

// console.log(arr.slice(2,4))
// const arr2 = arr.slice(0); //this array is different frot he original arrat

// // for(let i=0; i< arr.length; i++){
// //     arr2[i] = arr[i]
// // }

// arr[5] = 5000;

// console.log(arr);
// console.log(arr2)


// let arr = [10,20, 30, 40, 50];

// let arr2 = [...arr]

// arr[5] = 5000;

// console.log(arr);
// console.log(arr2)

// let [a,b] = [500, 400];

// [b,a] = [a,b]
// console.log(a);
// console.log(b);


// let arr = [1,2,3, 4,5,6,7];

// let [a, b, c, d, e] = arr;
// console.log(a)
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let a = 100;
// const obj = {
//     b: 500,
//     a: 200,
// };

// let {a: random} = obj;
// console.log(random);
// console.log(b);

// function callMe(){
//     console.log('something')
//     callMe();
// }   

// callMe();

// function add(arr){
//     //
//     // let sum = 0;
//     // for(let i=0; i<arr.length; i++){
//     //     sum += arr[i]
//     // }
//     // return sum

//     //base case 
//     if(arr.length === 0){
//         return 0
//     }
//     if(arr.length ===1){
//         return arr[0]
//     }

//     //recursion
//     const sum = arr[0] + add(arr.slice(1))
//     return sum
// }

// const a = [4]

// const sum = add(a)
// console.log(sum)



const a = [1,2,3,4,5];
const b = a;

a.push(100);
console.log(a); //output??
console.log(b); //output??

const c = [...a];
a.push(100);
console.log(a); //output??
console.log(c); //output??

const aNested = [1,2,3,4, [1,2,3,4]];
// const bNested = [...aNested];
const bNested = aNested.slice(0);

// aNested[4][2] = 300;
// console.log(aNested);
// console.log(bNested);

// JSON.parse(JSON.stringify(aNested))

const deepCopiedANested = structuredClone(aNested);
aNested[4][2] = 300;
console.log(aNested)
console.log(deepCopiedANested)




//2d array -> 
// const study= [   
//     1,
//     2,
//     3,
//     4, 
//     [1,2,30,4]
// ]
// console.log(study[4][2])
// const subArray = study[4];
// console.log(subArray[2])

//write a code 
/*
    such that you print 
    Apple -> 10
    Banana -> 20
    Mango -> 30

    Orange -> 15
    Grapes -> 25

    Watermelon -> 50
    Papaya -> 35
    Guava -> 40
*

]; */

// const fruits = [
//   [
//     ["Apple", 10],
//     ["Banana", 20],
//     ["Mango", 30]
//   ],
//   [
//     ["Orange", 15],
//     ["Grapes", 25]
//   ],
//   [
//     ["Watermelon", 50],
//     ["Papaya", 35],
//     ["Guava", 40]
//   ]]

// for (let group of fruits) {
//     for (let fruit of group) {
//         console.log(fruit[0] + " -> " + fruit[1]);
//     }
//     console.log("");
// }