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


