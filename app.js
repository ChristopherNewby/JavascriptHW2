//5 variables that dont assign a value
var cats;
var dogs;
var birds;
var fish;
var pigs;

//5 variables and assign them numbers
var numDogs = 2;
var numCats = 3;
var numBirds = 7;
var numFish = 0;
var numPigs = 1;

//5 variables and assign them to strings
var catName = 'Oscar';
var dogName = 'Buddy';
var birdName = 'Norman';
var fishName = 'Goldy';
var pigName = 'Babe';

//5 variables and assign them to booleans
var isCatDead = true;
var isDogDead = false;
var isBirdDead = true;
var isFishDead = false;
var isPigDead = false;

//declare two variables and assign them 
//numbers then sum them on another variable

var int1 = 10;
var int2 = 30;
var int3 = int1 + int2;

//declare a boolean variable. then write an if statement to make it t/f
var isThisTrue = false;

if (isThisTrue) {
	console.log('This statement is true.');
}
else
{
	console.log('This statement is false.');
}

//write a loop that runs 10 times
for (var i = 9; i >= 0; i--){
	console.log(i);
} 

//adventurer mode #1
var num = 3;

switch (num) {
	case 1:
	console.log('A');
	break;

	case 2:
	console.log('B');
	break;

	case 3:
	console.log('C');
	break;

	case 4:
	console.log('D');
	break;

	default:
	console.log('The number is unknown.');

}

//AdventureMode #2
var isHot = true;
var count = 0;

while (isHot){

	if (count >= 10) {
		isHot = false
	}
	count = count + 1;
	console.log(isHot);		
}


//AdventureMode #3
//true compares

var num5 = 5;
var num6 = 6;

if (num5 != num6) {
	console.log(true);
}

if (num5 > num6) {
	console.log(true);
}

if (num6 < num5) {
	console.log(true);
}
 
 //false compares
 if (num5 === num6) {
	console.log(false);
}

if (num5 == num6) {
	console.log(false);
}

if (num5 > num6) {
	console.log(false);
}

if (num5 < num6) {
	console.log(false);
}

//AdventureMode #4
var isCold = false;

if (isCold) {
	isCold = true;
}
console.log(isCold);