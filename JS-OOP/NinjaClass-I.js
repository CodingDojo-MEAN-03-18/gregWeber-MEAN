function Ninja(name){
    var health = 100;
    let speed = 3;
    let strength = 3;    
    this.name = name;

    this.showStats = function(){
        console.log('Name:' , name)
        console.log('Health:', health);
        console.log('Speed:', speed);
        console.log('Strength:', strength);
        return this;
    };

    this.drinkShake = function(){
        health += 10;
        return this;
    };
}

Ninja.prototype.sayName = function(){
    console.log(`I'm a ninja, my name is ${this.name} - prepare to battle!`);
    return this;
}


const Greg = new Ninja('gDub');

Greg.sayName().drinkShake().drinkShake().drinkShake().showStats();
