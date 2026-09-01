function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (numMap.has(currentNum)) {
            const lastSeenIndex = numMap.get(currentNum)!;
            
            if (i - lastSeenIndex <= k) {
                return true;
            }
        }

        numMap.set(currentNum, i);
    }

    return false;
}