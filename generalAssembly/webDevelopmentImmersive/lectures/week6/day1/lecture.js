// 7/13/15

// overview of this week
// monday we will be building an app from scratch with david
// tuesday we will learn relationship
// wednesday/thurs we will compartmentalize 
// friday start of new project

// DataBase Management System (DBMS) is a software that handles storage, retrieval, and updating of data in the computer system

// Create Read Update Destroy (CRUD) 
// Post, Get, Put, Delete is the http verb of CRUD

// how is postgress laid out
// by rows and columns. each row is laid out by the id, each column has specific parameters it has to meet (if its requirement is a string, has to be string)

// what is an ERD?
// Entity Relational Diagram

// users
// ------------
// id - psk
// name - string
// email - string
// age - integer
// pass - string

// what is a schema? 

// CREATE TABLE users(
	// ID SERIAL PRIMARY KEY;
	// NAME TEXT,
	// EMAIL TEXT,
	// AGE INTEGER,
	// PASSWORD TEXT
// );

// req.body and req.query, what is the difference?
// - when you make a post request with a form, you send a body request. it keeps all the information in.  
// - req.query are parameters inside a url that is typically associated with a get request. query you use it on a get request
// - node does not allow us to access body directly, so we have to use a module. 
// - for username and password, or like a credit card information you would use a post to keep that information hidden in the body. 

// how would you add a new user inside the schema we used?
// INSERT INTO users (name, email, age, pass) VALUES ('adam', '@', 31, 'pee')

// - notice how strings are put in quotes and integers are not

// how would you update adam's age from 31 to 99?
// UPDATE users SET (age) = 99 WHERE name = "adam";

// what is handlebars?
// - handlebars is a templating engine for express that allows you to create semantic templates

// DAVID

// - practice creating and using databases
// - practice connecting to a DB using express
// - build an app from start to finish

// inventory manager
// morning, raw sql, command line (using pg)
// after lunch, port it to express
// there's going to be multiple checkpoints throughout the day
// 



// createdb is how you create database in terminal

// psql -d inventory_manager_db < schema.sql 
// this will link schema to db

// seed.sql is where you put the data in 

// psql -d inventory_manager_db < seed.sql

// if you fucked up the schema with a syntax error, just fix the schema file, reload the schema into psql using psql -d inventory_manager_db < schema.sql and then reseed with psql -d inventory_manager_db < seed.sql


// \c inventory_manager_db connects you to inventory_manager_db database
// SELECT * FROM employees selects all the employees data table

// remember, put a semi-colon after a command or your shit's not gonna run.

// module pg is just a way we can connect postgres from node

// after setting up the pg stuff in server.js, if you do "node server.js get products", you should get the products in the form of objects 


// node server.js post products 'Kindle' 2, 100, 'Amazon'











