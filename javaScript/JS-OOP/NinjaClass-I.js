function Ninja(name){
    let speed = 3;
    let strength = 3;    
    this.name = name;
    this.health = 100;

    this.showStats = function(){
        console.log('Name:' , this.name)
        console.log('Health:', this.health);
        console.log('Speed:', speed);
        console.log('Strength:', strength);
        return this;
    };

}

Ninja.prototype.sayName = function(){
    console.log(`I'm a ninja, my name is ${this.name} - prepare to battle!`);
    return this;
}

Ninja.prototype.drinkShake = function(){
    this.health += 10;
    return this;
};


//test
const Greg = new Ninja('gDub');
Greg.sayName().drinkShake().drinkShake().drinkShake().showStats();
