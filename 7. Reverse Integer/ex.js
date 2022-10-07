function reverse(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }

  let reverseX = parseInt(String(x).split("").reverse().join(""));
  if (reverseX > 0x7fffffff) {
    return 0;
  }

  if (isNegative) {
    return -1 * reverseX;
  } else {
    return reverseX;
  }
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
