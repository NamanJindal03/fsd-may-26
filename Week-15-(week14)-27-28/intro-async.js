
// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')


// btn1.addEventListener('click', ()=>{

//     //demo api call? which takes some x seconds (not surely known)
//     for(let i=0; i< 10000000000; i++){

//     }
// })

// btn2.addEventListener('click', ()=>{
//     console.log('this should be executed first')
// })

// //new task 
// const btn3 = document.querySelector('#btn3')
// const timerDisplayArea = document.querySelector('#timer-display')

// const btn4 = document.querySelector('#btn4')

// let globalTimerIdForStopWatch = ''
// btn4.addEventListener('click', ()=>{
//     clearInterval(globalTimerIdForStopWatch)
// })

// btn3.addEventListener('click', ()=>{
//     let initialValue = 0;
    

//    globalTimerIdForStopWatch = setInterval(()=>{
//         initialValue += 1;
//         console.log(initialValue)
//         timerDisplayArea.textContent = initialValue
//    }, 1000)
// })

// console.log('start')

// //first asynchronous task
// setTimeout(()=>{
//     console.log('time execution')
// }, 500) 

// setTimeout(()=>{
//     console.log('time execution 2')
// }, 200)

// setTimeout(()=>{
//     console.log('time execution 3')
// }, 600)
// console.log('end')

// // for(let i=0; i< 10000000; i++){
// //     console.log(i)
// // }

// setInterval(()=>{
//     console.log('ran')
// }, 1000)


// console.log('start');
// setTimeout(()=>{
//     console.log('code executed')
// },0)
// console.log('end')

function emailCustomers(){
    console.log('eamiled')
}

//practically not visible to us
function outsideCodePlaceOrder(cb){
    //inside there is some asynchronous code that is getting executed
    //time unknown

    setTimeout(()=>{
        console.log('success')
        const success = true;
        if(success){
            cb();
        }
    }, 3000)
}

//but one problem -> after the asynchrnous code is executed, I want to 
// email the customer once the order is confirmed / placed

console.log('one')
console.log('two')
console.log('three')
//this is asynchronous so we cannot block our main thread or wait for it
// const ifDone = 
outsideCodePlaceOrder(emailCustomers)
// console.log('value recieved')
// if(ifDone){
//     console.log('email the customer the order id')
// }
console.log('four');
console.log('five')