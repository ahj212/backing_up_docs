#7/27/2015

#SLIPS

#javascript, how would you make a function out of this?

add (5)(2) => 7

var add = function (num) {
	return function (num2) {
		num + num2
	}
}

#jquery methods

.eq : Reduce the set of matched elements to the one at the specified index.
.append :  Insert content, specified by the parameter, to the end of each element in the set of matched elements.
.prepend : Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

#what is a DOM

Document Object Model where you can use jquery to alter the elements in the html to make a website dynamic
DOM is manipulated through javascript
we can find the elements of html through css and jquery

#please explain .each in ruby

array = [1, 2, 3, 4, 5]

array.each do |i|
	puts i
end

array.each { |i| puts i }

#please explain .map in ruby
same thing as .each, but actually changes the original value

array.map do |i|
	puts i
end

# define what OOP is
object oriented programming
we can share methods with other related classes
lets say you have a string "foo"
you can use "foo".split("") method

# what is a class in ruby?
class is sort of like a printing press that allows us to create new, custom objects in ruby

class User
	def initialize (first_name, last_name)
		@first_name = first_name
		@last_name = last_name
	end

	def greetings
		puts "#{first_name} #{last_name} says hey!"
	end
end

#make an ajax request that has .done and .fail

$.get('/pizza').done
	alert("Success!");

$.get('/pizza').fail
	alert("Failure!");

#what is a symbol
:symbol

#in ruby, for the most part, we use symbols in hashes, symbols take up one spot in memory
# if you use string as a key, a string will take two spaces in memory

#older way of doing ruby is like this :symbol => value
# => is a hashrocket

#newer way of doing it is like this symbol : value

#what are some of the differences between javascript and ruby
#ruby is a scripting language and runs on command prompt
#javascript is a language specifically built for the web browser
#for instance, javascript can communicate with DOM whereas ruby cannot
#ruby is used for backend stuff, whereas javascript can be used for both

#what is the differences between =, ==, and === in javascript
# = sets a value
# == just compares the value "5" == 5 will be true
# === compares the datatype and the value "5" == 5 will be false

will

Model View Controller model (MVC MODEL)

first we have a browser

	server
	browser

now we have a Controller
#controller goes to two spots, the model and the views
#you will have a specific controller for every model and views
#so let's say you hit users, the controller will say "okay, I need to go to the user model and the user views"
once the controller retrieves all the appropriate data from model and views, it compiles all that information and returns all it to the browser


A. Model

model goes to the db, and gives that information to the controller

B. Views

views basically gets all the relevant rendering, and returns that information to the controller
to see anything, you need view

#every application should have its own database


ruby is a scripting language, rails is a framework that organizes ruby and allows you to interact with the browser


RESEARCH MODEL

MODEL IS WHAT RETRIEVES INFORMATION FROM THE database
	- STORES DATA THAT IT RETRIEVED TO Controller
	- DATA IS DISPLAYED IN VIEW 
	- IF THERE IS CHANGE IN DATA, IT IS UPDATED BY CONTROLLER
	- NO KNOWLEDGE OF USER INTERFACE, SO IT CAN BE REUSED

A model stores data that it retrieved to the controller and displayed in the view. Whenever there is a change to the data it is updated by the controller.

RUBY HAS A BUILT IN VERSION OF ORM
(ORM IS THE DB.JS THAT WILLIAM MADE)
	-ORM ALLOWS OBJECTS TO BE RETRIEVED FROM DATABASE WITHOUT WRITING SQL STATEMENTS DIRECTLY

**IMPORTANT TO FOLLOW CONVENTION**

MODEL NAMING CONVENTION

model - camelcase with capitalized first letter
table/schema - snakecase plural

MODEL/CLASS 	TABLE/SCHEMA 
Article			articles 
LineItem		line_items
Deer			deers

ACTIVE MODEL IS A GEM (addon that you put into ruby)

CREATING ACTIVE RECORD MODEL 

- SUBCLASS THE ACTIVE RECORD: :BASE CLASS

e.g. 

class Product < ActiveRecord: :Base
end

- THIS CREATES THE PRODUCT MODEL

active record is an ORM
model is a ruby class

default database for ruby on rails is SQL lite 
most of rake tasks involves the database


go through folder structure of a rails file 
- theres like 4 folders that youll need
-app 
	a. assets - holds javascript, images, css 
	b. controllers - holds controller. comes with one built in, which is the application controller. every controller you write will inherit from the application controller
	c. helpers - for helper functions. helpers are functions that that you use a lot. for example, if you have user authentication
	d. mailers - for email structure
	e. models - all of your models
	f. views - all your views
		1. has layouts folder 

thats the app folder, a lot of time you will be working in your app folder

