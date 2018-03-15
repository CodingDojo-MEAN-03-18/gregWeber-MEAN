

function Ninja(name){
    //safegaurd against developer error of creating an instance of Ninja without using keyword New
    if (!(this instanceof Ninja)){
        return new Ninja(name);
    }

    let speed = 3;
    let strength = 3;    
    this.name = name;
    this.health = 100;

    this.showStats = function(){
        console.log('--------------------')
        console.log('Name:' , this.name)
        console.log('Health:', this.health);
        console.log('Speed:', speed);
        console.log('Strength:', strength);
        console.log('--------------------')
        return this;
    };
    //makes strength available to instances of Ninja
    this.getStrength = function(){
        return strength;
    }
}

Ninja.prototype.sayName = function(){
    console.log(`I'm a ninja, my name is ${this.name} - prepare to battle!`);
    return this;
}

Ninja.prototype.drinkShake = function(){
    this.health += 10;
    console.log(`${this.name}- "I love the taste of pure liquid health!"`)
    return this;
};

Ninja.prototype.punch = function(ninja){
    ninja.health -= 10;
    console.log(`${ninja.name} was punched by ${this.name} and lost 10 health `)
    if (ninja.health < 10  &&  ninja.health > 0){
        console.log(`${ninja.name}, you're almost out of health, better re-fule!`)
    }
    if (ninja.health <= 0 ){
        console.log(`game over - ninja ${this.name} has defeated ninja ${ninja.name}`)
    }
    return this;
}

Ninja.prototype.kick = function(ninja){
    let strength = this.getStrength();
    let damage = strength*15;
    ninja.health -= damage;
    console.log(`${ninja.name} was kicked by the swiftfooted ${this.name} and lost ${damage} health`);
    if (ninja.health <= 20  &&  ninja.health > 0){
        console.log(`${ninja.name}, you're almost out of health, better re-fule!`)
    }
    if (ninja.health <= 0 ){
        console.log(`game over - ninja ${this.name} has defeated ninja ${ninja.name}`)
    }
    return this;
}


//ninjas
const greg = new Ninja('gDub');

// here wes is undefined because I didn't use keyword New -- so the catch in the beginning of the constructor function should creat a New instance for us.
const wes = Ninja('wesMon');
// console.log(wes)

//game play
greg.sayName().showStats();
wes.sayName().showStats();
greg.drinkShake().punch(wes)
wes.kick(greg).kick(greg);
greg.showStats();
wes.punch(greg)
greg.drinkShake().kick(wes).punch(wes);
wes.showStats();
greg.showStats();
greg.kick(wes);

