// const numbersCollected = new Set()
// numbersCollected.add(4)
// numbersCollected.add(8)
// numbersCollected.add(5)
// numbersCollected.add(2)
// numbersCollected.add(4)
// console.log(numbersCollected)
// console.log(numbersCollected.has(4));
// console.log(numbersCollected.size);
// console.log(numbersCollected.clear())
// console.log(numbersCollected.size)

// const arr=[2,3,4,5,6,7,2,3,4,7,9,1];
// //remove duplicates from array -> dsa -> normally loop -> complete logic 

// const arrSet = new Set(arr);
// console.log(arrSet)

// const arrBack = [...arrSet]
// console.log(arrBack)

/* 
    object -> order same rhega???

    object -> does not maintain the order whereas map maintains the order -> 
    
    objects are ideally not iteratable whereas maps are iterabale 
*/

const userMap = new Map([
    [true, {age: 24, gender: 'male'}],
    ['abhishek', {age: 11, gender: 'male'}]
])
console.log(userMap)
console.log(userMap.get('naman'))

userMap.set('mark', {age: 40, gender: 'male'})
console.log(userMap)

console.log([...userMap]);

[...userMap].map(user => {
    console.log(user[0], user[1])
})