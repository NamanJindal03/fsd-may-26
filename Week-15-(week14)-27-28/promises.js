//library -> promises utilsiation
// function externalCodePromise(){
//     return new Promise((resolve, reject) => {
//         // resolve('I am naman')
//         setTimeout(()=>{
//             console.log('I got the data from an API at random time');
//             //lets imagine the external system gave me a success true
//             const success = false;
//             if(success){
//                 //pass 
//                 resolve('I got the products data')
//             }
//             else{
//                 //fail
//                 reject('error occured')
//             }
//         }, 5000)
//     })
// }

// function random(x){
//     resolve();
// }

// function cb(){
//     console.log('I am a function')
// }
// random(cb)

// Promise internal implementation -> 
// NJcustomPromise = {
//     data: 'I got the products data'
// }
// then: function(){

// }
// .catch() 

// const data = externalCodePromise()
// console.log(data)

//     data
//     .then((returnedInformation)=>{
//         console.log(returnedInformation)
//     })
//     .catch((error)=>{
//         console.log(error)  
//     })


//fetch is a function which returns you a promise -> 
// the time to reoslve or reject the promise is never certain because fetch is responsible for callign the api
// and the repsonse of api is not determisitc of time. 

//
//demo implementaiton of fetch -> NOTE: this is not the real fetch code this is just 
// a demo code thought to help you understand about promises and fetch internal implementation

// function customFetch(apiEndPoint){

//     return new Promise((resolve, rejected)=>{
//         //we will do a network call
//         const {isSuccess, data} = doNetworkCall(apiEndPoint) //this is a ficticious function
//         if(isSuccess){
//             resolve(data)
//         }
//         else{
//             rejected(data)
//         }
        
//     })
// }


// const apiData = fetch('https://jsonplaceholder.typicode.com/todosuuuu/1')
// //0.0000001 sec later it wouldnt know the answer 

// apiData.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// console.log(apiData); //??? pending





// 

//one talk
// console.log(data)
// setTimeout(()=>{
//     console.log(data)
// }, 6000)

//how to deterministicaly determine when the promise update its state -> 
//promise -> 
    // I am an object -> 
        //two legs -> 
            //




// const data = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({name: 'naman', age: 10})
//     }, 100)
// })

// data.then((answer)=>{
//     console.log(answer.name)
//     console.log(answer.age)
// })

// console.log(data)
// setTimeout(()=>{
//     console.log(data)
// }, 4000)

//2 millions of code 


//promise chaining -> 

// const apiData = fetch('https://jsonplaceholder.typicode.com/todos/1')
// //0.0000001 sec later it wouldnt know the answer 

// apiData.then((data)=>{
//     // console.log(data)
    
//     return data.json()
//     // const returnedValue = data.json()  //promise

//     // returnedValue.then((info)=>{
//     //     console.log(naman)
//     //     console.log(info)
//     // })
//     // .catch(()=>{
//     //     console.log('handle differently')
//     // })
//     // console.log(returnedValue)
// })
// .then((info)=>{
//     console.log(naman) //error producing code
//     console.log(info)
// })
// .catch((err)=>{

//     //this is an error handling step -> if something goes this wrong this wouldnt 
//     //let your code brake
//     console.log(err)
// })
// function random(){
//     console.log('four')
// }

// console.log('three')
// const output = fetch('https://dummyjson.com/products')

// output.then((data)=>{
//     console.log('six')
//     return data.json()
// })
// .then((data)=>{
//     console.log('one')
//     random()
//     // const allProducts = data.products
//     // const filteredThumbnails = allProducts.map((product)=>{
//     //     return product.thumbnail
//     // })
//     // console.log(filteredThumbnails)
// })
// .catch((err) => {
//     console.log('five')
//     console.log(err)
// })

// console.log('two')
// random();




// const apiData = fetch('https://jsonplaceholder.typicode.com/todos/1')
// apiData.then((data)=>{
//     return data.json()
// })
// .then((info)=>{
//     console.log(info)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log('definetely will be called')
// })

// const apiData2 = fetch('https://jsonplaceholder.typicode.com/todos/1')
// const apiData3 = fetch('https://jsonplaceholder.typicode.com/todos/1')


// const combinedData = Promise.all([fetch('https://jsonplaceholder.typicode.com/todos/1'), fetch('https://jsonplaceholder.typicode.com/todos/1')]);
// combinedData.then((data)=>{
//     // return fetch('inform-customer')
//     const promisesArray = data.map((product)=> product.json())
//     return Promise.all(promisesArray)
// })
// .then((data)=>{
//     console.log(data)
    
//     return fetch('https://jsonplaceholder.typicode.com/todos/10')
// })
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data)
// })


// async function handleApiCall(){
//     try{
//         const apiData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const info = await apiData.json()
//         console.log(info)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }

// handleApiCall();
// console.log('one')
// console.log('one')
// console.log('one')
// console.log('one')
// console.log('one')
// console.log('one')
// console.log('one')


