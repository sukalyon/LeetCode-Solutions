function findTheDifference(s: string, t: string): string {
    const charMap = new Map <string, number>();

    for (let letter of s){
        const count = charMap.get(letter) ?? 0;
        charMap.set(letter, count +1);       
    }

    for (let letter of t){
      const count = charMap.get(letter) ?? 0;

        if(count === 0){
            return letter;
        }
        charMap.set(letter, count -1);
    }
    return "";
};