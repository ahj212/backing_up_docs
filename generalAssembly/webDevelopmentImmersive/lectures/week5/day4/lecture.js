// 7/9/15

// morning exercise operation

// DON'T PUT SEMI-COLONS TO END CSS SEGMENTS. CSS DOES NOT USE SEMI-COLONS

//BREAK

//WILL

// LEARNING OBJECTIVES
// - explain what a database ise
// - explain how a DBMS, SQL, database relate to each other
// - A.C.I.D
// - translate real world domain into ERD
// - describe postgress
// - connect to a psal server
// - describe a SCHEMA

// today we will be learning something completely new
// it's a very hard left or right turn
// we are learning a second language this morning and afternoon
// it has nothing to do with javascript, we are not saying goodbye to javascript
// we are saying i'll see you tomorrow
// everything we learn today will be integrated into javascript tomorrow
// so the language we will be learning today is SQL
// we'll be learning how to integrate this into a DBMS(database)
// what were we missing for two days? a way to save data
// what is the shortcoming of flatfile? it's local, accessibility, size may be smaller, they're stuck in objects, and it's SLOW

// we need better ways to persist data, so we're gonna learn about databases
// what is a database? a data storage. a dataspace can be anything. a text file, a json file.
// a database is somewhere you store information
// databases follow a convention. this convention is known as acid (atomocity, consistency, isolation, durability)
// - atomocity is the idea that a database is all or nothing
// - if one piece of your database fails, the entire thing will fail. NOTHING will get saved unless everything can get saved ***IMPORTANT CONCEPT TO UNDERSTAND***
// - ALL OR NOTHING

// - consistency: every piece of data that you store into a specific part of your database will need to be written EXACTLY the same. you cannot store where a string where an integer is supposed to go, vice versa. 
// - ALL DATA MUST STAY VALID

// - isolation: your database will isolate one entry at a time to put in. it will never put in more than one at a time.
// - isolation will put on a queue to place one data at a time// ONE ENTRY AT A time

// durability: once your entry hits your database, it will persist no matter what. your program can crash, anything can crash, unless your harddrive is destroyed, your data stored inside a database will always be stored
// - ONCE COMMITED ALWAYS COMMITED

// we have a database, somewhere we can hold data
// accessing the data is a different story than storing one
// there are these programs that go by the acronym DBMS
// Data Base Management System 

// we will be using postgress as a databse system 
// postgress is a ODBMS. there are many kinds of DBMS. postgress is an OBJECT DBMS
// when you put information and retrieve information on postgress, it will come out as objects. 

// we're going to go into postgress now. how it's structured, why it's easier to have this kind of structure. 

// postgress is nice enough to put its data as a table
// it gives usan idea
// it breaks it down further into colums and rows. postgress takes everything when you tell it a unique identifier (ID).

// will had to specify all the colum information as well as the row information, but NOT the ID. 

// we are going to model our data
// when we model our data, we use something called an ERD
// Entity Relational Diagram
// - entity: rows, columns, table in postgress
// - relational: properties and relationships 
// - diagram: map, picture, flowchart 

// when we start thinking of our data, we think about what we're trying to model
// what real world example are we trying to follow? what made the relationships between the piece of models mean.


// in postgress, ID is labeled as P.K (primary key)

// exercise

STARWARS ERD

Character
ID - pk
name - string
species - string
age - integer
height - integer
weight - integer
personality - string
vocation - string
weapon choice - string
birthplace - string

Alliance
ID - pk
organizational strength - integer
leader - string
year of existence - integer
flag color - string
national animal - string
homeworld - string
fleet strength - integer


APARTMENT

floors
ID - pk
number of floors - integer
elevator - boolean
energy efficient lighting - boolean
vending machine - boolean

apartments
ID - pk
rooms - integer
occupational capacity - integer
staff number - integer 
furnished - boolean
flooring - string
design style - string
leasing options - string

tenants
ID - pk
lowest age - integer
highest age - integer
average weight - integer
race - string
total tenant - integer
customer satisfaction - integer

ITUNE

songs
ID - pk
name - string
year of release - integer
review - string
hall of fame - boolean
genre - string
length - integer

artists
ID - pk
race - string
formation year - integer
band number - integer
age of artist - integer
net worth - integer
social media - string
hall of fame - boolean
musical influence - string
musical style - string
favorite food - string
pet peeves - string

