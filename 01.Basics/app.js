// let name = "Lokesh";
// let whatDoYouWannaBecomeInYourLife= "programmer";
// let gender = "Male";
// let twitterHandle = "lokesh7729"

// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(twitterHandle);


// Falsy value in js
//  -> false
//  -> null
//  -> undefined
//  -> 0 
//  -> -0
//  -> NaN
//  -> '',"",``, (empty quotes)


// Challenge 
// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 13 ;

// console.log(isJsProgrammingLanguage);
// console.log(isJsHard);
// console.log(favNumb + undefined);


// Comparison Operators
// -----------------------------------------
// -> Relational Operator 

// > grater then
// < less then
// >= greater then or equal to
// <= less then or equal to

// console.log(10>10);  // false
// console.log(10<10); // false
// console.log(10<=10);// true
// console.log(10>=10);// true
// ----------------------------------------
// -> Equality Operator 

// === strict equality (type + value)
// ==! strict non-equality operators (type + value)
// == lose equality operator (value)
// =! lose not equality operator (value)

// ----------------------------------------------

// let favNumb = 13;
// let favNumb2= 13;
// console.log(favNumb>favNumb2);
// console.log(favNumb<favNumb2);
// console.log(favNumb>=favNumb2);
// console.log(favNumb<=favNumb2);

// console.log(favNumb===favNumb2);
// console.log(favNumb==!favNumb2);
// console.log(favNumb==favNumb2);
// console.log(favNumb=!favNumb2);

// -----------------------------------------------

// Strings
// let firstName = '   Lokesh   '
// let secondName = "WebDev"
// console.log(firstName);
// console.log(secondName);

// 1. Concatenation
// let fullName= firstName.concat(secondName);
// console.log(fullName);

// 2. Append
// firstName += " something else";
// console.log(firstName);


// 3. Length 
// console.log(firstName.length)

// 4. Cases 
// console.log(firstName.toLowerCase())
// console.log(firstName.toUpperCase())

// 5. Slice
// console.log(firstName.slice(0,4))

// 6. Split & Join
// console.log(firstName.split('').join(''));
 
// 7. Includes
// console.log(firstName.includes("L"));//

// 8. Trim - used to trim empty spaces from string
// console.log(firstName.trim());


// ---------------------------------------------------------------------

// let firstName= "lokesh"
// let lastName= "chauhan"
// let fullName = `${firstName} ${lastName} is a fullstack web developer`
// console.log(fullName);


// Challenge
// let favActorFirstName= "Salman";
// let favActorLastName= "khan";
// let fullName = favActorFirstName + " " + favActorLastName;
// let upperCase= fullName.toUpperCase()
// let message = `MY favourite Actor Is ${upperCase} & and he is Smart`;
// message += `his best show is Silicon Valley`;
// console.log(message);

// -------------------------------------------------------------------------------

// Type Conversion iN JAVASCRIPT /////////////////////

let money = "30.34";

// - Convert String to number
// money = parseInt(money)
// money = +money
// money = Number(money)


// - Convert Number to String
// money = money.toString();
// money = String(money);


// - Convert String to Decimal
// money= parseFloat(money);

console.log(typeof money);
