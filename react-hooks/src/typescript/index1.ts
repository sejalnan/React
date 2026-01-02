//Data types and type inference
let value: Number = 10;
value = 20;
//value='23'; throw error due to type 
console.log(value);

function Sum(a: number, b: number): number {
    return a + b;
}

console.log(Sum(4, 5));