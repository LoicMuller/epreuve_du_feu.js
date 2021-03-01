// process.argv = [node, script, arg]
const arg = process.argv[2];

var res;
var x = 0;

function majuscule(arg) {
  for (i = 0; i < arg.length; i++) {
    x++;
    if (i == 0) {
      res = arg[i].toLowerCase();
    }
    if (arg[i] == " ") {
      x--;
    }
    if (i !== 0) {
      if (x % 2 == 0) {
        res += arg[i].toUpperCase();
      } else {
        res += arg[i].toLowerCase();
      }
    }
  }

  console.log(res);
}

majuscule(arg);
