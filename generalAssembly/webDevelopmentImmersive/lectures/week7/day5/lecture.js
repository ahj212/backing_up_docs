// 7/24/15

// AKIRA

// RUBY CLASS
// - MAKING OBJECTS
// - SETTERS AND GETTERS

// OBJECTS HAVE PROPERTIES + METHODS

// RUBY CLASS IS TO SPECIFY AN OBJECT YOU ARE TRYING TO CREATE 
// NAME OF THE CLASS SHOULD START WITH AN UPPERCASE LETTER (ITS CONVENTION FOLLOW IT)

class Letterpress

	def initialize (title, content)
		@title = title #the @variable name are the data that lives inside the class
		@content = content
	end
	
	def title=(title) #this allows us to change the title behavior with pry command var_name.title=("new behavior")
		@title = title
	end

	def content=(content)
		@content = content
	end

	def title #can call title with this now with pry command var_name.title
		return @title
	end

	def content
		return @content
	end

end



Class.new => initialize


Letterpress.new("argument1", "argument2") 



// BEFORE WE HAVE AN OBJECT THAT WE CAN USE, WE NEED A CLASS
// THERE ARE SUCH A THING CALLED RUBY CLASS AND A THING CALLED RUBY OBJECTS
// RUBY CLASS IS WHAT MAKES RUBY OBJECTS 
// ALL YOUR LOGIC FOR THE MOST PART WILL LIVE INSIDE CLASSES

// JUST LIKE YOU WROTE A LOT OF ROUTES IN JAVASCRIPT EXPRESS, YOU WILL WRITE A LOT OF CLASSES IN RUBY/RAILS


EXERCISE
Create a person class for your favourite character in any media

Look at letterpress.rb and write a new class for yourself
Give yourself a name, an age, a catch-phrase, and two other attributes about them.
Then give them an ability (method) to tell us about themselves!

class Favperson

	def initialize (name, age, catchphrase, height, weight)
		@name = name
		@age = age
		@catchphrase = catchphrase
		@height = height
		@weight = weight
	end


	def name=(name)
		@name = name
	end

	def name
		return @name
	end


	def age=(age)
		@age = age
	end

	def age
		return @age
	end


	def catchphrase=(catchphrase)
		@catchphrase = catchphrase
	end

	def catchphrase
		return @catchphrase
	end


	def height=(height)
		@height = height
	end

	def height
		return @height
	end


	def weight=(weight)
		@weight = weight
	end

	def weight
		return @weight
	end

	def talk
		puts "Hello, my name is #{@name}. I am #{@age} old and my catchphrase is #{@catchphrase}. I am #{@height} tall and I weight #{@weight} pounds."
		
	end

end


// EXERCISE

Create a Movies Class on your own

The Movie class should have the following attributes using getters and setters (mutators):
  title
  year
  include_year (bool)
These will be instance variables (the @my_variable = 42 syntax).
You will also include one method (aka a behavior), named full_title()
If include_year = true, full_title() should include the year released in what is returned. Otherwise, it should only return the title of the movie.
Instantiate this class using MyClass.new() with the title and year arguments.
Change the title and call the full_title() method
Bonus: write a method that returns the number of years since the movie was released

Bonus 2: add a "running_time" attribute to your class. Then write a method that tells when you would finish watching the movie if you started it now

class MovieClass
	def initialize (title, year, include_year)
		@title = title
		@year = year
		@include_year = include_year
	end

	def title=(title)
		@title = title
	end

	def title
		return @title
	end

	def year=(year)
		@year = year
	end

	def year
		return @year
	end

	def include_year
		return @include_year
	end

	def full_title()
		if @include_year == true
			return "Movie title: #{@title} // Movie year: #{year}"
		else 
			return "Movie title: #{@title}"
		end
	end

end



to require files to main.rb, do  require_relative 'file location' IN SUBLIME

	word.rb = class word
	game.rb = class game
	main.rb  require_relative ('./word.rb')
					 require_relative ('./game.rb')



class WORD

	attr_reader :letters
	
	def initialize (word)
		@letters = []
		word.split("").each do |letter|
			@letters.push({
				letter: letter,
				hidden: true
				})
		end
	end

end


