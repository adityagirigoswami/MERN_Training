let arr = [10,20,30,40,50,60];
let filteredArr = arr.filter((item)=>item!=30)
console.log(filteredArr);


let find = arr.find((item)=>item>40);
console.log(find);


let findINDEX = arr.findIndex((item)=>item>40);
console.log(findINDEX);

let arr1 = [11,20,30,40,50,60];
let hasEVEN = arr1.every((item)=>item%2===0)
console.log(hasEVEN);

console.log(arr.every((item)=>item%2===0));


let obj = {     
    firstname :"aditya",
    lastname :"giri"

}

let keys = Object.keys(obj)
console.log(keys);

let entries = Object.entries(obj)
console.log(entries);

str = "aditya giri goswami"
let newstrr = str.repeat(2);
console.log(newstrr);


function generateOTP(length = 4) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a random digit between 0-9
    }
    return otp;
}

const otp = generateOTP();
console.log("Your OTP is: " + otp);