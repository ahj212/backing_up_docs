// 6/15/15

// slip

// inifinite loop - there is no breakpoint, so there is no false
// therefore, your computer will constantly loop the sequence, eventally
// leading to browser crashing. 

// what's the difference between referencing and calling?
// when you're referencing a function, a code does not get executed.
// when you call a function though, a code does get executed. 
// in callbacks, you're always referencing a function.
// calling function you want to do it right now.
// referencing function, you save it for another part.

// how does console.log() and return different in a function?
// the value of return is you can use whatever final value you come up
// with and incorporate it in another code. console.log, on the other hand
// does not allow you to use that information later on. after return is 
// executed on the function, the function ends.

function foo(x) {
	console.log(x+2);
}

var seven = foo(5)

// var seven will show undefined

function foo(x) {
	return x+2;
}

var seven = foo(5)

// var seven will return 7

// what is scope?
// scope is overlying ownership of a variable. 

// function() is invoking
// function without () is referencing

// order of operations for conditionals are && first
// for example

true || true && false

// true && false will start up false, leading up to false value
// next true || false value will start, ending up with true!
// ! is called bang

// difference between array method, push, pop, shift, and unshift
// push = put it on the end
// pop = take one array element out at the end
// unshift = adds in an element at the beginning of the array and pushes 
// rest of the array back by one.
// shift = removes from the front of the array. 

// explain how array indexing works
// array is a list of objects, a special variable that can hold more 
// than one value. 
// index of an array refers to the elements inside an array's "address"
// index goes from 0 -> 1, -> 2. etc 
// in javascript, there is no negative indices. 
// when you get to ruby, -1 is allowed (it will show last index)

// explain how for loops when used within an array.

var myArray = ['a', 'b', 'c'];

for (var i = 0; i < myArray.length; 1++) {
	console.log(myArray[i]);
}

// explain how function callback works with an example.

function square(num) {
	return Math.pow(num, 2);
}

function addSquare(num, arg) {
	return num(arg) + 1;
}


addSquare(square, 2);
// how do arrays differ from object, both in syntax and practical useage.

//array
var x = ["banana", 7, true]

//object
var y = {
	name : "ken",
	age: 24
}

// you can call functions with an object, but you can't do that in an array
// arrays don't have this. objects do. 


// akira
// week 2 overview
// we covered javascript basics, and OOP (object oriented programming)
// we will do more front end stuff
// build tic tac toe 

// what is a browser?
// how does a browser work?
// DOM
// deals with files (JS, HTML, CSS);

// we have these files, index.html, and app.JS that are being loaded 
// in a browser. 

// browser lives in your computer; it's an application that interacts
// with files (such as index.html / app.js).
// user interface (like reload, back, etc)
// the meat of it is browser engine and rendering engine (we'll focus
// on these today).

// pavan
// students will be able to:
// understand the structure of html
// write valid html
// validate their html
// write CSS

// <!DOCTYPE> tells us what version of html we are using
// <!DOCTYPE> is the latest version of html (html5)
// google likes pages that are semantically written properly.
// <head> tag contains the title, links to external css/js files.
// <body> everything that the user sees is in the body. 

// you use UTF when you have to code with emails. 

// you're only supposed to have one <h1>
// href stands for html reference
// target="_blank" tells html to open a link in a new tab. 
// src is called source
// if something has an = sign after it, it's an attribute
// alt =  
// alt = will always be a text b/c it's used for screen reader. 
// accessibility is super important. 

// only use tables for datas, because if you make a table into a layout
// screen reader will freak out b/c tables usually contains data. 

// <div></div> are called dividers, are pretty big in html right now.
// a long time ago, people used tables to style their websites, but
// practice stopped for more accessibility.

// id is an attribute b/c it has an = sign after it
<div id = "first"> sample div </div>

// <br> is line break, it separates 

// <ol> stands for ordered list
// <li> means list item

// <ul> stands for unordered list

// <dl> stands for definition list
// <dt> stands for definition title
// <dd> stands for 

// <blockquote> is how you can quote someone

<blockquote>
	<p>this is a quote</p>
</blockquote>

// three ways of putting in css
// either put it in an external file, put it on header, or put it in
// individual tags

// css specificity

external style sheet < header style < inline styles

// inline styles is the most specific you can get <h1 style ="background">
// the next most specific thing  is put it in head tag
// external style sheet is literally an external css file. 

// !important means use this style (you should never use !important)

// why do we use functions in javascript? so we don't repeat yourself and
// follow DRY rule

// how to make a circle in css. 
// class vs id. class is more general, and id is more specific
// style sheet wise, you identifiy class with .className, and id with #idName

// lunch break

// programming is not about know what to do, but rather knowing
// how to do it when you do it

// pavan

// students will understand
//	-how things are organized in html
// 	-how to get to things using the dom

// all of javascript lives in a window
// anything not in a function is globally available
// what global means is it's attached to a window.
// so say you do this

var band = 'everclear'

window.band

window.innerheight

window.innerwidth


// when you think of window, think of it as the browser window
// javascript lives in browser universe!

// we've been using alert a lot. 
// what does alert do? it gives you a pop up 

alert('hi');

// alert actually lives in window. alert is a function of window

// let's talk about document object model (DOM)
// everything in javascript is an object
// if you type in window.document, all your html tags show up

// what you see from window is a tree
// document lives inside windows
// document is html
// inside documents, there are all the contents of the html elements like
// links, images, tags, etc

// if i type document.title, it will return title as string

// how do you grab one particular thing from the page?

// querySelector
// first step of manipulating something is grabbing it via querySelector

// grab things by name: what is a name? name is an attribute.


// starting tonight, if you look into student repo for today's week
// there is a schedule for how things are going to run this week

//



