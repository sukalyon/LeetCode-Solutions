function findNumbers(nums: number[]): number {
    let result: number = 0;

  for (let i = 0; i < nums.length; i++) {
    let digits: number = nums[i].toString().length;
    if (digits % 2 === 0) {
      result++;
    }
  }

  return result;
};