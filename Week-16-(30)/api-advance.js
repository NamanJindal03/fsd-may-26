//instagram feed 

//API -endpoint or url??

// domain -> www.nj.com/
// get-feed -> instagram feed lekar -> 

//Rest principles -> 
// endpoint (url) + action (method)-> GET -> feed 

//GET www.nj.com/feed


// www.nj.com/create-post
// POST www.nj.com/post

//an api endpoint needs to have a unique combination of url + method 

// a request can either succedd or fail based on enromous amount of parameters 
//

//by default fetch is operated on GET
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {return response.json()})
//       .then(json => console.log(json))

// const data = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// })
// data.then((info)=>{
//     console.log(info);
//     console.log('api post executed')
// })

try{
    const a = 100
    // a = 200;
    throw new Error('will be logged')
}
catch(err){
    console.log(err)
}
