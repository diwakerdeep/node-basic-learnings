const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

const result = writeFileSync(
  "./content/result.txt",
  `Here are the result files : ${first} and ${second}`,
  { flag: "a" }
);
console.log(result);
