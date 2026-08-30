
// const textRepresentation = document.querySelector('#temp');

// const buttonElem = document.querySelector('button');
// buttonElem.addEventListener('click', () => {
//     textRepresentation.textContent = 'Enrolled'
// })


// const documentNode = window.document;
// console.log(documentNode)

// console.log(document.getElementsByTagName('p'))
// console.log(document.getElementById('temp'))
// console.log(document.getElementsByClassName('nj'))


// const allPElements = document.getElementsByTagName('p');
//html collection which does not ahve all the elements associated with array

// for(let i=0; i<allPElements.length; i++){
//     console.log(allPElements[i])
// }   
// const trueArrAllPElements = Array.from(allPElements);

// trueArrAllPElements.forEach((elem)=>{
//     console.log(elem)
// })

//common methods -> 
/* 
    querySelector 
    querySelectorAll
*/

// console.log(document.querySelector('p')) //always and always only return 1 element
// console.log(document.querySelector('#temp'))
// console.log(document.querySelector('.nj'))

// console.log(document.querySelectorAll('p')) //always and always only return 1 element
// console.log(document.querySelectorAll('#temp'))
// console.log(document.querySelectorAll('.nj'))

//returns you a nodelist not a HTML collectionn

// document.querySelectorAll('p').forEach((elem)=>{
//     console.log(elem)
// })

// const firstPElement = document.querySelector('div')
// firstPElement.textContent = 'NAMAN JINDAL'
// console.log({firstPElement})

//how to select elements through JS in dom -> 
//which methods are available for that 

/* 
    getElementById
    getElementsByTag
    getElementsByClass
*/

// const meClassElements = document.querySelectorAll('.me');
// let startingNumber = 1
// meClassElements.forEach((elem)=>{
//     elem.textContent = startingNumber;
//     startingNumber++;
// })

// const specialIDElement = document.querySelector('#last');
// specialIDElement.textContent = 200


// meClassElements[0].setAttribute('id', 'I-am-the-best')
// console.log(meClassElements[0].getAttribute(''))


// const customH1 = document.createElement('h1');
// customH1.textContent = 'I am a custom made h1';
// customH1.setAttribute('id', 'heading1')
// customH1.classList.add(...['naman', 'randomC'])
// customH1.style.backgroundColor = 'red'
// console.log(customH1)


// const customp = document.createElement('p');
// customp.textContent = 'something'
// console.log(customp)

// customH1.classList.remove('naman');
// console.log(customH1)


// const bodyElem = document.body;
// bodyElem.append(customH1, customp)
// bodyElem.appendChild(customH1);
// bodyElem.appendChild(customp)

// const nalayakDiv = document.querySelector('#nalayak');
// console.log(nalayakDiv)
// bodyElem.removeChild(nalayakDiv)




const buttonElement = document.querySelector('.notification-btn');
const trackUserInputBox = document.querySelector('.track-user');

buttonElement.addEventListener('click', () => {
    alert('Wake up')
})

// trackUserInputBox.addEventListener('keyup', (e)=>{
//     console.log(e.key)
//     console.log(e.target.value)
//     // console.log('key pressed')
// })

// trackUserInputBox.addEventListener('keyup', ()=>{
//     console.log('up and up only')
// })

function testFunc(e){
    // console.log(first)
    e.preventDefault();
}

const keyBindingMapping = {
    'j': 'd',
    'd': 'j',
    'm': 'n',
    'n': 'm',
    'J': 'D',
    'u': 'e'
}

function replaceKeyValue(newKey, e){
    e.preventDefault();
    e.target.value += newKey
}


trackUserInputBox.addEventListener('keydown', (e) => {

    if(keyBindingMapping[e.key]){
        console.log(e.key)
        replaceKeyValue(keyBindingMapping[e.key], e)
    }
    // console.log(e.key)
    // replaceKeyBinding('')
    // if( e.key === 'j'){
    //     e.preventDefault();
    //     e.target.value += 'd'
    // }
    // else if(e.key === 'J'){
    //     e.preventDefault();
    //     e.target.value = e.target.value + 'D'
    // }
    // else if(e.key === 'd'){
    //     e.preventDefault();
    //     e.target.value = e.target.value + 'j'
    // }
    // else if(e.key === 'D'){
    //     e.preventDefault();
    //     e.target.value = e.target.value + 'J'
    // }
})


const parentDivElem = document.querySelector("#parent-div")
const paraParaElem = document.querySelector("#para-para")
const njSpanElem = document.querySelector("#nj-span")

// njSpanElem.addEventListener('click', (e)=>{
//     // e.stopImmediatePropagation()

//     e.stopPropagation()
//     console.log('nj span clicked')
// })
// paraParaElem.addEventListener('click', (e)=>{
//     // e.stopImmediatePropagation()
//     console.log('paraParaElem clicked')
// })
parentDivElem.addEventListener('click', (e)=>{

    console.log(e)
    console.log('parentDivElem clicked')
})



const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('trying')
    const nameInput = document.querySelector("#name");
    const nameErrorAlertElem = document.querySelector('#name-error-alert')
    console.log(nameErrorAlertElem)
    const nameValue = nameInput.value;
    console.log(e)
    if (nameValue.trim() === "") {
        nameErrorAlertElem.textContent = "Name is required.";
        nameErrorAlertElem.style.visibility = 'visible';
        // const errorMessage = document.createElement("p");
        // errorMessage.textContent = "Name is required.";
        // form.appendChild(errorMessage);
        // return;
    }
    else if (nameValue.length <= 5 || nameValue.length >= 7) {
        nameErrorAlertElem.textContent = "Name must be between 5 and 7 characters long.";
        nameErrorAlertElem.style.visibility = 'visible';
        // const errorMessage = document.createElement("p");
        // errorMessage.textContent = "";
        // form.appendChild(errorMessage);
        return;
    }
    // console.log("Form submitted with name:", nameValue);
});

const UlElement = document.querySelector('#tempUL');

UlElement.addEventListener('click', (e)=>{
    console.log(e.target)
   const elementToBeRemoved = e.target;
   UlElement.removeChild(elementToBeRemoved)
})



/* 
    element -> h1
    title -> 
    id -> name
    class -> nj
    value -> I am supreme
*/

// function NodeConstructor(element, attributes, value){
//     this.element = element;
//     this.attributes = attributes;
//     this.value = value
// }
// const attributes = {
//     title : 'hover and see',
//     id : 'name',
//     class: ['a', 'b', 'c']
// }
// const h1Node = new NodeConstructor('h1', attributes, 'I am supreme');
// console.log(h1Node)