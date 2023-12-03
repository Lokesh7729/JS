// year , month , day, hours, minutes, second , milliseconds
const date = new Date();

// const year = date.getFullYear()
// const month= date.getMonth()
// const datee= date.getDate()
// const hour= date.getHours()
// const min= date.getMinutes()
// const milsec= date.getMilliseconds()
// console.log(`year: ${year}`);
// console.log(`month:${month}`);
// console.log(`datee:${datee}`);
// console.log(`hour:${hour}`);
// console.log(`min:${min}`);
// console.log(`milsec:${milsec}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());


// setInterval((fn) => {
//     console.log("hellooooo");
    
// }, 5000 );


// setTimeout

const interValId= setInterval(function (){
    console.log('this fuction will executed after 2sec');
},1000)

setTimeout(function(){
    clearInterval(interValId)
    console.log('interval stopped');
},10000)