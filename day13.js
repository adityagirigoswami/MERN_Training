async function  fetchuserData(){
    try{
    let response = await fetchData()
    }
    catch(error){
        console.log(error);
    }
}

fetchuserData();

let user={
    username : "aditya",
    age : "30",
    getUserDetails : function(){
        console.log();
    }
}

Person.prototype.greet = function(){
    console.log('hello,my name is $(this.name)')
}
const person1 = Person("shubham" , 40);
const person2 = Person2("vinay" , 50);

class person{
    constructor(name,age){
        this.name
    }
}