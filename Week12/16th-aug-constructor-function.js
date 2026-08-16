// creating a template for an object so that we can create it multiple times

// function normalFunc(id, name, yoe){
//     return {
//         employeeId: id,
//         name: name,
//         yoe: yoe,
//     }
// }
// const emp1 = normalFunc(1, 'naman', 2)
// const emp2 = normalFunc(2, 'Vishal', 5)
// console.log(emp1,emp2)


// function Employee(id, name, yoe){
//     console.log(this)
//     this.employeeId = id;
//     this.name = name;
//     this.yoe = yoe
//     this.employAndName = function(){
//         this.employeeId + this.name
//     }
//     // return {name: 'njnjnjnjnjn'}; //it overwrites with the value of "this"
// }
// const emp1 = new Employee(1, 'naman', 2)
// const emp2 = new Employee(2, 'Vishal', 5)
// console.log(emp1)
// console.log(emp2)

/* 
    this new keyword has a lot of special powers 
        1. In a sceario where you are not returning anythign it automatically returns this
        2. When you are invoking a function with a new keyword, it automatically everytime creates
        a blank object {} and assigns this the value that object
        3. In a scnario you are not returning an object it overwrites with the value of this
        4. In a scenario where you are returning an object but not this, then it has to follow that
*/


//how about we create a template for employee -> 
// const employee1 = {
//     employeeId: 1,
//     name: 'naman',
//     yoe: 0,
// }

// const employee2 ={
//     employeeId: 2,
//     name: 'Vishal',
//     yoe: 5,
// }


//lets say I want to create a common property amongst all the arrays
// myName

/* 
    Everything in JS is derived from an object
    Everythign in JS is an object
*/

// Array.prototype.myName = 'Naman Jindal'
// Object.prototype.randomNumber = Math.random();

// const arr = [1,2,3,4,5]

// arr.students = 10;
// arr.myName = function(){
//     return 'nj'
// }

// const arr2 = [1,2,3,4,5, 10]

// console.log(arr.randomNumber)


// class People extends Array{
//     constructor(name){
//         super();
//         this.name = name
//     }
// }
// const people1 = new People('naman')
// console.log(people1)



// function Employee(id, name, yoe){
//     console.log(this)
//     this.employeeId = id;
//     this.name = name;
//     this.yoe = yoe
//     // this.employAndName = function(){
//     //     this.employeeId + this.name
//     // }
//     // return {name: 'njnjnjnjnjn'}; //it overwrites with the value of "this"
// }

// Employee.prototype.employeeAndName = function(){
//     return this.employeeId + this.name
// }
// const emp1 = new Employee(1, 'naman', 2)
// const emp2 = new Employee(2, 'Vishal', 5)
// console.log(emp1)
// console.log(emp2)