// const arr1 = [];
// const arr2 = new Array(); 
// const arr3 = new Array(10);
// console.log(arr3[0], arr3[5])
// const arr4 = new Array(10).fill(-1);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);


//find the missing number from the given array provided they are always from 1 to n

// n = 10
// arr = [7, 9, 8, 4, 6, 2, 1, 10, 3] //sorting 

// const n = 10;
// const arr = [7, 9, 8, 4, 6, 2, 1, 10, 3]
// const sortedValues = arr.sort((a,b) => a -b)
// console.log(sortedValues)

// let answer = -1;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] != i+1){
//         answer = i+1
//         break;
//     }
// }
// if(answer === -1){
//     console.log(n)
// }
// else{
//     console.log(answer)
// }

//solution 2

// const markValuesArray = new Array(n).fill(-1);
// for(let i=0; i<arr.length; i++){
//     markValuesArray[arr[i]-1] = 1;
// }
// console.log(markValuesArray)

// let answer = -1; //temporary new variable
// for(let i=0; i<markValuesArray.length; i++){
//     if(markValuesArray[i] === -1){
//         answer = i +1;
//         break;
//     }
// }
// console.log(answer)


/*
    push 
    pop 
    shift 
    unshift
*/

// const a = [1,2,3,4,5,6];
// a.push(10); //push adds a value to the end of an array
// a.unshift(100);  //unshift adds a value to the start of an arry
// console.log(a)

// a.pop(); //remove element from the end of the array
// console.log(a)
// a.shift(); //remove element from the start of the array
// console.log(a)


//mutation -> a method which alters the original value is called as mutation
//

// const numberArr = [10,22,53,14,15];

// const duplicatedArr = numberArr.slice(0,numberArr.length) //startIndex and endingIndex 
// console.log(numberArr);
// console.log(duplicatedArr) //????


// const returnedValue = numberArr.splice(1, 3) //starting index and number of values
// console.log(numberArr);
// console.log(returnedValue)



const numberArr = [10,22,53,14,15, 78, 56, 45, 38, 90, 12, 23, 56, 78];

// const arr = numberArr.splice(5, 8);

// console.log(numberArr[7]);
// console.log(arr[3]);

// const combined = numberArr.concat(arr);
// console.log(combined[combined.length -1])

// numberArr.reverse();
// console.log(numberArr);

// const numberedStringFancy = numberArr.join('"');
// console.log(numberedStringFancy)

// const stringBASeed = numberArr.toString(); //not used that much
// console.log(stringBASeed)

// str="vishal kumar hello" 

// const strArr = str.split(" ");
// console.log(strArr)

// const fruitArr = ['kiwi', 'apple', 'banana', 'orange'];


// for( fruit of fruitArr){
//     console.log(fruit);
// }

// //objects 
// for( fruit in fruitArr){

// }

