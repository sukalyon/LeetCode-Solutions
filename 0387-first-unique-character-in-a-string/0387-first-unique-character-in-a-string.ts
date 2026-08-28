function firstUniqChar(s: string): number {
 const charMap = new Map<string, number>();

for (let letter of s){
const currentCount = charMap.get(letter) ?? 0;
charMap.set(letter, currentCount +1); 
}

for (let i=0; i<s.length; i++){
    if(charMap.get(s[i])===1){
        return i;
    }   
}
 return -1;
};