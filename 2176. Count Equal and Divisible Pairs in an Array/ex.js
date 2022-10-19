function countPairs(nums, k) {
  let result = 0;

  //cicla su ogni elemento dell'array e incrementa by 1, partendo dal primo
  for (let i = 0; i < nums.length; i++) {
    //cicla su ogni elemento dell'array e incrementa by 1, partendo dal secondo (i+1)
    for (let j = i + 1; j < nums.length; j++) {
      //se i e j sono uguali, e i*j diviso il poaram k da resto 0
      if (nums[i] == nums[j] && (i * j) % k == 0) {
        //incrementa di 1 il result ogni volta che le condizioni sono soddisfatte
        result += 1;
      }
    }
  }
  return result;
}

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));

6/2 
