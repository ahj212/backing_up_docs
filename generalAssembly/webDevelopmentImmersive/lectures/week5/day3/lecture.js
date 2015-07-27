// 7/8/15

// AKIRA

// HTTP
// - put
// - delete
// - how to update and delete things in our app
// - learn about the other 2 HTTP verb

// we've already seen get and post so far; today we will do put and delete
// get is basically ask for something, like an info
// post is create something
// put is update
// delete is delete

// going over homework yesterday
// data.json is just a text file. we can manually change the data inside the json to change the data inside of it. 

// define each of these tweets as a separate entity
// then we'll start thinking of configuring them
// all we're doing right now is just creating them and putting them into a list
// eventually we'll want to create distinct elements for each of them

// 1. app should have individual tweeds. so it's easier to edit them 

//home.handlebars
<div id="tweed-collection-view">
	{{#each body}}
		<div class="tweed">
			<p>{{@key}}</p> //NEW STUFF KEY
			<ah ref="/tweed/{{@key}}">
				<p class="content">{{tweed}}</p>
			</a>
			<p class="author">{{author}}</p>
		</div>
	{{/each}}
</div>

// let's talk about this idea of key
// if you add {{@key}}, it gave numerical value to each tweeds. it basically becomes the index of our array. 
// this is how we'll be able to individually identify all of our tweeds

// {{@key}} is just handlebars thing. basically inside the each(for) loop, just put in an index by using {{@key}}
// key just poops out a series of number (starts from 0)

app.get('/tweed/:id', function(req, res) {

	var id = req.params.id;

	flatfile.db('data.json', function (err, data) {
		var tweed = data.body[id];
		res.send(data);
	});

});

// 2. app should have a form that contains tweed

// BREAK

// let's talk about network tabs
// going to be super useful when debugging and for ajax request

// LUNCH

// Tweed ap uses flow
// - request / route
// - app.js renders / route
// - ser clicks on single twee / twee/0 link
// - app.js renders /tweed/:id route
// - user clicks on edit /tweed/edit/id route
// - user makes changes to form and clicks submit.action
// - server updates data.json and renders the route


// data.body[id] is a single piece of data inside our data.json. it will basically be equivalent to a single tweed. 

// PAVAN

// students will know how to use get, post, delete, and put routes via forms in express


