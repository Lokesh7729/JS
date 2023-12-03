// function greet(){
//     console.log("hello good morning");
// }
// greet()

// function sayHello(name){
// console.log(`hello ${name}`);
// }
// sayHello("lokesh")

// function add(num1,num2){
//     return num1+num2

// }
// res=add(10,20);
// console.log(res);

// // challange

// function myfunction(a ,b ){
//     return a*b
// }
// res= myfunction(13,10);
// console.log(res);

// Function Declaration
function sayHello(username){
    console.log(`hello ${username}`);
}
sayHello("lokesh")

// Function Expression
const greet = function (user){
    console.log(`HELLO ${user}`);
}
greet("loki")


// Call back function => When we provide fucntion as an (agrument) to other function that fucntion is known as callback funciton

//practice

function showCallFunc(fn){
    const a = "helloo";
    fn(a);
}

showCallFunc(function(a){
    console.log(a);
})
