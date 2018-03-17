
// the underscore character '_' is the name of a variable that has an object set to it, in the 
// object are keys called map, reduce, filter... the values of those keys are the methods, so to 
// call the method you say underscore dot method name --->   _.method(stuff, function)  the function 
// you pass into the method call when you envoke the method is the callback and is not envoked here 
// because we havent used () after it. at this point the callback is just the instructions that you 
// sent to it - the function block of code.  When you envoke callback in the code of the method, then 
// those instructions (the function you passed as an argument when you invoked the method) get ran and 
// the return of that callback function is passed to the method to be handeled how ever you write for 
// it to be handeled there.

var _ = {
    //map takes in either an array or object
   map: function(object, callback) {
          let result = [];
          //  check to see if object is an array
          if (Array.isArray(object)){
            for (let element of object){
                result.push(callback(element));
            }
          } else {
            for (let key in object){
              result.push(callback(object[key]));
            }
          }
          return result;
        },

   reduce: function(array, callback, memo) { 
    

   },

   find: function() {   
     // code here;

   },

   filter: function(array, callback) { 
              let result = [];
              for (let element of array){
                if (callback(element)){
                  result.push(element);
                }
              }
              return result;
            },

   reject: function() { 
     // code here;
   }
 }
// you just created a library with 5 methods!


// _.filter the return of the function getting passed to .filter here evaluates to a boolean ((try it, add a number to the function and you will 
//get either  true or false --> function(3){return 3 % 2 == 0} --> returns false)) so when I envoke my callback in my filter method I have to treat it 
// like --> if this is true then do something and in this case I wanted that do something to push the true values to an array to return.
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].


// _.map  -- here the function returns a number so that needs to be pushed to a result in the .map method
var arrTimes3 = _.map([1, 2, 3], function(num){ return num * 3; }) // [3, 6, 9]
console.log(arrTimes3);
var  objTimes3 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }); // [3, 6, 9]
console.log(objTimes3);


// reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
// Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

// If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6
