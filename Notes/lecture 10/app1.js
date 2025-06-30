

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

// Four type of function  -  Normal fn, parametrised fn, Default paramaterised, arrow function, construictor fun.

//simple function  : it is just a simple function which have only single task to do like printing , sum , multipication .. etc .
function sayHi(){

    console.log("Hi Sharad");

}

sayHi();

// Parametrised  : it is function which have a 1 parameter into it 
function sayHi(say){

    console.log(say);

}

sayHi("Hi Mohit");




// if the function does not returning something it means the it will give the output undefined  
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

// NAN : not a number
// higher order function , callback function






// Power of Function

//here the function is defined under the variable name : greetings 

let greetings = function (say){

    console.log(say);

}

greetings("Good moring");

// higherOrder function , callback function.


// Arrays : array is Continuous + hetroginious + linear way.
// it has zero indexing , array star with 0 index.

let aa =[23,"sharad",true,greetings];
let cc = [];
let bb = new Array(23,"sharad",true,greetings);

// push : adding data to array   ||  pop : deleting data from array
// push , pop, shift, unshift