

function forLoop(myArray) {
  for (loop = 0; loop < 25; loop++) {
    if (loop == 1) {
      myArray.push('I am 1 strange loop.');
    }
    else {
      myArray.push(`I am ${loop} strange loops.`);
    }
  }
  return myArray;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return ('done')
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array) {
  return `array`
}
