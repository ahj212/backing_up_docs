// 7/16/15

// AKIRA

// Model View Controller (MVC)
// - this is a form of separation of concerns
// - there's a lot of shit in our app now, with server.js, database, sql queries, templates, so on and so forth
// MVC makes our files more readable
// - MODEL deals with database
// - VIEW deals with templates
// - CONTROLLER deals with server.js
// one of the other things it does is it makes the division of your code more distinct, so it's easier for you to locate errors
// basically 95% of all web apps are MVC
// CREATE READ UPDATE DELETE (CRUD) = MVC


// controller is located between model and View
// controller's basically a route; in its most basic form, it's an app.get

// module.exports is like an object method that knows how to grab things between files. 

module.exports.controller = function(app) {

	app.get(blahblah {
		Artist.find.();
	});
}

// fs stands for file system
// it's another library we'll add to let the controllers access server.js
// put that shit in server.js

// when you look at someone's file system and see their folder structure. 

// moving forward, the only thing that will be present in server.js is the home route

// the whole point of this is readability and easier debugging

// moving on to models
// same thing we did with controllers, we'll be taking out database functionality and will be making an actual javascript object that represents our data model
// let's go ahead and make a new 
// this step's a litte more complicated than controller

// in rails, models are singular and controllers are plural
// for models, essentially what we are building is a constructor

// BREAK 

