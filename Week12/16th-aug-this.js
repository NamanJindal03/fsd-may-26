/* 
    the this keyword has a lot of types in it

        variations -> 

*/


const student = {
    firstName: 'naman',
    lastName: 'jindal',
    getFullName(){
        console.log(this)
        return this.firstName + ' ' + this.lastName //enter here and execute
        // return 'abcd'
    }
}

// const ans = student.getFullName;
// console.log(ans()); //???

// const ans2 = student.getFullName();
// console.log(ans2);

// console.log(student.ans())


