"use strict";
const x = 20;
console.log(x);
let firstName = "David";
let age = 25;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'Queiroz';
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "David",
    age: 25,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "Teste";
a = 10;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "teste";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
let teste;
teste = "algumvalor";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
;
console.log(sayHelloTo("David"));
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("David", "sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers({ n1: 2, n2: 3 });
function multplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3, 4];
const a2 = ["1", "2", "3"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name,
            this.role = role,
            this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRoles() {
        console.log(`A regra do usuário é ${this.role}`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRoles();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("Vw", 2);
fusca.showBrand();
class superCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("audi", 4, 2.0);
a4.showBrand();
class Person {
    constructor(name) {
        this.name = name;
    }
}
const sam = new Person("Sam");
console.log(sam);
