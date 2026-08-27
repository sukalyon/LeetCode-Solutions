function canConstruct (ransomNote: string, magazine: string): boolean{
const charMap = new Map<string, number>();

for (let letter of magazine){
    const currentCount = charMap.get(letter) ?? 0;
    charMap.set(letter, currentCount + 1);
}

for (let letter of ransomNote){
    const count = charMap.get(letter) ?? 0;

    if(count === 0){
        return false;
    }

    charMap.set(letter, count -1);
}
return true;
}