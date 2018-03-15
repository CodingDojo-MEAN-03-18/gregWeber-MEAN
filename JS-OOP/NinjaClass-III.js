class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log(`Get ready to battle, I am the fierce ninja warrior ${this.name}!`);
        return this;
    }
    showStats(){
        console.log(`<= Ninja Stats => Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}.`)
        return this;
    }
    drinkShake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    sayName(){
        // super.sayName();  if I add the super here it will log out from both functions, but if I remove it the parent sayName() gets overwritten 
        console.log(`Preepare to battle, this is your unlucky day for I am the fiercest of all ninja warrior, Sensei ${this.name}!`);
        return this;
    }
    speakWisdom(){
        super.drinkShake();
        console.log(`Here's to it to do it - drink for health!`)
        return this;
    }
    
}


greg = new Ninja('gDub');
master = new Sensei('Hattori Hanzo')


master.sayName().showStats().speakWisdom().showStats();
greg.sayName().showStats().drinkShake().showStats();

