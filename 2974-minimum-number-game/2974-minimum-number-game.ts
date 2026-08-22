function numberGame (nums: number[]): number []{

nums.sort((a, b) => a - b);
let arr: number[]=[];

for(let i=0; i<nums.length; i+=2){

arr.push(nums[i+1]);
arr.push(nums[i]);


}

  return arr;
}