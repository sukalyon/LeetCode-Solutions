function singleNumber(nums: number[]): number {
  const mySet = new Set<number>();

  for (let num of nums){
    if(mySet.has(num))
    {
     mySet.delete(num)
    }
    else {
      mySet.add(num);
    }
   
  }
  return Array.from(mySet)[0];
};