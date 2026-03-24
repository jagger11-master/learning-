 /*
 const name = {
    first_name:"godfrey",
    last_name: "david",
    age:20
 };

 // you can create another javascriptkeyword with an empty curl brackets and add later the properties

 const key = { };
 //add the properies
 key.fisrt_name = "godfrey";
 key.last_name = "david";
 key.age = 20;
 console.log(key);
 

 //ways in which we can access the properties of object
 // 1.dot properties
 // 2.bracket properties
 let answer = {
    firs_answer: "true",
    second_answer: "false",
    exception_answer: "null"

 };
 let key = "firs_answer";
 console.log(answer[key]);
 
const user = {
    name:"ashura",
    age: "20"
};
user.name = "emma";
console.log(user.name);

//using bracket objects the following are to consider 
//use "" if you are directky calling the key value 
//example 
const user = {
    name: "ashure",
    age: 20,
};
console.log(user["name"]);
console.log(user["age"]);

//example
const user = {
    name: 'ashura',
    age: 20
};
let me = 'name';
console.log(user[me]);
const user = {
    name: 'ashura',
    age: 20
};
let me = "name";
delete user.name;
console.log(user["name"]);
console.log(user[me]);
console.log(user.age);

const user = {
    name:"dorcas",
    education: "beginer",
    age: 3, 
    get:  function () { return this.user}
};
console.log(user.name);
*/



const user = {
    name: "dorcas",
    education: "beginner"
};

function greet({ name }) {
    return `${name}!`;
}
console.log(user.name);
