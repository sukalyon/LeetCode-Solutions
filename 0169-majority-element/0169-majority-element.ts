function majorityElement(nums: number[]): number {
    const countMap = new Map <number,number> ();

    for (let num of nums){
       const count = (countMap.get(num) ?? 0) +1;
       countMap.set(num, count);

       if(count > nums.length / 2){
        return num;
       }
       
    }
return -1;
};