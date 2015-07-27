// 6/19/15

// PAVAN
// students will understand
//		this
//				ridiculously well.

// grab input from screen

// <button>Click me</button>
// <input value="">

// var inputVar = document.querySelector('input');

// var catMeow = function() {
// 	if (inputVar.value == 'cat') {
// 		alert("meow meow");
// 	}
// }

// document.querySelector("button").addEventListener('click', function() {
// 	catMeow;
// })

var inputVarOne = document.querySelector('#inputValueOne');
var inputVarTwo = document.querySelector('#inputValueTwo');
var inputVarThree = document.querySelector('#inputValueThree');

var inputAddition = function() {
	var inputSum = parseInt(inputVarOne.value) + parseInt(inputVarTwo.value) + parseInt(inputVarThree.value);
	alert(inputSum);
}

document.querySelector("#button").addEventListener('click', function() {
	inputAddition();
});

// parseInt("3") + parseInt("3")