const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    // return console.log(result);
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Here are the result files : ${first} and ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              return result;
            }
          }
        );
      }
    });
  }
});
