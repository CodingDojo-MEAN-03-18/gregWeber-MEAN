// 1. prediction: the var decleration gets hoisted and undefined gets logged because the var hasn't been assigned yet
console.log(hello);
var hello = 'world';


// 2. prediction: the function gets hoisted and then is called loogging out 'magnet' fromt he decleration inside the function
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}


// 3. prediction:  function never gets called. 'super cool' gets logged
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);


// 4. prediction: the function gets hoisted but doesn't get called until after the first log so 'chicken 'then 'half-chicken' gets logged
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// 5. prediction:  error: food not defined  <<got it wrong>>: so the correct answer is food is defined above in part 4 - the real error is that mean is not a function yet when it is called because 
// the var mean gets hoisted, but ut doesn't get assigned the function intill after it is trying to be called.
 mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);


// 6. prediction:  first log is undefined because genra hasn't been assigned a value yet
// then the rewind function is hoisted and called logging 'rock' and then 'r&b , then the console.log at the end logs the global var and you get 'disco'
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);


//part 7.  'san jose' gets logged, the the function logs 'seattle' then 'burbank', then the global gets called again and loggs 'san jose' for a second time
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
