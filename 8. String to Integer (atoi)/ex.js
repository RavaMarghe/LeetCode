function myAtoi(s) {
  s = parseInt(s);

  if (isNaN(s)) {
    return 0;
  }

  if (s <= -2147483648) {
    return -2147483648;
  }
  if (s > 2147483647) {
    return 2147483647;
  }

  return s;
}

console.log(myAtoi("   42"));
console.log(myAtoi("-42"));
console.log(myAtoi("4193 with words"))