playlists
ID - pk
type - string
frequency played - integer
genre - string
# of songs - integer


FOOTBALL ERD

TEAM
ID - pk
teamname - string
city - string
wins - integers
losses - integer

// FROM- bash, COMMAND- psql, ACTION- starts and connects to server
// FROM- psql COMMAND- help ACTION- help screen
// FROM- psql COMMAND- \h ACTION- list of SQL commands
// FROM- psql COMMAND- \? ACTION- psql commands
// FROM- psql COMMAND- \c name_db ACTION- connect to DBMS
// FROM- psql COMMAND- \l ACTION- list all  databases
// FROM- psql COMMAND- \dt ACTION- list all tables
// FROM- psql COMMAND- \q ACTION- disconnects

// schema is essentially a programming version of an ERD

// SQL commands will be ALL CAPITAL LETTERS; THAT IS THE convention
// always use lower case plural for postgress variables

// BREAK

// KYLE

// linkedin
// big piece of personal brand is linkedin
// activity feed 
// put your activity broadcast to empty on privacy
// New York, New York

// WILL

//LEARNING OBJECTIVES
// - create and drop a database from bash + SQL
// - properly seed data into our DBMS
// - C.R.U.D CREATE, READ, UPDATE, DESTROY
// - insert, select, update, destroyed

// this morning we learned how to use a diagram from a database, set up a schema.
// this afternoon, we're gonna learn how to implement schema inside a database
// now we'll get data from database, update data, and delete data in database. 

// getting rid of a table is dropping

// for sql terminal, only use single quotes for strings


// all the http verbs (post, get, put, delete) interacts with backend (inset, select, update, destroy)



// INSERT

// ** use the existing nfl_db to insert a few players
// ```INSERT INTO players (name, position, salary) VALUES ('David Brosky', 'QB', 90800000);
// INSERT INTO players (name, position, salary) VALUES ('Pavan Kat', 'DE', 123450000);
// INSERT INTO players (name, position, salary) VALUES ('Akira Wongh', 'LB', 5445900000);
// ```

// William Shaw [4:12 PM]
// DELETE

// ** use existing nfl_db to delete a few players
// ```DELETE FROM players WHERE id=1;
// DELETE FROM players WHERE name='Peyton Manning';
// DELETE FROM players WHERE position='QB'

// ```

// William Shaw [4:12 PM]
// UPDATE

// ** use existing nfl_db to update some players **


// ```UPDATE players SET name='E Cry Manning', position='BenchWarmer' WHERE name='Eli Manning';
// UPDATE players SET salary=0, position='BenchWarmer' WHERE name='Mark Sanchez'
// ```

// William Shaw [4:13 PM]
// SELECT columns FROM table;
// ```* SELECT * FROM jobs;
// * SELECT business_title FROM jobs;
// * SELECT business_title, salary_range_from, salary_range_to FROM jobs;
// ```
// **WHERE**
// ```* SELECT business_title, salary_range_from, salary_range_to FROM jobs
//   WHERE salary_range_from > 100000;
// * SELECT business_title, salary_range_from, salary_range_to FROM jobs
//   WHERE business_title = 'Java Developer';
// ```
// **LIKE**
// ```* SELECT business_title, work_location FROM jobs
//   WHERE work_location LIKE '%Brooklyn%';
// ```
// **ORDER BY**
// ```* SELECT business_title, salary_range_from, salary_range_to FROM jobs
//   WHERE salary_range_from > 100000
//   ORDER BY salary_range_from DESC;
// ```
// **LIMIT**
// ```* SELECT business_title, salary_range_from, salary_range_to FROM jobs
//   WHERE salary_range_from > 100000
//   ORDER BY salary_range_from DESC
//   LIMIT 10;
// ```
// **GROUP THINGS**
// ```* SELECT COUNT( * ) FROM jobs;
// * SELECT AVG(salary_range_from) FROM jobs;
// * SELECT AVG(salary_range_from) FROM jobs
//   WHERE LOWER(business_title) LIKE '%developer%';
// ```
// NEW MESSAGES

// William Shaw [4:14 PM]
// ```psql -d nyc_jobs_db < schema.sql
// psql -d nyc_jobs_db < seed.sql

// psql -d nfl_db < schema.sql
// psql -d nfl_db < seed.sql