// step 2
var userSelection = prompt("The (L) Train, The (N) Train, The (S)ix Train. Please input train selection: L, N, or S.");
alert("User has chosen: (" + userSelection + ") Train.");


// step 3 && 4
if (userSelection === 'L') {
	//alert("8th Ave, 6th Ave, Union Square, 3rd Ave, 1st Ave, Bedford Ave.");
	var userSearchL = prompt("Please input the station you are searching for:");
		if (userSearchL === '8th Ave' || userSearchL === '6th Ave' || userSearchL === 'Union Square' || userSearchL === '3rd Ave' || userSearchL === '1st Ave' || userSearchL === 'Befdford Ave') {
			alert("(L) Train reaches " + userSearchL + ".");
			//alert("Thank you.");
		} else {
			alert("(L) Train does not reach " + userSearchL + ".");
			//alert("Thank you.");
		}
} else if (userSelection === 'N') {
	//alert("Times Square, Herald Square, 28th St, 23rd St - WHAM Nexus, Union Square, 8th St.");
	var userSearchN = prompt("Please input the station you are searching for:");
		if (userSearchN === 'Times Square' || userSearchN === 'Herald Square' || userSearchN === '28th St' || userSearchN === '23rd St - WHAM Nexus' || userSearchN === 'Union Square' || userSearchN ==='8th St') {
			alert("(N) Train reaches " + userSearchN + ".");
			//alert("Thank you.");
		} else {
			alert("(N) Train does not reach " + userSearchN + ".");
			//alert("Thank you.");
		}
} else if (userSelection === 'S') {
	//alert("Grand Central, 33rd St, 23rd St, Union Square, Astor Place.");
	var userSearchS = prompt("Please input the station you are searching for:");
		if (userSearchS === 'Grand Central' || userSearchS === '33rd St' || userSearchS === '23rd St' || userSearchS === 'Union Square' || userSearchS === 'Astor Place')  {
			alert("(S) train reaches " + userSearchS + ".");
			//alert("Thank you.");
		} else {
			alert("(S) Train does not reach " + userSearchS + ".");
			//alert("Thank you.");
		}
	alert("Thank you.");
}

