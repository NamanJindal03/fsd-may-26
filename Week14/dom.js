
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


const customH1 = document.createElement('h1');
customH1.textContent = 'I am a custom made h1';
customH1.setAttribute('id', 'heading1')
customH1.classList.add(...['naman', 'randomC'])
// customH1.style.backgroundColor = 'red'
console.log(customH1)


const customp = document.createElement('p');
customp.textContent = 'something'
console.log(customp)

customH1.classList.remove('naman');
console.log(customH1)


const bodyElem = document.body;
bodyElem.append(customH1, customp)
// bodyElem.appendChild(customH1);
// bodyElem.appendChild(customp)

const nalayakDiv = document.querySelector('#nalayak');
console.log(nalayakDiv)
bodyElem.removeChild(nalayakDiv)
















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