//constructor function 

// function Product(name, age){
//     this.name = name;
//     this.age = age;
//     this.nameAndAge = function(){
//         return this.name + " " + this.age
//     }
// }

// Product.prototype.nameAndAge

// const product2 = new Product('toffee', 10);
// const stringed = product2.nameAndAge()


//senior -> code -> junior 
// "use strict"
// class Product{
//     #age
//     #address
//     //age should be always between 5 to 80
//     constructor(name, age){
//         this.name = name;
//         this.#age = age;
//         this.#address;
//         Object.preventExtensions(this)
//         // Object.freeze(this)
//         // this.nameAndAge = function(){
//         //     return this.name + " " + this.age
//         // }
//     }
//     //such that the prototype gets populated rather than the individual property
//     // nameAndAge(){
//     //     return this.name + " " + this.age
//     // }
//     get nameAndAge(){
//         return this.name + " " + this.#age
//     }
//     get customAge(){
//         return this.#age
//     }
//     set customAge(newAge){
//         console.log('currentOriginalAge',this.#age) //this is not exposed outside
//         if(newAge >5 && newAge <80){
//             this.#age = newAge
//         }
//         else{
//             throw new Error('invalid age')
//         }
//     }
// }
// const product1 = new Product('toffee', 10);
// console.log(product1.nameAndAge);
// console.log(product1)
// // product1.age = 200; //mere system me I did not want this, 
// // console.log(product1.#age)
// product1.customAge = 70;

// product1.name = 'random'
// console.log(product1)

// console.log(product1.customAge)

//certain specific derivided properties can be coded through a getter rather than a function






//senior -> code -> junior 
// "use strict"
// class Product{
//     #age
//     #address
//     //age should be always between 5 to 80
//     constructor(name, age){
//         this.name = name;
//         this.#age = age;
//         this.#address;
//         Object.preventExtensions(this)
//         // Object.freeze(this)
//         // this.nameAndAge = function(){
//         //     return this.name + " " + this.age
//         // }
//     }
//     standard= '10th'
//     //such that the prototype gets populated rather than the individual property
//     // nameAndAge(){
//     //     return this.name + " " + this.age
//     // }
//     get nameAndAge(){
//         return this.name + " " + this.#age
//     }
//     get customAge(){
//         return this.#age
//     }
//     set customAge(newAge){
//         console.log('currentOriginalAge',this.#age) //this is not exposed outside
//         if(newAge >5 && newAge <80){
//             this.#age = newAge
//         }
//         else{
//             throw new Error('invalid age')
//         }
//     }
//     //when a class method is not dependent over the instance, it can be called from the class name itself
//     static getDescription(){
//         console.log('this class is a really imporant which does xyz')
//     }
// }
// const product1 = new Product('toffee', 10);
// console.log(product1.nameAndAge);
// console.log(product1)
// // product1.age = 200; //mere system me I did not want this, 
// // console.log(product1.#age)
// product1.customAge = 70;

// product1.name = 'random'
// console.log(product1)

// console.log(product1.customAge)

// console.log(Product.getDescription())



class Animal{
    constructor(name, species, age, speech){
        this.name = name,
        this.species = species,
        this.age = age,
        this.speech = speech
    }

    doSpeechAction(){
        console.log(this.speech)
    }
}

class Octopus extends Animal{
    constructor(name, species, age, speech, inkType){
        super(name, species, age, speech)
        this.name = name + 'jango', //override -> always the current class will be preferred -> 
        // this.species = species,
        // this.age = age,
        // this.speech = speech
        this.inkType = inkType
    }
    // doSpeechAction(){
    //      console.log(this.speech , this.speech, this.speech) //override
    // }
}

const dog1 = new Animal('robby', 'dog', 10, 'bark')
console.log(dog1)
dog1.doSpeechAction()

const octopus1 = new Octopus('oct', 'octopus', 2, 'squi', 'blue')
console.log(octopus1)
octopus1.doSpeechAction()