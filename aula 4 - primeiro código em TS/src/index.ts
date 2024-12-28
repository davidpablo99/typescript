const x : number = 20; //tipar as coisas é por os : pontos e escrever o que eles são
console.log(x);


//Tipos Básicos
let firstName:string = "David";
let age : number = 25;
const isAdmin: boolean = true;

// String != string

console.log( typeof firstName);
firstName = 'Queiroz'
console.log(firstName)

//OBJECT
const myNumbers: number[] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5)
console.log(myNumbers)

//TUPLAS
let myTuple: [number, string, string[]];
myTuple = [5,"teste", ["a","b"]]
// myTuple = ["teste", 5, [2.3]]
// myTuple = [true,false,true]

//Object literals -> { propriedade:valor}
const user : {name:string, age:number} = {
    name: "David",
    age : 25,
};

console.log(user);
console.log(user.name)

//ANY

let a : any = 0
a =  "Teste";
a = 10;
a = []

//UNION TYPE
let id: string | number = "10"
id = 200
// id = true // aqui ja nao serve

//type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "teste"
const shirId: myIdType = 123

//enum
//tamanho de roupas(size:medio, size:pequeno)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}
console.log(camisa)

//literal type

let teste: "algumvalor" | null;
teste = "algumvalor";
teste = null;

//funções
function sum(a:number, b:number){
    return a+b
}
console.log(sum(12,12))
// console.log(sum("12",true))

function sayHelloTo(name:string): string{
    return `Hello ${name}`;
};
console.log(sayHelloTo("David"));

function logger(msg:string): void {
    console.log(msg);
}

function greeting(name:string,greet?:string){
    if (greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    } 
    console.log(`Olá ${name}`);
} //saudaçoes

greeting("José")
greeting("David", "sir")

//interface
interface MathFunctinParams{
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctinParams){
    return nums.n1 + nums.n2
}

sumNumbers({n1:2,n2:3})

function multplyNumbers(nums: MathFunctinParams){
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctinParams = {
    n1:5,
    n2:10
}
console.log(multplyNumbers(someNumbers));

//narrowing
//checagem de tipos
function doSomething(info:number | boolean){
    if(typeof info === "number"){
        console.log(`o número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}

doSomething(5);
doSomething(true)

//generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3,4];
const a2 = ["1", "2", "3"];

showArraysItems(a1)
showArraysItems(a2)

//classes
class User{
    name
    role
    isApproved

    constructor(name:string, role:string, isApproved:boolean){
        this.name = name,
        this.role = role,
        this.isApproved = isApproved
    }
    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }
    
    showUserRoles(){
        console.log(`A regra do usuário é ${this.role}`)
    }
}

const zeca = new User("Zeca", "Admin", true)
console.log(zeca);

zeca.showUserName();
zeca.showUserRoles();

//interface em classes

interface IVehicle{
    brand:string,
    showBrand():void;
}

class Car implements IVehicle{
    brand;
    wheels;

    constructor(brand:string, wheels:number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car ("Vw", 2);
fusca.showBrand();

//Herança
class superCar extends Car{
    engine;

    constructor(brand:string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine;
    }
}
const a4 = new superCar("audi", 4, 2.0);
a4.showBrand();

//decorators (muito usado para evento observado, validação de dados)

class Person{
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam);
