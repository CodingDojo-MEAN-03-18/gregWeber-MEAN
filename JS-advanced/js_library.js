
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
          if (Array.isArray(object)){
            for (let element in object){
            object[element] = callback(element);
            }
          } else {
            for (let key in object){
              object[key] = (callback(object[key]));
            }
          }
          return object;
        },

  
    reduce: function(array, callback, memo) { 
              let index = 0
              //if memo doesnt get passed then set first index in array to memo and set the variable index to one so the for loop will start at the correct place
                if (!memo){
                  memo = array[0];
                  index = 1;
                }
                //loop through the array and send memo and the current index value into the callback the return of which will incrment memo
                for (; index < array.length; index++){
                  memo = callback(memo, array[index]);
                }
                return memo
            },

    find: function(array, callback) {   
            for (let element of array) {
              if (callback(element)){
                return element;
              }
            }
            return undefined;
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

    reject: function(array, callback){ 
              let result = [];
              for (let element of array){
                if (!(callback(element))){
                  result.push(element);
                }
              }
              return result;
            }
 }

console.log(_)

// _.filter the return of the function getting passed to .filter here evaluates to a boolean ((try it, add a number to the function and you will 
//get either  true or false --> function(3){return 3 % 2 == 0} --> returns false)) so when I envoke my callback in my filter method I have to treat it 
// like --> if this is true then do something and in this case I wanted that do something to push the true values to an array to return.
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].


// _.map  -- here the function returns a number so that needs to be assigned back to the index in the array in .map method
var arrTimes3 = _.map([1, 2, 3], function(num){ return num * 3; }) // [3, 6, 9]
console.log(arrTimes3);
var  objTimes3 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }); // [3, 6, 9]
console.log(objTimes3);



// reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; },0); // memo is 0 index => 6
console.log(sum);
var sum2 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; },10); //memo is 10 => 16
console.log(sum2);
var sum3 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }); // no memo this time => 6
console.log(sum3);
// Also known as inject and fold, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
// If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.



// _.find(list, predicate, [context]) Alias: detect 
// Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
var even = _.find([1, 3, 4, 5, 7], function(num){ return num % 2 == 0; }); // => 4
var even2= _.find([1, 3, 5, 7], function(num){ return num % 2 == 0; }); // => undefined
console.log(even);
console.log(even2);


// _.reject(list, predicate, [context]) 
// Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });  // => [1, 3, 5]
console.log(odds);
