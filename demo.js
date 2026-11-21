

const map1 = new Map();

const key1 = {
    'name': 'naman'
}

//api -> log study 

map1.set(key1, 2); 
map1.set('naman', 5)

///above that is a api call
// console.log(map1)

console.log(map1.get(key1))

console.log(map1.keys())
const extractedKey1= map1.keys().next().value;
console.log(extractedKey1);

// console.log(typeof map1.keys())

// for(keys in map1){
//     console.log(keys)
// }

console.log([...map1.keys()][0])