let count = 30;


if(count == 20){
    console.log("Count is equal to 20");
}
else if(count > 20){
    console.log("Count is greater than 20");
    }
else{
    console.log("Count is less than 20");
}


// let admin = prompt("enter name of user");
// let password = +prompt("enter the password");
// if(admin == "admin" && password === 123){
//     console.log("Welcome Admin");
//     }else{
//         console.log("Invalid username or password");
//         }

// if(admin === "admin"){
//     if(password === 123){
//         console.log("Welcome Admin");
//     }
//     else{
//         console.log("Invalid password");
//         }
// }


let daynumber = 1;
let dayName;

switch(daynumber){
    case 1: 
       dayName = "Monday";
    case 2:
        dayName = "Tuesday";
        break;
        case 3:
            dayName = "Wednesday";
            break;
            case 4:
                dayName = "Thursday";
                break;
                case 5:
                    dayName = "Friday";
                    break;
                    case 6:
                        dayName = "Saturday";
                        break;
                        case 7:
                            dayName = "Sunday";
                            break;
                            default:
                                dayName = "Invalid day";
                                break;
                                }
            
console.log(dayName)


function sum(){
    console.log("this is sum function");
}

sum();

let obj = {
    "firstName" : "Shubham",
    "lastName" : "Jain"
}

obj.section = "F50";

let FirstName = "section";
let LastName = "Address";
let section = "F50";
let Address = "Delhi";

console.log(obj);