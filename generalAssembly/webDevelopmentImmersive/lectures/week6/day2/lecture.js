// 7/14/15

// WILL

// LEARNING OBJECTIVES
// - describte normalization
// - translate real world situation with relationships to ERD
// - describe a foreign key
// - join psql tables based on a foreign key

// navicat
// another visualizer for psql
// outside a command line, it visualizes psql in a shell

// problems with our database as of now
// - no relationships

// ERD
// - Entity Relational Diagram
// - it's like pseudocoding schema

// let's ERD something
// starbucks

// what are some of the things that starbucks has
// - plastic lids
// - hot coffee
// - cold coffee
// - locations
// - employees
// - pastries
// - suppliers
// - wifi
// - operation hours
// - shareholders
// - secret menus
// - specials
// - branding
// - hot chocolate
// - yogurt

// what on this list has to exists first? 

// location, these are things that are only specific to the location itself
// id - SPK
// address - string
// sq_ft - integer
// bathroom - boolean
// wifi - boolean
// hours - string

// let's set up another table for employees
// name tables using lowercase and plural
// employees
// id - spk 
// name - string
// salary - integer
// title - string
// full_time - boolean
// location that employees work - what do we do here?

	// how do we link the location table and the employee table?

	// WHAT IS A FOREIGN KEY?
	// - it's just an integer; HOWEVER, this integer references the identification # of another table's row
	// - foreign key never represents a column

	// how do we represent this foreign key? we do this

// location-id - integer

// this is a one to many relationship
// foreign key lives inside many

// locations has many, employees belong to

// now let's do some ERDs exercise

Model these domains, be creative with your attributes,
* Star Wars with Characters and Alliances
* An apartment building with floors, apartments, and tenants
* The NFL, with teams, coaches, and players
* iTunes, with songs, artists, and playlists

STAR WARS

alliances
id - spk 
name - string
morality - string
military strength - string
homeworld - string
gdp - string
natural resources - string
government type - string
literacy percent - integer


characters
id - spk
name - string
race - string
age - integer
morality - string
occupation - string
alliance_id - foreignkey (belons to alliances name)

APARTMENT BUILDING

floors 
id - spk
floor level - integer
# of units - integer
address - foreignkey (belongs to apartments address)



apartments
id - spk
# of employees - integer
address - string

tenants
id - spk
name - string
race - string
age - integer
address - foreignkey (belongs to apartments address)

NFL TEAMS

teams
id - spk
name - string
players_id - integer
coaches_id - integer
w/l % - integer

coaches
id - spk
name - string
position - string


players
id - spk
name - string
age - integer
position - string

// BREAK

// let's do something called normalizing
// - break shit down to something more managable

// anything you feel can be a new object can be a new table 

// cascade means anything related to this data table

//exercise01

// when you are seeding, you can comfortably assume that ids start from top to bottom in order of creation

// reference sql keyword

// when we are grabbing things from more than one table, use join

// postgres sends back objects, it's an ODBMS


app.get('/new-customer-purchase', function (req, res) {
	pg.connect(connectionString, function (err, client, done) {
		client.query function (err, result) {
			client.query function ( err, resultt){
				var data = {
					sauces : result.rows,
					customers : resultt.rows
				}
			}
		}
	})
})

// for create stuff, use RETURNING id on the first 
// you can only use RETURNING id after an insert
