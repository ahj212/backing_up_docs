// 6/17/15

// this entire month is going over what you learned the last week and
// 2 days in class

// - from 10 - 11:15 AM
	// - students will be able to use the JS fundamentals
		// to identify a multi-dimensional array and be able to loop through
		// it for the nested values

		// to identify a named argument that is being passed into a function
		// to explain how a callback function is invoked later by the browser

	// - from 11:15 - 12:30 pm
		// students will be able to answer everyones' questions about the
		// tic tac toe game

		// this isn't something you'll get right away. It'll take the entire
		// month.

			// - students will be able to pick the correct type of way 
			//to represent data (a string, a number, arrays or objects)


// the reason why people use javascript is because of callbacks. you can
// pass a function in another function and EXECUTE it after something has
// happened.  

// loop over this array
//      so it console.logs 
//      a
//      b
//      c
//      d

//    var letters = ['a', 'b', 'c', 'd']

var letters = ['a', 'b', 'c', 'd'];

for (var i = 0; i < letters.length; i++) {
	console.log(letters[i]);
}

// incrementor (i++) runs after console.log runs.

// next exercise is nested for loops. 

   var groupsOfFourLetters = [
     ['a', 'b', 'c', 'd'],
     ['e', 'f', 'g', 'h'],
     ['i', 'j', 'k', 'l'],
   ]
for (var i = 0; i < groupsOfFourLetters.length; i++) {
	for (var j = 0; j < groupsOfFourLetters.length[i]; j++) {
		console.log(groupsOfFourLetters[i][j]);
	}
}

// make sure you console log to check the first code works. 
// we use a different variable for i to set the condition for the second
// loop to prevent screwing up the first loop.

// named functions

function returnTwo() {
	return 2;
}

returnTwo


function returnNumber(number) {
	return number;
}

// little trivia, max arguments you can put in is 255.
// array is a structure, not an object!

// another exercise

// HERE'S EXERCISE

// Pavan Katepalli [10:52 AM]
// write a function that takes in an argument
// and if the argument is a string, it'll return the reverse of the string.

            use this function on this variable:

            var testOne = 'desserts';
            var testTwo = 'pals';
            var testThree = 'snug';
            var testFour = 'lived';

var reverseOfString = function (arg) {
	var arg = arg.split('').reverse().join('');

	return arg
}

// adam/ruby's solution

function reverse(string) {
	var newReverse = "";
	for (var i=string.length-1; i>=0; i--) {
		newReverse += string[i];
	}
	return newReverse;
}

// if you do .split(), it will just return word in an array
// if you do .split(''), it will put the individual letters of word
// into an array. 

// BREAK

// callbacks:
	// when run in the browser
	// the following code executes sequentially
	console.log('first');
	console.log('second');
	console.log('third');


// going over set time out again. 
// in javascript, there's a way to delay doing something
// this is going to be our first call back

console.log('first');
setTimeout(function () {
	console.log('three') }, 500);
console.log('second');

// another way to do this

function consoleThis() {
	console.log('three')
}

console.log('first');
setTimeout(consoleThis, 500);
console.log('second');

// setTimeout is a javascript function just like 
// .reverse()
// .split()

// you are referencing a function when you don't add a parantheses. 

// a callback is when you pass in a reference to a function to a function
// and execute that reference of that function inside a function. 

// EXAMPLE OF callback
	function hi() {
		alert('hi');
	}
	function bye(thing){
		thing();
	}

	bye(hi);

// THIS IS NOT A CALLBACK!!!!

function (hi) {
	alert('hi')
}
function bye() {
	hi();
}
// this is just calling a function within a function, and that's not a 
// callback

// now we are going to see an example of event.

var buttonGreet = document.getElementById("clickMe");
var buttonGreet = document.querySelector("#clickMe");

// these two above are the same thing. 
// but queury selector works for basically anything. use query selector

buttonGreet.addEventListener('click', function() {alert("hi")});''

// node is the same as page element; in html, it refers to them as tags

// value of innerHTML is always a string. 





