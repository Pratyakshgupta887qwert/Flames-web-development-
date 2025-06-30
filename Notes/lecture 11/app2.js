// javascript#4




// Arrays



let greeting = function(){
    console.log("Hi");
}

let a = [123,"Sharad",true,greeting];

console.log(a[2],a[1],a[3]());
// in 3rd index we will get : undefinned because the return function is their in the function.



// Nested array

let aa=[1,2,3,4,[50,[500,600],70],8,9];
console.log(a[4])
// by this the output will be undefined so we will use variable for it
let r=aa[4];
console.log(r);
// by this you can easly see the output
let aaa=aa[4,1];
console.log(aaa);

// this above example is little bit complex so make it gpt understand this.......................................

// this will done by other thing that : sharad is 0 , then purple [] is total 1 inside that purple [] we will agaiin do indexing this slight complex make this gpt.

let ar = ["sharad",["Lokesh",["Mohit",["Dk Bhaiya ke girlfriend"],"Rohit"],"Rahul","Adwait"]];
console.log(ar);




// Object : Every key is stored as a string  || coleection key and objects


let obj = {
    name:"Sharad",
    age:32,
    canDrive:true,
    address:{
        state:"UP",
        city:"Mathura"
    },
    marks:[86,90],
    say:function(){
        console.log("Hi");
    }
}

// their are 2 ways to access object: 1) dot notation

console.log(obj.name);




let val = "name";



console.log(obj["address"]["state"]);


// let arr = [1,2,3,4,5,6];


// Push 

// console.log(arr.push(7,8,9,10));


// Pop

// console.log(arr.pop(4,2,234,234,234));
// console.log(arr);


// shift 

// console.log(arr.shift(234,324,324));


// Unshift
// let arr = [1,2,3,4,5,6];
// console.log(arr.unshift(-2,-1,0));
// console.log(arr);


// Two for Loops. (for in-- object )  (for of - array) 

//  let obj = {
//     name:"Sharad",
//     age:32,
//     canDrive:true,
//     address:{
//         state:"UP",
//         city:"Mathura"
//     },
//     marks:[86,90],
//     say:function(){
//         console.log("Hi");
//     }
// }

// for(let val in obj){
//     // console.log(val);
//     console.log(obj[val]);
// }
// let arr = [6,5,"Sharad",3,2,1];

// for(let val of arr){
//     console.log(arr[val]);
// }

// Map , Filter , Reduce


// let arr = [6,5,4,3,2,1];

// let myfn = function(val,idx){
//         // Kaam
//         let n = (val*2)+1;
//         return 1;
// }

// let newarr = arr.map(myfn)

// 

// console.log(newarr);
// console.log(arr);

// let arr = [6,5,4,3,2,1];


// let newarr = arr.filter(function(val,idx){
//     // kaam 
//     return val%2===0;
// });

// console.log(newarr);
// console.log(arr);
let arr = [6,5,21,3,2,1];
let answer = arr.reduce(function(prev,curr){
        let val  = prev;
        if(val<curr){
            val = curr
        }
        return val;
});
// 6 +5

// 11 +4

// 15 +3
console.log(answer);