let date = new Date();

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.toDateString());
console.log(date.toTimeString());

console.log(date.toString());

let arr = [10,20,30,40,50,60]

let [num1 , num2] = arr;       
console.log(num1, num2);

let obj = {
    firstName : "Rahul",
    age : 25
}

let { firstName } = obj;
console.log(firstName);

let obj1 = {};

obj1.firstName = "vinay"
console.log(obj1);

let {firstName:a , address} = obj;
console.log(a);

let arr1 = [10,20,30]
let arr2 = [...arr1]
arr2.push(1000)
console.log(arr2);
console.log(arr1);

