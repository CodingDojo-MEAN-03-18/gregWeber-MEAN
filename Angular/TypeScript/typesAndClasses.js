// assigning types to variables and classes(aka object constructors)
var myNum = 5;
var myString = "Hello Universe";
var myArr = [1, 2, 3, 4];
var myObj = { name: 'Bill' };
var anythingVariable = "Hey";
anythingVariable = 25;
var arrayOne = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
//object constructor/class
var MyNode = /** @class */ (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this.__priv = 10;
    };
    return MyNode;
}());
var SLNode = /** @class */ (function () {
    function SLNode(valueP) {
        this.val = valueP;
    }
    SLNode.prototype.doSomethingFun = function () {
        console.log("This is FUN!");
    };
    return SLNode;
}());
//type SLNode
var firstSLNode = new SLNode(1);
//type MyNode
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
//type never will never reach the end of the fiunction hence no return statement
function sendingErrors() {
    throw new Error('Error message');
}
