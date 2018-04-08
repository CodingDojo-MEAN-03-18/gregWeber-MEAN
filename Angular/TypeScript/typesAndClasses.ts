// assigning types to variables and classes(aka object constructors)

let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
let arrayOne: Array<boolean> = [true, false, true, true]; 
let arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };


//object constructor/class
class MyNode {
    val: number;
    __priv: number
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this.__priv = 10
    }
}

class SLNode {
	val: number;
	
	constructor(valueP: number){
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
//type SLNode
let firstSLNode= new SLNode(1);

//type MyNode
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}

//type never will never reach the end of the fiunction hence no return statement
function sendingErrors(): never {
	throw new Error('Error message');
}
