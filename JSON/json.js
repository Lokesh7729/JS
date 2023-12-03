// JSON - JAVASCRIPT OBJECT NOTATION

const perosn = {
  name: "lokesh chauhan",
  age: 20,
  email: "lokehs.gmail.com",
  isSubscribed: true,
  skills: ["HTML", "CSS", "JAVASCIRPT", "REACT JS"],
  address: {
    city: "MP",
    member: true,
  },
};

// JSON.stringify()- covert our js file to json
const jsonString= JSON.stringify(perosn);
console.log(jsonString);

const parseObject= JSON.parse(jsonString);
console.log(parseObject);

