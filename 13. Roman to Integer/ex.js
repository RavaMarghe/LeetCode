function romanToInt(s) {
  let result = 0;
  const roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      result -= roman[s[i]];
    } else {
      result += roman[s[i]];
    }
  }

  return result;
}



console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
