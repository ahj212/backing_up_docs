// 6/11/15

// OBJECTIVES
// - understand + debug scope
// - describe closures
// - understand + describe JS object 
// - learn how to create an object 
// - best use ases for an object 
// - explain how to access and manipulate object properties 

// people overcomplicate closures; we'll get you up to speed.
// array index, what do we use them for? to call a specific part 
// of the array.

// you 'scaffold' html by typing html tab
// html and .js document has to be in the same directory

// example of scope
// scope is a set of variables you have access to.

//example 1

var hi = 'hello';

alert(hi);

// in javascript, scope is always global outside of functions.
// what does global mean? it means you can use it anywhere 
// in the program.
// what is global? when anything is outside a functions, 
// it's global.

// example 2

var things = []; // 0
for (i = 0; i < things.length; i++) {
	things[i];
}
alert(i);

// on line 39, what is i going to be? 
// it will be 0.
// things is wrapped in an array, but it has nothing in it.
// since i < things.length is false, the for loop doesn't even run.
// in the for loop, i = 0, therefore when alert(i); triggers, it'll show 
// 0. 

// example 3

var a = 'hi';
var a = 'bye';

alert(a); 

// alert a should say 'bye'. 'hi' was overwritten by 'bye'.

// example 4

var a = "hi";

var b = function() {
	var a = 'rabbit';
	return 'bye';
}

alert(a);

// alert(a) should alert "hi".
// what is a global scope? any variable OUTSIDE function.
// what is a local scope? any variable INSIDE function.

// example 5

var a = "hi";

var b = function() {
	var a = 'rabbit';
	return a;
}

console.log(b());
alert(a);

// you can call function b by stating b();

// example 6

  var a = 1;
  var b = 2;
  var c = 3;

  function sum(a,b) {
  	return a + b + c;
  }
  sum(1,7);

 // sum(1,7) should equate to 11.
 // although we didn't specifically input a value for c, the computer
 // looks up to find c and finds that there's a global c = 3. 

// instructors have been telling us to put var in front of any variables.
// now pavan will show us what will happen if we don't do that.

// example 7

  var b = function() {
  	return 10;
  }

  var a = function() {
  	b = 4;
  	return 5;
  }
  alert(a);

// always put var in front of everything
// notice how b on line 106 doesn't have a var in front of it.
// what ended up happening is we overwrote our global b. 
// b definition on line 111 overwrote b definition on line 106.
// b definition on line 111 is global; the danger is you override things
// in the global 

// closure is a concept, same as global. array is a datatype that you can
// actually use. 

  var band = 'Radiohead';

  var radioHeadSong = function() {
  	return band + " sang " + "high and dry.";
  }
  	radioHeadSong();

// Radiohead sang high and dry.
// this code is depending on a global scope for band. it is depending on
// line 126. 
// CLOSURE IS WHEN SOMETHING DEPENDS ON A SCOPE ABOVE IT!!!
// when you have a function and variables inside of it depend on 
// variables outside of it, that's when you have a closure. 

// we are going to go over what an object is:
// think of an object as a box that has a bunch of values that have names.
// what's an array? 
// an array is just a list of values that have indices (plural of index).

// example 1

  var animalInfo = {
  	liger: 'lion and a tiger',
  	crocodile: 'lizard',

  }
 
// this is an object.
// liger and crocodile is a KEY. 
// other names for an object are associative arrays, and hashes. 
// notice how there are no semicolons at the end of line 148, 149. 

animalInfo.liger

// this will put out 'lion and a tiger'.
// keys are a way you can access info.

animalInfo['liger']

// this is another way to put out 'liger and a tiger'

keys(animalInfo)

// prints the keys out.
// in objects, keys CAN'T be numbers
// keys CANNOT have spaces in them UNLESS it's a key!

keys(animalInfo).length

// prints out the numbers of keys in an object

  animals = ['liger', 'crocodile']

