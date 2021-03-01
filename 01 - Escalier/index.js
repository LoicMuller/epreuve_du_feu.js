// process.argv = [node, script, arg]
const arg = process.argv[2];

var x, space, sharp, res;

function escalier(x) {
  for (var i = 0; i < arg; i++) {
    x = arg - (i + 1);
    space = " ";
    sharp = "#";
    res = " ".repeat(x) + "#".repeat(arg - x);
    console.log(res);
  }
}

escalier(arg);
