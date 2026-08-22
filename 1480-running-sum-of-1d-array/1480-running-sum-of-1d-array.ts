function runningSum(nums: number[]): number[] {

  const result: number []= [];
  let currentSum: number=0;

  for (let i =0; i<nums.length; i++){
    currentSum+=nums[i];
    result.push(currentSum);

  }


  return result;  
};