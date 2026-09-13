//by naman
function addTen(num){
    return num + 10;
}


//by abhishek
const a = addTen(10);
const b = addTen('naman')
console.log(a)
console.log(b)

//the intention of naman was addTen can only recieve a numerical value
//but abhishek did not think it through and gave a string value, which is technically wrong as per naman
