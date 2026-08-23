//in operator
//Agar app falsy value dengay to user['test1'] kaam ni kaerga pr "in" mein kaam kaerga regardless value ?

// const user = {
//     id: '123123',
//     doj: '12/10/2022',
//     name: 'naman',
//     test1: '',
//     test2: 0
// }

// console.log("id" in user)
// console.log("test1" in user)
// console.log("test2" in user)
// console.log("toString" in user)

// if(user['test1']){
//     console.log('value exixists')
// }
// if(user['test2']){
//     console.log('value exixists')
// }
// if(user['toString']){
//     console.log('value exists')
// }

// for(let key in user){
//     console.log(key)
//     console.log(user[key])
// }

//optional chaining


// const userDetails = {
//     // name: 'naman',
//     email: 'namanjindal@gmail.com',
//     dob: "10/10/10",
//     // adhaar: '9999',
//     // savedCards: ['a', 'b'],
//     address: {
//         firstLine: {
//             flatNo: 111,
//             building: 'snifje'
//          },
//         secondLine: 'str',
//         state: 'delhi'
//     }
// }

//our objective is given the uncertainities present in the above object 
// we need to safely print 

//state of the user if it exists and dob
// if(userDetails.dob){
//     console.log(userDetails.dob)
// }
// if(userDetails.address && userDetails.address && userDetails.address.firstLine.building){
//     console.log(userDetails.address.state);
// }

// if(userDetails?.address?.firstLine?.building){
//     console.log(userDetails.address.firstLine.building);
// }



// "use strict"
// function random(){
//     a = 100;
//     console.log(a)
// }
// random()

// const user = {name: 'naan', age: 10};

// Object.defineProperty(user, "name", {
//     enumerable: true, //will not show up in log or iteration
//     writable: false, //cannot be modifed 
//     configurable: false, //cannot be deleted 
// });

// // user.name = 'Pratik' //we changed it, still it did not pick the value

// for(let key in user){
//     console.log(key)
// }
// delete user.name;

// console.log(user)

// const obj = {
//     name: 'naman',
//     age: 10
// }
//"{"name":"naman","age":10}" -> strings everywhere -> a string in a structure of object

//how do we convert object to json

// const jsonStr = JSON.stringify(obj);
// console.log(jsonStr)

// const originalObj = JSON.parse(jsonStr);
// console.log(originalObj)

