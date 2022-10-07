function reverse(x) {
  // "n" is commonly used for decimal numbers

  // you can use "Math.abs()" instead of changing the sing if negative
  // conversion of string to number can be done with unary plus opertor
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }
  let reverseX = parseInt(String(x).split("").reverse().join(""));
  // ---> reverseX = +String(Math.abs(x)).split("").reverse().join(""); <---

  //>>>>> * NON FUNZIONA <<<<<
  // use number constant instead of calculating the power
  if (reverseX > Math.pow(2, 32)) {
    return 0;
  }
  // ---> if (reverseX > 0x7fffffff) {
  //        return 0;
  //      } <---

  // don't multiply with -1, just use the unary minus operator
  // the ternary operator might interest you as well (you could even use it to combine the above return into one return statement)
  if (isNegative) {
    return -1 * reverseX;
  } else {
    return reverseX;
  }
  // ---> return x < 0 ? -reverseX : reverseX; <---
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1563847412)); // * NON FUNZIONA
