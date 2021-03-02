const fs = require("fs");
const c1 = process.argv[2];
const c2 = fs.readFileSync("./" + process.argv[3], "utf-8").split("\r\n");

function cleanString(str) {
  return str
    .toLowerCase()
    .replace(/[^\x00-\xFF]/g, "")
    .split("")
    .sort()
    .join("");
}

function anagramme(str, file) {
  var res = [];

  for (i = 0; i < file.length; i++) {
    if (cleanString(str) == cleanString(file[i])) {
      res.push(file[i]);
    }
  }
  console.log(res);
}

anagramme(c1, c2);
