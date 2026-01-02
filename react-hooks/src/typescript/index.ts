let a = "Sejal";
console.log(a)


let isActive: boolean = true;
console.log(String(isActive).length)


// Task-2 --check the results of following
let constant = '12344.54';
console.log(Number(constant));
console.log(parseInt(constant));
console.log(parseFloat(constant));



//Task 3-- convert each value to boolean and print the output
let values: unknown[] = [0, 1, " ", "hello", null, undefined, [], {}];

values.forEach((value) => {
    console.log(value, "=>", Boolean(value));
});

let result = 0;
let ans = result ? true : false;
console.log(ans);

let result2 = [];
let ans2 = result2.length ? true : false;
console.log(ans);

//Task 4 

//closure-- it created when the inner function access the outer scope
function getLength2() {
    return function (value: unknown): number {
        return String(value).length;
    };
}


const lengthCalculator = getLength2();

console.log(lengthCalculator("hello"));
console.log(lengthCalculator(12345));
console.log(lengthCalculator(null));

function outer(x: number) {
    return function inner() {
        console.log(x);
    }
}
//difference between closure and scope

//objects , interface ,type alias

//Task 5-prdduct array which contains products
const details: { name: string, age: number } = {
    name: "Sejal",
    age: 21
}


//Interface
interface todo {
    readonly title: string
    pageNumber: number

}

const task: todo = {
    title: "Hey baby",
    pageNumber: 3
}

console.log(task)
//Property: readonly
// task.title ="hello" // (it will give error because of readonly we can not edit it.)


//Interface for Function

interface Add {
    (a: number, b: number): number;
}

const add: Add = (x, y) => (x + y)

//type alias means giving name to like task

//in ts we can write code in oops style

//union type,intersection type

//classes in ts woth constructor ,objects and access modifier

class person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log("Hey My name is " + this.name + " and my age is " + this.age)
    }
}

const p = new person('sejal', 21);
p.greet();


// class animal {

//     speak(): void {
//         console.log("Speak");

//     }
// }

// class dog extends animal {

//     bark(): void {
//         console.log("Bark");

//     }
// }

// const dog = new dog();

// dog.bark();

// //