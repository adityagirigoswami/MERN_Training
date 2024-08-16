console.log("hello world");

// alert("techno");

var firstterm  =90;

console.log(firstterm);

// primitive types
    // String,number,boolean,undefined

// reference or object type data type - 
    // array , object , date , null

var firstvar = new Date()
console.log(firstvar);
console.log(typeof(firstvar));

var secondvar = [20,30,"shivaay",true,undefined];
console.log(secondvar)
console.log(typeof(secondvar));

var thirdvar={
    firstname :  "aditya",    
    lastname : "goswami"
};
console.log(thirdvar);
console.log(typeof(thirdvar));


// var , let , const

let num2 = 20;
// let num2 = 50; will give error
// var num2 = 70  will give error
console.log(num2)

// variable defined with var can be redeclared or can be re assigned

const num3 = 100;
// num3 = 450;   can not reassign in const
console.log(num3);


// operators

// arithmetic operator

 // + , - , * , / , % , ** , ++ , --

 let a = 10;
 let b = 20;

 

 let add = a+b
 console.log(add);
 console.log(5+"5")
 console.log("shubham" + 55)
 console.log("shubham" - 55)

 let str = "10"
 console.log(+str)
 console.log(typeof(+str))

 let isloggedin = true;
 let isadmin = false;
 console.log("is the user logged in and an admin" ,isloggedin && isadmin);

