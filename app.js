
/**
 * New node file
 */
//console.log("MADHAvi ");

/**
Basic Concepts 
**/

/*var person = {
		firstname:"Madhavi ",
		lastname:"Latha ",
		age: 46
		
			
};
console.log(person);

function addNumbers(a,b) {
	return a+b;
}
console.log(addNumbers(5,2));

var printBacon = function(){
	
	console.log(" Basic Concepts Done");
};

printBacon();

setTimeout(printBacon, 5000);*/

/**
Handling Multiple Requests  


**/
/*console.log("Handling Multiple Requests  ******************************************************");


function placeOrder(orderNumber){
	console.log("customer Order", orderNumber);
	cookAndDeliver(function(){
		console.log("Delivered", orderNumber);
	});
	
}

function cookAndDeliver(callback){
	
	setTimeout(callback, 5000);
}

placeOrder(1);

placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6); */




/**
Referencing Objects 


**/

/*console.log("Referencing Objects ***********************************************");

var person= {
		favFood:"chapathi",
	favMovie:"ABC"
};

var per=person;
per.favFood="Rice";
per.favMovie="XYZ";

console.log("Person "+person.favFood);
console.log("Person "+person.favMovie);

console.log(19==19);
console.log(19===19);

console.log(19=="19");
console.log(19==="19"); */



/**
This 


**/
/*
console.log("This  ***********************************************");

var person={
		printFirstName: function() {
			console.log("Madhavi Yeduguri ");
			console.log(this===person);
		}
}


person.printFirstName();


function doSomrthingWorth(){
	
	console.log("I am very valuable");
	console.log(this===global);
	
}

doSomrthingWorth();*/

/**
prototype


**/

console.log("prototype  ***********************************************");

function User(){
	this.name="";
	this.life=100;
	this.givelife=function givelife(targetplayer){
		targetplayer.life+=1;
		console.log(this.name+"gave 1 life   "+targetplayer.name);
	}
}

var person=new User();
var person1=new User();

person.name="Madhavi";
person1.name="latha";

person.givelife(person1);

console.log("person  "+person.life);
console.log("person1  "+person1.life);


User.prototype.uppercut=function uppercut(targetplayer){
	targetplayer.life-=3;
	console.log(this.name+"just uppercut   "+targetplayer.name);
}


person1.uppercut(person);

console.log("person  "+person.life);
console.log("person1  "+person1.life);

User.prototype.magic=60;

console.log("person magic "+person.magic);
console.log("person1  "+person1.magic);