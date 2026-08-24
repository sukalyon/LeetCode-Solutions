function intersection(nums1: number[], nums2: number[]): number[] {
    let resultSet = new Set<number>();
    const nums1Set = new Set(nums1);

    for( let num of nums2){
        if(nums1Set.has(num)){
            resultSet.add(num);
        }

    }
    
return [...resultSet];

};