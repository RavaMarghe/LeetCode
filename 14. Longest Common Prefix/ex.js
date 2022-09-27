var longestCommonPrefix = function (strs) {
  let result = "";

  let match = true;

  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i];
    for (let word in strs) {
      if (strs[word][i] !== letter) {
        match = false;
      }
    }
    if (match === false) break;
    result += letter;
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
