// 7/23/15

// WILL

// LEARNING OBJECTIVES
// - COMPARE AND CONTRAST RUBY + JS DATATYPES
// - EXPLAIN A SYMBOL IN RUBY
// - EXPLAIN WHAT A HASH IS IN RUBY
// - COMPARE AND CONTRAST RUBY + JS SYNTAX
// - COMPARE AND CONTRAST RUBY AND JS CONTROL FLOW
// - COMPARE AND CONTRAST RUBY AND JS METHODS/FUNCTIONS
// - EXPLAIN HOW HOW VARIABLE SCOPE WORKS IN RUBY

// THE LAST STATEMENT OF METHODS IN RUBY WILL RETURN SOMETHING; RUBY IMPLICITLY RETURNS ALL THE TIME
// RUBY IS SYNCHRONOUS
// RUBY IS *VERY* GOOD FOR BACKENDS

// JAVASCRIPT WAS BUILT TO BE FOR FRONT END
// - ONLY RECENTLY HAS JS BEEN COERCED TO BE BACKEND

// WHAT IS RUBY USED FOR?
// - BACKEND
// - IT'S USED AS AN API FOR BACKEND POSSIBILY
// - CONNECT TO DATABASE VIA SCRIPTING
// - RUBY IS BUILT FOR COMMAND LINE INTERFACES
// - THINGS LIKE SINNATRA, ON RAILS
// - RUBY WILL DO SERVER SIDE RENDERING LIKE EXPRESS, BUT FOR SINGLE PAGE, YOU HAVE TO USE JS

// COMPARE AND CONTRAST

// JS

// LUNCH

// KYLE

// EVERY MONDAY, KYLE DOES A WORKSHOP ON RESUME 4:30~6:30 MON 2E

// GETTING EVERYONE'S RESUME AT LEAST TO THE SAME POINT

// 1. THERE'S NO ONE SIZE FIT ALL RESUME
// 2. IT'S A PERSONAL HIGHLIGHT
// 3. RESUME WILL NOT GET YOU A JOB

// KYLE'S PHILOSOPHY

// 1. CONSISTENCY
// 2. ACTIVE VOICE
// 3. REFERENCES (UNNECESSARY AS YOU CAN GIVE REFERENCES ON REQUEST)
// 4. EXPERIENCE > EDUCATION

// COMMENT MAJOR FUNCTIONS AND MAJOR VARIABLES
// SEMANTICLY NAMED VARIABLES
// README FILE

// WILL
// - COMPARE AND CONTRAST RUBY AND JS FUNCTIONS/METHODS
// - EXPLAIN VARIABLE SCOPE IN RUBY
// - MAKE USE OF BUILT IN ITERATORS TO ITERATE EVERY VALUES OF AN ARRAY
// A. EACH
// B. MAP
// C. SELECT
// D. REJECT
// E. REDUCE

// FUNCTIONS, REUSABLE BLOCKS OF CODE THAT CAN DO AN ACTION
// WE DON'T WRITE FUNCTIONS IN RUBY
// WE WRITE METHOD

// GO OVER SCOPE

// david = "DAVID"

// def say_hi_david
// 	"hi #{david}"
// end

// IF david=DAVID ISN'T INSIDE METHOD, IT DOESN'T EXIST IN THE METHOD


// ITERATORS
// MOST COMMON ITERATORS ARE
// - EACH
// - MAP
// - SELECT
// - REJECT
// - REDUCE

// BLOCKS ARE DEFINED BY THE FOLLOWING

// DO
	// ANYTHING INSIDE HERE IS CONSIDERED A BLOCK
// END


// LET'S GO OVER WHAT EACH ITERATOR DOES
// EACH GOES THROUGH EACH ITEM OF AN ARRAY
// DOES WHATEVER YOU WANT TO DO
// BUT AT THE END OF THE EACH BLOCK, IT RETURNS THE ORIGINAL ARRAY
// THE RETURN OF THIS EACH WILL BE THE ORIGINAL ARRAY
// x = "help hello holla hi"
// x.split.each{|word| puts word.capitalize}

// - EACH LOOPS OVER ARRAY, RETURN ORIGINAL ARRAY
// - MAP LOOPS OVER ARRAY, RETURN NEW ARRAY FROM THE RESULT OF CODE BLOCK
// - SELECT WORKS ON A CONDITION; SELECT AND RETURN TO YOU ALL THE THINGS THAT ARE TRUE
// - REJECT WORKS ON A CONDITION, REJECT AND RETURNS TO YOU ALL THE THINGS THAT ARE FALSE
// - REDUCE 

// EVERYTHING IN RUBY IS AN OBJECT

// instead of putting a ton of setters and getters

attr_accessor
