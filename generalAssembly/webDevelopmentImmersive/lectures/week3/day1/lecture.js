// 6/22/15

// akira
// JQUERY
// - why JQUERY
// - jquery as code library
// - the jquery object
// - jquery DOCs
// - vannila -> jquery equivalent code

// jquery is a library; most of what akira use is for DOM manipulation
// every browser works a bit differently; we'll be using chrome.
// jquery is written so that it's compatible with ~97% of browsers

// you can set source of the script to a piece of code somewhere in the internet
// jquery hosts tis for us, so we can just put it on the script tag

// jQuery is the way you reference it
// $() is the way you can call jQuery
// $ == jQuery
// you write jQuery in the javascript file

// the purpose of jQuery is to simplify coding. 
// $("") and document.querySelectorAll("") is the same thing

// exercise
// - reading the class of an element		$('').attr('')
// - appending an element				    $('').append(element) 
// - click event listener					$(element).click(function)
// - setting an id	  						$('').IDSelector("#id");
// - reading the input value				$('').val()
// - adding a class to an element			$('').addClass()


// these all have their equivalent in jQuery
// most of jquery is dom manipulation

// exercise

// 1
var h3 = document.querySelector('h3');

var h3 = $("h3");

//2 
var h3 = document.querySelecotr('h3');
h3.innerText = "Monkey Cheese";

var h3 = $("h3");
$("h3").text("Monkey Cheese");

//3
var h3 = document.querySelector('h3');
h3.classList.add('fusia');

var h3 = $("h3");
$("h3").addClass("fusia"); // or this: $('h3').attr('class', .fuscia');

//4
var button = document.querySelector("button");
button.addEventListener('click', function() {
	console.log('hello!');
});

var button = $("button");
$("button").buttonSelector;
$("button").click(function() {
	console.log('hello');
});

//5
var li = document.createElement('li');
var body = document.querySelector ('body');
li.innerText = 'Cheeseburgers';
li.classList.add('huge');
body.appendChild(li);

var li = $('li').add('li');
var body = $('body');
$('li').text("Cheeseburgers");
$('body').append('li');

//or try this:
$('body').append('<li>').text("Pizza").addClass("huge");

// 6
var button = document.querySelector('button');
var myFunc = function() {
  console.log("WEEEE");
  this.innerText = 'I WAS HOVERED OVER';
}
button.addEventListener('mouseover', myFunc);
// hover over button
button.removeEventListener('mouseover', myFunc);

var button = $("button");


$("button").on("mouseover", function() {
	myFunc();
});
$("button").off('mouseover');

//or try this:
$('button').mouseover(myFunc);
$('button').off('mouseover');

// .off only worked when there was a corresponding .on preceeding it
// look at this dom: addEventListener -> notice the add part

// when you add brackets in jquery, like $('<li>'), it's telling
// jquery to make a new li tag. 

// LUNCH
