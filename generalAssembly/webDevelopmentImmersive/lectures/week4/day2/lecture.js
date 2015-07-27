// 6/30/15
// AKIRA

// today we talk about servers and HTTP (Hyper Text Transfer Protocol)
// - explain request response
// - IP addresses and port #
// - HTTP as structured computer -> computer communication
// - parts of a request/response 

// inside the chrome console is a network tab
// - network tab tells you what's going on with your request

// header is basically like an envelope
// you give a server an envelope, the server puts something in the envelope for you, and then
// you can open it back in your website. 

// let's talk about IP
// DNS (Domain Name Server) is a system where we translate the domain of a server 
// to its actual IP address.
// every computer on the internet is actually a number
// you have to go to the website's DNS first to ge the website's ip address. 

// actual representation of a computer in the internet is the remote address. 

// port number: we can think of it as an address of the apartment in a building.

// node is basically javascript that you write on the server 
// a server is a computer

// what is a URL?
//  google.com/cat pic

// LUNCH

// WILL

// learning objectives
// - create a webserver using node.js and express
// - describe npm
// - describe node
// - describe require
// - describe the proper steps to set up a node.je/express server
// - use express to serve information based on a url

// what is the idea for node? 
// - node is an application built in javascript that can speak to both your computer and other computers
// - it's a server

// what is an npm?
// - Node Package Manager
// - when you install a package, you know they are called modulus; in ruby they are called gem
// - when you install a package, npm will properly place it for your node
// - it's a package Manager

// let's go over the steps to go over the node end

// keep in mind that when you do 

app.get('/about', function (request, response) {
  //body
});

// for the parameters, it's ALWAYS request first, then reponse. the order matters a lot


// first thing to do when making server
// make a directory
// inside that directoy, do npm init
// on entry point, type server.js

// next, you have to do  npm install --save express
// you get a node_module directory from it

// now we do touch server.js

// what morgan does is it logs the route that's being hit 
// it consolelogs it for you

