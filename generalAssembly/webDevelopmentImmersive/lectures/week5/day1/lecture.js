// 7/6/15

// SLIPS

// please draw ficticious route, and break down the details

app.get("/fireworks/:height/:colour", function ( req, res) {
	// do stuff
	res.send( )
})

// what is params?
// it's an object property in express node.js. makes it easy to open up application

// PAVAN

// learning objectives
// - students will be able to respond with files instead of html strings
// - students will be able to use the handlebars templating engine to easily pass in data from the route to the html
// - students will be able to use node-localstorage to save, update, delete data from forms.

// using express-handlebars
// express-handlebars is a layout app

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs ({extname: 'handlebars', defaultLayout: 'main.handlebars', layoutDir: _dirname + '/layouts' }))

// there's a layout directory for handlebars
// there's also a view directory for handlebars

// handlebars is a view template engine
// makes your code much drier since there will be much less repitition 

// triple handlebars gives you a dynamic layout