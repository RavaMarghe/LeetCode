var longestPalindrome = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let left = i;
    let right = i;

    while (left > 0 && [left - 1] === char) left--;
    while (right < s.length && s[right + 1] === char) {
      right++;
      i++;
    }

    while (left >= 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }

    if (result.length < right - left + 1) result = s.slice(left, right + 1);
  }
  return result;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));