// // process.argv = [node, script, arg]
const arg = process.argv.slice(2).map((n) => Number(n));

// Shell Sort algorithm
function tri(arr) {
  let x = arr.length;

  for (let gap = Math.floor(x / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < x; i++) {
      let temp = arr[i];

      let j;
      for (j = i; j >= gap && arr[j - gap] < temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }

  return arr;
}

console.log(tri(arg));
