// 7/15/15

// WILL

// LEARNING OBJECTIVES
// - write reusable code to DRY up our SQL
// - full day build for reps + process

// Object Relational Mapper (ORM)
// - allows us to dry up our SQL 

.all('artists', function(data) {
	res.send(data[0]);
})

// end closes your connection
// done says when it's finished and moves forward

//LUNCH

// our schemas are representations of models(ruby) or objects(javascript)

// we have seven routes that we can hit
// I: Index, All 'artists', GET '/artist'
// S: Show, ONE OR INDIVIDUAL, GET '/artists/:id'
// N: New, Render creation form, GET '/artists/new'
// C: Create, post route  has no render, will typically have a redirect, POST '/artists'
// E: Edit, renders a form filled with info, GET '/artists/edit/:id'
// U: Update, has no render, PUT '/artists/:id'
// D: Delete, has no render, DELETE '/artists/:id'


// If Sally Needs Cookies, Eat Until Dead

	var newArtist = {
		name: 'David',
		img_url: 'http://placecage.com/200/200',
		nationality: 'Russian',
		birth_year: '1986',
		description: 'David is suite'
	};