const fs = require("fs");
const c1 = fs.readFileSync("./" + process.argv[2], "utf-8").split("\r\n");
const c2 = fs.readFileSync("./" + process.argv[3], "utf-8").split("\r\n");

function rectangle(arr1, arr2) {
  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2[i].length; j++) {
      if (
        arr2[i][j] == arr1[0][0] &&
        arr2[i][j + 1] == arr1[0][1] &&
        arr2[i][j + 2] == arr1[0][2]
      ) {
        if (
          arr2[i + 1][j] == arr1[1][0] &&
          arr2[i + 1][j + 1] == arr1[1][1] &&
          arr2[i + 1][j + 2] == arr1[1][2]
        ) {
          if (
            arr2[i + 2][j] == arr1[2][0] &&
            arr2[i + 2][j + 1] == arr1[2][1] &&
            arr2[i + 2][j + 2] == arr1[2][2]
          ) {
            console.log(j, i);
          }
        }
      }
    }
  }
}

rectangle(c1, c2);
