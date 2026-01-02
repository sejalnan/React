var a = "Sejal";
console.log(a);
var isActive = true;
console.log(String(isActive).length);
// Task-2 --check the results of following
var constant = '12344.54';
console.log(Number(constant));
console.log(parseInt(constant));
console.log(parseFloat(constant));
//Task 3-- convert each value to boolean and print the output
var values = [0, 1, " ", "hello", null, undefined, [], {}];
values.forEach(function (value) {
    console.log(value, "=>", Boolean(value));
});
var result = 0;
var ans = result ? true : false;
console.log(ans);
var result2 = [];
var ans2 = result2.length ? true : false;
console.log(ans);
//Task 4 
//closure-- it created when the inner function access the outer scope
function getLength2() {
    return function (value) {
        return String(value).length;
    };
}
var lengthCalculator = getLength2();
console.log(lengthCalculator("hello"));
console.log(lengthCalculator(12345));
console.log(lengthCalculator(null));
function outer(x) {
    return function inner() {
        console.log(x);
    };
}
//difference between closure and scope
//objects , interface ,type alias
//Task 5-prdduct array which contains products
var details = {
    name: "Sejal",
    age: 21
};
var task = {
    title: "Hey baby",
    pageNumber: 3
};
console.log(task);
var add = function (x, y) { return (x + y); };
//type alias means giving name to like task
//in ts we can write code in oops style
//union type,intersection type
//classes in ts woth constructor ,objects and access modifier
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        console.log("Hey My name is " + this.name + " and my age is " + this.age);
    };
    return person;
}());
var p = new person('sejal', 21);
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