// this is an array.
// main difference b/w objects and arrays:
// objects you get values using the key, to get the values for an array,
// you need the index.

// exercise 1

var car = {
             name: "El Camino",
             year: 1966,
             color: "red",
           }

           //Fill in the variables using object calls using carName as an example

           var carName = car.name //"El Camino"
           var carYear = car.year
           var carColor = car.color

           console.log(carName);
           console.log(carYear);
           console.log(carColor);

// keys can never be numbers -- it will break, but values can be whatever you want.
// if key has a space in it, turn it into an array

//EXERCISE TIME 10 minutes

           //TV Show Object

           var tvShow = {
             name: "Twin Peaks",
             director: "David Lynch",
             genre: ["Drama", "Mystery", "Thriller"],
             actors: ["Kyle MacLachlan", "Lara Flynn Boyle", "Dana Ashbrook", "Sherilyn Fenn"]
           }

           //Fill in the variable using object calls and console.log them out after


           var tvShowName = tvShow.name;
           var tvShowDirector = tvShow.director; 
           var tvShowGenre1 = tvShow.genre[0];
           var tvShowActor4 = tvShow.actors[3];

           console.log(tvShow.name);

           //Bonus:

           //Access all of the actors, loop through them and print a string to the console with the actor's name concatonated with the word "rules!"
           //e.g "Kyle MacLachlan rules!


// LUNCH break

// OBJECTIVES
// - OOP = Object Oriented Programming
// -why design considerations
// -how properties and methods
// - OOP methods: understand 'this' very word
// - objects are not only containers, but they can also act on the data they contain. 

  var airConditioner = {
  	  temperature : 10
  	  foo : function() {
  	  	alert("foo");
  	  }
  };

// just how variables can be contained in a function, so too can a 
// function in an object.

// exercise 1

var cat = {
	meow : function() {
		console.log("meow.")
	}
}

cat.meow();

// end exercise 1

var airConditioner = {
	temperature : 10,
	getTemperature : function() {
		temperature = temperature + 10;
		console.log( temperature )
	}
};
console.log(getTemperature());

// "this" keyword refers to the current object we are in.
// "this" keyword to access your own object's properties.
// caveat; 
// short answer: "this" should be used mostly for functions


// exercise 2

var airConditioner = {
	temperature : 0
	getTemperature : function() {
		return this.temperature;
	}
}
	}
}

// end exercise 2

// exercise 3

var cashRegister = {
	singlesCount: 30,
	fiversCount: 8,
	tensCount: 3,
	twentiesCount: 2,

	totalCash: function() {
		//TODO: write function that calculates cash in register
		return (this.singlesCount) + (this.fiversCount * 5) + (this.tensCount * 10) + (this.twentiesCount * 20);
	}


};
cashRegister.totalCash();

// solution set by instructors

var cashRegister = {
	singlesCount: 30,
	fiversCount: 8,
	tensCount: 3,
	twentiesCount: 2,

	totalCash: function() {
	  var total = 0;

	  //stuff
	  var singlesTotal = this.singleCount * 1;
	  var fiversTotal = this.fiversCount * 5;
	  var tensTotal = this.tensCount * 10;
	  var twentiesTotal = this.twentiesCount * 2;

	  var total = singlesTotal + fiversTotal + tensTotal + twentiesTotal;

	  return total;


	}
},

// attributes are a key
// behaviors are keys that point to function
// step 2 is we are using objects inside objects i.e. object oriented Programming
// disregard addLine on step 2, behavior
// step 3.5 don't worry about that.

//make homework folder in YOUR FOLDER 
//

// var lTrain = {
//  name : "L",
//  stations : [],
//  listStations: function() {

// },
//   addStation: function(newStation) {

// },
//   stopsBtwnStations: function(stationStart, stationEnd) {

// },

 // }

 // try to separate javascript files like
 // objects, solosystem, menu, app
 // .join basically puts all the arrays into a new line. 