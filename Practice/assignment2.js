// Sol:-1
let firstName = 'aditya ';
let lastName = 'goswami';
fullName = firstName + lastName;
console.log(fullName);

// Sol:-2
let n = prompt();
if(n > 0) {
    console.log("Positive");
}
else if(n == 0) {
    console.log("Zero");
}
else {
    console.log("Negative");
}

// Sol:-3
for(let i=1; i<=10; i++) {
    console.log(i);
}

// Sol:-4
function greet (name) {
    console.log("\"Hello,"+name+"!\"");
}
greet("aditya");

// Sol:-5
let arr = [10,20,30,40,50];
let sum = 0;
for (let i = 0; i < arr.length; i++ ) {
  sum += arr[i];
}
console.log(sum);