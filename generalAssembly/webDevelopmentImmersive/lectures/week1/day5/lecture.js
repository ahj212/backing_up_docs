// 6/12/15

// learning objectives

// - what is a constructor
// - describe when to use a constructor
// - how do we make a new object?

// exercise 1: make a minion that has a name, a color, eyes, a 
// function called mutatus which changes the color to purple and 
// function called revert which changes the color to yellow.

var minon = {
	name : ["Sam", "Alex", "Sarah", "Michael", "Mary"],
	color : ["White", "Red", "Yellow", "Purple", "Blue"],
	eyes : ["Big", "Small", "One", "Two", "Three"],
	mutatus : function() {
		this.color = "purple";
	},
	revert : function() {
		this.color = "yellow";
	}
}

// naming convention for constructor is capital (upper case) first.
// e.g. var Minion.

var Minion = function (name, color, eyes) {
  this.name = name;
  this.color = color;
  this.eyes = eyes;
  this.mutate = function() {
  	this.color = "purple";
  };
  this.revert = function () {
  	this.color = "yellow";
  }
}

// this is a consctructor function. you build it like how you would
// treat an object. only difference b/w an object and constructor
// is you have to use this. for attributes and semicolons at the end.

// in javascript, there is a keyword called new.

var larry = new Minion ("larry", "yellow", 5);

var stew = new Minion ("stew", "blue", 6);

// what if you only put 2 paramets instead of 3?

var peter = new Minion ("peter", "green");

// it will pop out as undefined. the original function we created
// has no defaults. it's expecting an eyes value. eye value will be
// undefined. 

var andrew = new Minion ("andrew", "yellow", 2);

// So we are going to make a Car constructor. This car 
// constructor should have a make, model, year, hp. It should be 
// able to return its full name, ex: "1967 Ford Mustang". Its 
// should be able to be supercharged, which will ramp up the 
// hp by 150hp.

var Car = function (make, model, year, hp) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.hp = hp;
	this.returnName = function() {
		return this.year + " " + this.make + " " + this.model;
	};
	this.superCharge = function() {
		this.hp = 150;
	}
}

// let's say I want the hp to 200 if user hasn't defined it.

this.hp = if ( hp === undefined) { this.hp = 200 };

// make a Person constructor that has the attributes of firstName
// and lastName and a behavior of fullName which returns the persons 
// full name.

var Person = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.returnFullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

//solution

var Person = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.returnFullName = function() {
		return [this.firstName, this.lastName].join(" ");
	}
}

// let's make a garage constructor. people are building car collections
// like hot cakes. the garage constructor should have the following
// attributes: owner - which will be a person objects, cars - which
// will start as an empty array, it will hold car objects. addcar - 
// which will be a behavior that adds a new car to the cars array. changeOwner
// - which will transfer ownership to a new person.

var Garage = function (owner, cars) {
	this.owner = owner;
	this.cars = [];
	this.addCar = function(newCar) {
		this.cars.push(newCar);
	  };
	this.changeOwner = function(newOwner) {
		this.owner = newOwner;
	}
}

// something should equal function if it is a behavior

// when we want to make the same object many times is when you
// would use a constructor.

// how do we make a new object?
// new Constructorname = function(arguments);

// HOMEWORK
// letter will be a constructor that takes new objects
// value is a string
// hidden is a boolean
