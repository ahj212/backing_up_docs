// 6/18/15

// learning objectives
// - how do we solve a problem
// - where do we begin? (pseudocode)
// - what d. structuers do we choose?
// - experience and intuition in programming (problem modeling)

//exercise 

// - create a constructor named player. player should have object 
// card that has an array of values. 
// - cards that player gets should be random
// - amount of cards that player gets should be equal
// - players play game by presenting one card each face up. 
// - winning condition is higher cards. player who won takes defeated players' played cards.
// - if players have an equal value card on the round, 
//		a. affected players present three cards faced down
//		b. then present one card face up
//		c. if value of cards are not equal, round ends in favor of higher value card player
//		d. if value of cards are equal, face up one of the three face down cards.
// - play until one player has all the cards


// need deck of cards
// splitting deck by number of players (say there's two, divide deck by 2)
// play cards (face up)
//	- player a card > player b card
//  - player a card < player b card
//  - player a card = player b card 
//		i. "war" : new cards face up
//	- winning player recieves cards
//	- player a has 0 cards || player b has 0 cards

// 1. deck (array)
// 2. shuffle deck (math.random) function
//
//	3. play cards (one iteration of our game) use while loop
//	2.a see if player has cards left (conditional)
//	a. card goes face up for each player (operation on deck)
//		i. compare cards against each other using chosen data structure  ()
//			a. greater card wins, cards are added to winning player
//		ii. if the cards are the same: "war"
//			b. do i (cards in player increases)

// BREAK

// Object oreiented function context
// objects
//	- method context
//	- this keyword

// new keyword
// var foo = new BigObject();
// the code above creates a new object that has the same layout of bigObject


// LUNCH

// kyle outcome lecture

// BREAK

// what do we use this keyword for?
// 