- bin 
	- bundle - command line command
	- rails
	- rake
	- setup
	- sprig

- config
	- environments
	- initializer
	- locals
	- db-lib
	- log
	- public
	- test
	- vendor

- config has two biggest files, database, and routes

- db : basically any sort of data that lives inside your database, so schema and seed and migrations folder 


- public - holds all the error pages for your rails app 

- test - test is where you will write your test scripts 

- vendor 
	- assets
	-javascripts
	-stylesheets 



BREAK

CREATING NEW RAILS APP

ON TERMINAL

#create new rails app
#note the directory you're in will matter
rails new name_of_app -- database=postgresql

#creates db
rake db:create 


dropdb todoly_app_test

dropdb todoly_app_development

rake db:create

rails g migration CreateItems

#terminal record
# rails g migration CreateItems
#       invoke  active_record
#       create    db/migrate/20150727155559_create_items.rb
# that bigass number is a timestamp

#this creates a table called Items
rake db:migrate

#this seeds your db
rake db:seed

#gives you an error, uninitialized constant Item
#you're trying to access a model that you haven't created yet, so let's make a model

#in app/models/ create file called item.rb
#copy and paste this code in

class Item < ActiveRecord::Base

end

#now that we have a model file, we can do the rake db:seed and it will work
rake db:seed


#this is how you connect to the database
psql todoly_app_development
OR
rails dbconsole

#check if your database is properly seeded
select * from items;

#naming is super important for files for rails. DONT FUCK IT UP
#naming of file is lowercase snakecase
#to name a class, it's capitalized camelcase
#in app/controllers folder, create application_controller.rb 
#copy and paste this in 

class ItemsController < ApplicationController



end

#ruby is convention over configuration


#let's add an index route. inside your application_controller.rb, type this
# your class ItemController should look like this now

class ItemsController < ApplicationController

	def index
		@items = Item.all
	end

end

# inside app/config/routes.rb  , copy pasta this in

Rails.application.routes.draw do
  resources :items
end

#now in terminal, do this
rake routes 

#now let's start our server
rails s
#default for rails listening port's 3000


# LUNCH

# WE ARE SEEING RAIL AS A WHOLE
# TOMORROW ACTIVE RECORD AND MIGRATIONS
# WED TUESDAY CONTROLLER

# VIEWS IS THE LAST PART WE HAVENT DONE YET

#INSIDE APP/VIEWS, make folder called items

rake routes

# NOTE PATCH AND PUT IS THE SAME THING
# CAVEAT SOME BROWSERS ONLY SUPPORT PATCH, SOME ONLY SUPPORT PUT

#LET'S MAKE A VIEW
#INSIDE /APP/VIEWS/ITEMS FOLDER, LET'S NAME A NEW FILE

index.html.rb

#NOTE RAILS HAS A BUILT IN VIEWS
#BTW NEXTWEEK WE'RE DOING BACKBONE

#CLOWN HATS

#THIS WILL PRINT WHATEVER YOU HAVE THERE  ON THE SCREEN, DISPLAY
<%= %> 

IF JUST I WANT TO EXECUTE RUBY CODES, I JUST USE THIS CLOWN HAT, DONT DISPLAY
<% %>


#What's the diff b/w server side rendering and client side rendering?
#server side: my conroller is going back to views folder and picking out a view that associates with the route you pick, and putting all the html shit on the browser

#client side, you are just going to the database for information: YOU ARE NOT LOOKING FOR VIEW: your view is being rendered by jquery, backbone, whatevs. 

#we did server side rendering with node and express and handlebars

#what is params? parameters
# the way will looks at params is, they are parameters, 100%
# params is a bucket that a user can put whatever shit they want
# put it all in right now and I will sort it out later
# params is equivalent to ruby as req.body 

#do bundle install on terminal if you put a new gem inside gemfile




#typically for the show route, you'll add links
#typically for show route, you'll also have a delete link

#will's sublime text color scheme Tomorrow

Team.create({
	name: "Orange Mocha Fraps",
	photo_url: "http://i44.tinypic.com/nnqi5u.jpg",
	hometown: "New York",
	number_of_championship: 3
	})

Team.create({
	name: "The Gilmores",
	photo_url: "http://i44.tinypic.com/3013c75.jpg",
	hometown: "Philly",
	number_of_championship: 5
	})

Team.create({
	name: "The NFL",
	photo_url: "http://i50.tinypic.com/k35ceb.jpg",
	hometown: "Murica",
	number_of_championship: 100
	})

Team.create({
	name: "Pembrokes",
	photo_url: "http://i49.tinypic.com/68zy8y.jpg",
	hometown: "Liverpool",
	number_of_championship: 2
	})

