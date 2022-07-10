//CommonJS - every file is a module (by default)
//module - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-util");
const data = require("./6-alternative-export");
require("./7-something-new");
console.log(data);

sayHi("Prince");
sayHi(names.Harshit);
sayHi(names.Deepak);
sayHi(data.newPerson.name);
