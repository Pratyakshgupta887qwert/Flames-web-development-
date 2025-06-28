// BASICS OF JAVASCRIPT



//input
let u=prompt("hi what is your name");
console.log(u);


// alerts
alert("this is my alert ");


//data types
let s=1;
let v="hi";
let g=true;
console.log(s+v+g);



//declarative : variabes : let , var , const

// difference between var and let : you can not make same variable name again when it is created already but in var you can create the name again even you have created it first 
// ex:
// var s=10;
// var s=20;
//output will be : console.log(s);      --> 20

// but the samething is not availabe for let : you can not redeclare in let

// we do not use var now days

// const : one the item is store then it can not be store again .






// condition

let looks="good";
looks = "ok";
looks = "bad";
if(looks === "goods"){
    console.log("bahi aaj sahi lag raha hai.");
}
else if(looks === "ok"){
    console.log("ok vala statement hai ");
}
else if(looks === "bad"){
    console.log("bad vala statement hai ");
}
else{
    console.log("bahi fir achaa nahi lag raha hai");
}




// operator : arithmetic operator , logical , bitwise

// if their is no output then it will return the boolean output

// null , empty string , undefined , NAN(not a number) ,0 : flase 
// rest all things will return : true



// String Concatination
// First
let a = 'Sharad'
// Second
let b = "Sharad"

let first = "Sharad"
let last  = "Chauhan"

let fullName = first +" "+ last;

console.log(fullName);

// Third Way

let middle = "singh";

let c= `Sharad ${middle} Chauhan`;

console.log(c);



// Functions 

// Four -  Normal fn, parametrised, Default paramaterised,arrow function,construictor fun

//simple function
function sayHi(){

    console.log("Hi Sharad");

}

sayHi();
// Parametrised 
function sayHi(say){

    console.log(say);

}

sayHi("Hi Mohit");


function sayHi(say,num){

    console.log(say+" "+num);

    return say+num;

}

let res = sayHi("Hi Mohit",100);

console.log(res);

function sayHi(say=20,num){

    console.log(say);
    console.log(num);

    console.log(say+num);

}

sayHi();

// Power of Function


let greetings =function (say){

    console.log(say);

}

greetings("Good moring");




// Arrays 
// Continuous
// hetroginious

let aa =[23,"sharad",true,greetings];
let cc = [];
let bb = new Array(23,"sharad",true,greetings);

// push , pop, shift, unshift
