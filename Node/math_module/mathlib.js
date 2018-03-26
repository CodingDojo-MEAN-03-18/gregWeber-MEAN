

//practice exporting a module and using the functionality in a different file

module.exports = function (){
    return {
      add: function(num1, num2) { 
           
           return num1+num2;
      },
      multiply: function(num1, num2) {
           
           return num1 * num2;
      },
      square: function(num) {
           
           return num*num;
      },
      random: function(num1, num2) {
           // random number between the two numbers
        if (num1 >= num2){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        return  Math.floor(Math.random() * (num2 - num1 + 1) + num1);
      }
    }
  };

// console.log(module.exports().add(3,2));
// console.log(module.exports().random(1,11)); 

   

