// class Pizza {
//     constructor(radius, slices) {
//         this.radius = radius;
//         this._slices = slices;
//     }
//     get slices () { 
//         return this._slices; 
//     }
//     set slices (slices) { 
//         this._slices = slices;
//     }
//     display(){
//         console.log(this);
//         return this;
//     }
// };

// pizza1 = new Pizza(16,8);

// console.log(pizza1);
// console.log(pizza1.slices);
// pizza1.slices = 3;
// console.log(pizza1);
// pizza1.display();


class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
